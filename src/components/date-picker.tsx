import React, { useState, useMemo } from "react";
import dayjs from "dayjs";
import { motion, AnimatePresence } from "motion/react";
import ExpandIcon from "@/components/icons/expand";
import ChevronLeftIcon from "@/components/icons/chevron-left";
import ChevronRightIcon from "@/components/icons/chevron-right";
import ShrinkIcon from "@/components/icons/shrink";

type DatePickerProps = {
  selectedDays: dayjs.Dayjs[];
  setSelectedDays: (days: dayjs.Dayjs[]) => void;
};

const DatePicker = (props: DatePickerProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const { selectedDays, setSelectedDays } = props;

  const startOfMonth = currentMonth.startOf("month");
  const endOfMonth = currentMonth.endOf("month");
  const today = dayjs();

  // Calculate the start and end of the display grid
  const gridStart = startOfMonth.startOf("week");
  const gridEnd = endOfMonth.endOf("week");

  // Calculate the current week's start and end
  const currentWeekStart = today.startOf("week");
  const currentWeekEnd = today.endOf("week");

  // Memoize all days in the display grid (entire month view)
  const displayDays = useMemo(() => {
    const days = [];
    let currentDay = gridStart;
    while (currentDay.isBefore(gridEnd) || currentDay.isSame(gridEnd, "day")) {
      days.push(currentDay);
      currentDay = currentDay.add(1, "day");
    }
    return days;
  }, [gridStart, gridEnd]);

  // Memoize all days in the current week (collapsed view)
  const currentWeekDays = useMemo(() => {
    const days = [];
    let currentDay = currentWeekStart;
    while (
      currentDay.isBefore(currentWeekEnd) ||
      currentDay.isSame(currentWeekEnd, "day")
    ) {
      days.push(currentDay);
      currentDay = currentDay.add(1, "day");
    }
    return days;
  }, [currentWeekStart, currentWeekEnd]);

  // Check if a day is selected
  const isDaySelected = (day: dayjs.Dayjs) => {
    return selectedDays.some((selectedDay) => selectedDay.isSame(day, "day"));
  };

  // Toggle day selection
  const toggleDaySelection = (day: dayjs.Dayjs) => {
    setSelectedDays((prevSelectedDays) => {
      if (isDaySelected(day)) {
        return prevSelectedDays.filter(
          (selectedDay) => !selectedDay.isSame(day, "day")
        );
      }
      return [...prevSelectedDays, day];
    });
  };

  // Render days in the grid
  const renderDays = (days: dayjs.Dayjs[]) => {
    return days.map((day, index) => (
      <motion.div
        key={index}
        onClick={() => toggleDaySelection(day)}
        className={`text-center content-center text-base font-bold cursor-pointer w-[25px] h-[23px] ${
          isDaySelected(day)
            ? "rounded-sm bg-pale-blue text-moderate-pink"
            : day.isSame(currentMonth, "month")
            ? ""
            : "text-light-gray"
        }`}
        whileTap={{ scale: 0.95 }}
      >
        {day.date()}
      </motion.div>
    ));
  };

  const dayNames = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  return (
    <div className="text-black text-sm bg-white px-1 py-2 flex flex-col gap-2">
      {/* Header with navigation buttons */}
      <div className="flex justify-between items-center py-2 px-[2px]">
        <div className="flex items-center gap-2 px-3">
          {isExpanded ? (
            <button
              onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
              className="size-3 text-center content-center"
            >
              <ChevronLeftIcon />
            </button>
          ) : null}
          <h2 className="font-bold text-[10px] leading-[12.1px]">
            {currentMonth.format("MMMM YYYY")}
          </h2>
          {isExpanded ? (
            <button
              onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
              className="size-3 text-center content-center"
            >
              <ChevronRightIcon />
            </button>
          ) : null}
        </div>
        {/* Toggle between week and month views */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-[19px] h-[12px] text-center content-center grid grid-cols-1 grid-rows-1"
        >
          <ShrinkIcon
            className={`col-span-full row-span-full transition-all duration-500 ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          />
          <ExpandIcon
            className={`col-span-full row-span-full transition-all duration-500 ${
              !isExpanded ? "opacity-100" : "opacity-0"
            }`}
          />
        </button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 gap-y-2 place-items-center">
        {dayNames.map((day) => (
          <div
            key={day}
            className="text-light-gray font-normal text-xs leading-[15px] text-center"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Animated display of days */}
      <AnimatePresence>
        <motion.div
          key={isExpanded ? "month" : "week"}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-7 gap-y-2 place-items-center overflow-hidden"
        >
          {renderDays(isExpanded ? displayDays : currentWeekDays)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DatePicker;

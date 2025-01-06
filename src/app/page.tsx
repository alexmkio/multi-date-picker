"use client";

import DatePicker from "@/components/date-picker";
import dayjs from "dayjs";
import { useState } from "react";

export default function Home() {
  const [selectedDays, setSelectedDays] = useState<dayjs.Dayjs[]>([dayjs()]);

  return (
    <div className="bg-light-grayish-blue pt-8 md:pt-6 pb-12 sm:pb-[227px] h-dvh">
      <div className="md:mt-8 w-full max-w-[1352px] mx-auto">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="sm:w-[76.74%] flex flex-col gap-12 md:gap-6"></div>
          <div className="sm:w-[23.26%] flex flex-col gap-12 sm:gap-[1px] rounded-lg overflow-hidden">
            <DatePicker
              selectedDays={selectedDays}
              setSelectedDays={setSelectedDays}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

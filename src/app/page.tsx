"use client";

import CompanyNews from "@components/company-news";
import DatePicker from "@components/date-picker";
import SalesNews from "@components/sales-news";
import { ScrollingList } from "@components/scrolling-list";
import dayjs from "dayjs";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  PopupModal,
  PopupModalContent,
  PopupModalTrigger,
} from "@components/popup-modal";
import { CompanyCardPopup } from "@components/company-card-popup";
import { CompanyCard } from "@components/company-card";
import { companyCards, featuredCard } from "@mock-data/company-cards";
import { FeaturedCard } from "@components/featured-card";

export default function Home() {
  const [selectedDays, setSelectedDays] = useState<dayjs.Dayjs[]>([dayjs()]);

  return (
    <div className="bg-light-grayish-blue pt-8 md:pt-6 pb-12 sm:pb-[227px] min-h-dvh">
      <div className="md:mt-8 w-full max-w-[1352px] mx-auto">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="sm:w-[76.74%] flex flex-col gap-12 md:gap-6">
            <h1 className="text-xl font-bold">Trending Topics</h1>
            <ScrollingList>
              <div className="flex sm:flex-col gap-4 sm:gap-6 w-full">
                <AnimatePresence>
                  <PopupModal key="featured-card">
                    <PopupModalTrigger>
                      <motion.div
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1,
                        }}
                        className="h-full sm:ml-0 w-full"
                      >
                        <FeaturedCard data={featuredCard} />
                      </motion.div>
                    </PopupModalTrigger>
                    <PopupModalContent
                      header={featuredCard?.title}
                      icon={featuredCard?.icon}
                    >
                      <CompanyCardPopup data={featuredCard} />
                    </PopupModalContent>
                  </PopupModal>
                  <div className="flex sm:grid grid-cols-4 gap-2.5 mr-4 sm:mr-0">
                    {companyCards?.map((item, index) => (
                      <PopupModal key={index}>
                        <PopupModalTrigger>
                          <motion.div
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 20,
                              delay: (index + 2) * 0.1,
                            }}
                            className="h-full"
                          >
                            <CompanyCard data={item} />
                          </motion.div>
                        </PopupModalTrigger>
                        <PopupModalContent
                          header={item?.title}
                          icon={item?.icon}
                        >
                          <CompanyCardPopup data={item} />
                        </PopupModalContent>
                      </PopupModal>
                    ))}
                  </div>
                </AnimatePresence>
              </div>
            </ScrollingList>
          </div>
          <div className="sm:w-[23.26%] flex flex-col gap-12 sm:gap-[1px] rounded-lg overflow-hidden">
            <DatePicker
              selectedDays={selectedDays}
              setSelectedDays={setSelectedDays}
            />
            <SalesNews />
            <CompanyNews />
          </div>
        </div>
      </div>
    </div>
  );
}

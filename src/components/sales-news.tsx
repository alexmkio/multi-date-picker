import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { NewsArticle } from "@/types/news-article";
import { ScrollingList } from "@components/scrolling-list";
import { useBreakpoints } from "@hooks/use-breakpoints";
import { salesNews } from "@mock-data/news";

export default function SalesNews() {
  const [items, setItems] = useState<NewsArticle[]>([]);
  const [visibleItems, setVisibleItems] = useState<NewsArticle[]>([]);
  const [showAllItems, setShowAllItems] = useState(false);
  const { isMobile } = useBreakpoints();

  const handleClick = () => {
    if (showAllItems) {
      setVisibleItems(items.slice(0, 3));
    } else {
      setVisibleItems(items);
    }
    setShowAllItems(!showAllItems);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const results = salesNews;
        setItems(results);
        setVisibleItems(results.slice(0, 3));
      } catch (error) {
        console.error("Error fetching sales news:", error);
      }
    };

    fetchNews();
  }, []);

  const newsItems = useMemo(() => {
    return visibleItems?.map((item) => (
      <div
        key={item?.id}
        className="bg-white py-4 sm:py-[29px] px-4 flex flex-col gap-2 w-[258px] sm:w-auto rounded-sm sm:rounded-none"
      >
        <div className="flex justify-between items-center">
          <div className="rounded-sm p-1 bg-pale-blue text-moderate-pink font-semibold text-[9px]">
            {item?.subject}
          </div>
          <div className="font-bold text-[10px] leading-[12.1px]">
            {item?.date}
          </div>
        </div>
        {isMobile ? (
          <>
            <div className="flex gap-2">
              {item?.thumbnail ? (
                <div className="w-[77px] h-[63px] relative overflow-hidden rounded-sm shrink-0">
                  <Image
                    src={item?.thumbnail}
                    alt={item?.title || ""}
                    fill={true}
                    sizes="77px"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <a
                href={item?.path}
                className="text-[18px] leading-[21.78px] font-semibold hover:underline line-clamp-3"
              >
                {item?.title}
              </a>
            </div>
            <div className=" text-xs leading-[14.52px] line-clamp-2">
              {item?.description}
            </div>
          </>
        ) : (
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <a
                href={item?.path}
                className="text-[18px] leading-[21.78px] font-semibold hover:underline"
              >
                {item?.title}
              </a>
              <div className=" text-xs leading-[14.52px]">
                {item?.description}
              </div>
            </div>
            {item?.thumbnail ? (
              <div className="m-2 w-[77px] h-[63px] relative overflow-hidden rounded-sm shrink-0">
                <Image
                  src={item?.thumbnail}
                  alt={item?.title || ""}
                  fill={true}
                  sizes="77px"
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>
        )}
      </div>
    ));
  }, [visibleItems]);

  return (
    <div className="flex flex-col text-black">
      <div className="sm:bg-white flex justify-between items-center px-4 sm:pt-4 pb-4 sm:pb-0">
        <h2 className="text-[18px] leading-[21.78px] font-bold">
          Sales Team News
        </h2>
        {items.length > 3 && isMobile && (
          <button
            onClick={() => handleClick()}
            className="text-soft-red font-medium text-sm leading-[16.94px]"
          >
            {showAllItems ? "Show Less" : "See All News"}
          </button>
        )}
      </div>
      <div className="flex sm:flex-col gap-[1px]">
        {isMobile ? (
          <ScrollingList>
            <div className="mx-4 flex gap-2">{newsItems}</div>
          </ScrollingList>
        ) : (
          <>{newsItems}</>
        )}
      </div>
      {items.length > 3 && !isMobile && (
        <div className="bg-white pb-4 px-2 flex flex-row-reverse">
          <button
            onClick={() => handleClick()}
            className="px-1 text-soft-red font-medium text-sm leading-[16.94px]"
          >
            {showAllItems ? "Show Less" : "See All News"}
          </button>
        </div>
      )}
    </div>
  );
}

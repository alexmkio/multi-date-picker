import { StaticImageData } from "next/image";
import Image from "next/image";
import MoreInfoIcon from "@icons/more-info";
import FeaturedIcon from "@icons/featured-news";
import { CardData } from "@/types/card-data";
import { useBreakpoints } from "@/hooks/use-breakpoints";

type Image = {
  image: StaticImageData;
  alt: string;
};

type Props = {
  data: CardData;
};

export function FeaturedCard({ data }: Props) {
  const { isMobile } = useBreakpoints();

  return (
    <div className="w-[258px] sm:w-auto h-[317px] sm:h-auto overflow-hidden relative p-[1px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-0 featured-background-border">
      <div
        className={`rounded-lg p-6 relative overflow-hidden ${
          data?.backgroundImage ? "featured-background" : "bg-moderate-pink"
        }`}
      >
        {data?.backgroundImage ? (
          <Image
            src={data?.backgroundImage}
            alt="background"
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="absolute inset-0 object-cover w-full h-full bg-center"
          />
        ) : null}
        <div className="z-20 relative">
          <div className="flex justify-between items-center mb-4 gap-4">
            <div className="flex gap-4 items-center">
              <FeaturedIcon />
              <span className="text-white text-xs font-bold tracking-[.16em] uppercase">
                Featured news
              </span>
            </div>
            <span className="bg-pale-blue p-1 rounded-[200px] text-desaturated-red text-[9px] font-semibold leading-[10.89px]">
              {data?.source}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="bg-white p-1 rounded-[2px] text-black text-[9px] font-semibold leading-[10.89px]">
              Experience Design
            </span>
            {data?.date ? (
              <div className="text-white font-bold text-[10px] leading-[12.1px]">
                {data?.date}
              </div>
            ) : null}
          </div>

          <h2 className="text-white text-2xl font-bold leading-[29.05px] mt-4">
            {data?.title}
          </h2>
          <div className="text-pale-blue font-bold text-sm leading-[16.94px] mt-2">
            OmniOne&apos;s Answer
          </div>

          <div className="flex gap-4">
            <div className="grow">
              {data?.description ? (
                <p
                  className="text-white font-normal text-sm leading-[16.94px] mt-2 line-clamp-4 sm:line-clamp-1"
                  dangerouslySetInnerHTML={{
                    __html: data?.description,
                  }}
                />
              ) : null}
            </div>
            {isMobile ? null : (
              <div className="flex">
                <a
                  href={data?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-end"
                >
                  <MoreInfoIcon className="size-[25px] text-white" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

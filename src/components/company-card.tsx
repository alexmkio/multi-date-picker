import { Card, CardHeader, CardContent, CardFooter } from "@components/card";
import MoreInfoIcon from "@icons/more-info";
import PopularIcon from "@icons/popular-star";
import Image from "next/image";
import { useBreakpoints } from "@/hooks/use-breakpoints";
import { CardData } from "@/types/card-data";

type Props = {
  data: CardData;
};

export function CompanyCard({ data }: Props) {
  const {
    popular,
    icon: ItemIcon,
    date,
    source,
    title,
    description,
    images,
    bio,
  } = data;
  const { isMobile } = useBreakpoints();

  return (
    <Card className="w-[258px] sm:w-auto rounded-lg flex flex-col p-4 border-none shadow-none h-full">
      <CardHeader className="p-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {ItemIcon ? <ItemIcon /> : null}
            {date ? (
              <div className="text-black font-bold text-[10px] leading-[12.1px]">
                {date}
              </div>
            ) : null}
          </div>
          {source ? (
            <div className="bg-pale-blue p-1 rounded-[200px] text-desaturated-red text-[9px] font-semibold leading-[10.89px]">
              {source}
            </div>
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="flex-grow min-h-[100px] p-0 mt-2">
        <h3 className="text-2xl text-black font-bold leading-[29.05px] line-clamp-2">
          {title}
        </h3>
        {description ? (
          <>
            <h4 className="text-black font-bold text-sm leading-[16.94px] mt-2">
              OmniOne Summary:
            </h4>
            <p
              className="text-dark-gray font-normal text-sm leading-[16.94px] mt-2 line-clamp-4 sm:line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </>
        ) : null}
        {images ? (
          <>
            <h4 className="text-black font-bold text-sm leading-[16.94px] mt-2">
              Images:
            </h4>
            <div className="flex gap-1 mt-2">
              {images
                .filter((x) => x.image && x.image.src)
                .map((image, index) => (
                  <div
                    className="w-[50px] h-[51.61px] relative overflow-hidden rounded-sm"
                    key={index}
                  >
                    <Image
                      src={image.image.src}
                      alt={image.alt}
                      fill={true}
                      sizes="50px"
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>
          </>
        ) : null}
        {bio ? (
          <>
            <div className="p-[1px] w-[35px] h-[35px] rounded-full headshot-border mt-2">
              <div className="w-[33px] h-[33px] relative overflow-hidden rounded-full">
                {bio?.image?.src && (
                  <Image
                    src={bio.image.src}
                    alt={bio.name}
                    fill={true}
                    sizes="33px"
                    className="object-cover"
                  />
                )}
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-black font-bold leading-[29.05px] mt-2">
                {bio.name}
              </h3>
              <dl className="flex gap-1 text-sm mt-2 leading-[16.94px]">
                <dt className="text-black font-bold">Title:</dt>
                <dd className="text-dark-gray font-normal">{bio.title}</dd>
              </dl>
              <dl className="flex gap-1 text-sm mt-2 leading-[16.94px]">
                <dt className="text-black font-bold">Office:</dt>
                <dd
                  className="text-dark-gray font-normal"
                  dangerouslySetInnerHTML={{
                    __html: bio.office,
                  }}
                />
              </dl>
            </div>
          </>
        ) : null}
      </CardContent>
      <CardFooter className="flex-row-reverse justify-between mt-2 p-0 column-">
        {isMobile ? null : <MoreInfoIcon />}
        {popular ? (
          <div className="flex gap-1 items-center grow">
            <PopularIcon />
            <span className="text-dark-gray font-medium text-xs leading-[14.52px]">
              Popular with your team
            </span>
          </div>
        ) : null}
      </CardFooter>
    </Card>
  );
}

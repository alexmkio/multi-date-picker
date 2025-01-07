import { CardData } from "@/types/card-data";
import LinkIcon from "@icons/link";
import PinIcon from "@icons/pin";

type Props = {
  data: CardData;
};

export function CompanyCardPopup({ data }: Props) {
  const {
    popular,
    icon: ItemIcon,
    date,
    source,
    title,
    description,
    images,
    bio,
    url,
  } = data;

  return (
    <div className="flex gap-4 flex-col">
      {source ? (
        <div className="bg-pale-blue p-1 rounded-[200px] text-desaturated-red text-[9px] font-semibold leading-[10.89px] w-fit">
          {source}
        </div>
      ) : null}
      <div className="flex gap-16">
        <div className="flex gap-[10px] flex-col">
          {title ? (
            <h3 className="text-2xl text-black font-bold leading-[29.05px]">
              {title}
            </h3>
          ) : null}
          {description ? (
            <p
              className="text-black font-normal text-sm leading-[16.94px]"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          ) : null}
          <div className="flex items-center gap-[18px] py-2 px-1 text-soft-red font-medium text-sm leading-[16.94px]">
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <LinkIcon />
                Visit Website
              </a>
            ) : null}
            <button className="flex items-center gap-1">
              <PinIcon className="size-[11.56px]" />
              Add to My Pins
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

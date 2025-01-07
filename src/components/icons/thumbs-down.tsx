import { twMerge } from "tailwind-merge";

interface ThumbsDownIconProps {
  className?: string;
}

const ThumbsDownIcon = ({ className }: ThumbsDownIconProps) => {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      className={twMerge("w-[15px] h-[16px] text-soft-pink", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.32201 10.379L2.00201 10.379C0.842008 10.319 -0.0479924 9.35903 0.00200746 8.19903L0.992007 1.66902C1.18201 0.769025 1.91201 0.0990244 2.82201 -0.000975661L13.132 -0.000976562C14.102 0.0990234 14.902 0.889024 15.002 1.85902L15.002 7.10902C14.912 8.08902 14.112 8.88902 13.132 8.97902H11.312L8.71201 14.829C8.46201 15.279 8.02201 15.249 7.57201 15.169C6.33201 14.949 5.40201 13.869 5.32201 12.619L5.32201 10.369V10.379ZM10.172 1.37902L2.96201 1.37902C2.74201 1.37902 2.45201 1.61902 2.39201 1.82902L1.40201 8.19903C1.35201 8.58903 1.63201 8.94903 2.02201 8.98903H6.06201C6.38201 9.02903 6.65201 9.24903 6.70201 9.57903C6.74201 10.519 6.65201 11.489 6.70201 12.419C6.71201 12.669 6.76201 12.899 6.88201 13.119C7.05201 13.429 7.34201 13.659 7.68201 13.769L10.182 8.13902V1.38902L10.172 1.37902ZM11.552 7.60902H13.022C13.302 7.60902 13.632 7.24902 13.632 6.96902L13.632 2.05902C13.652 1.76902 13.312 1.38902 13.022 1.38902L11.552 1.38902L11.552 7.61902V7.60902Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ThumbsDownIcon;

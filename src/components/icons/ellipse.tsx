import { twMerge } from "tailwind-merge";

interface EllipseIconProps {
  className?: string;
}

const EllipseIcon = ({ className }: EllipseIconProps) => {
  return (
    <svg
      width="21"
      height="25"
      viewBox="0 0 21 25"
      className={twMerge("w-[21px] h-[25px] text-white", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10.75" cy="4.5" r="2" fill="currentColor" />
      <circle cx="10.75" cy="12.5" r="2" fill="currentColor" />
      <circle cx="10.75" cy="20.5" r="2" fill="currentColor" />
    </svg>
  );
};

export default EllipseIcon;

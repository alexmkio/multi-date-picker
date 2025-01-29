import { twMerge } from "tailwind-merge";

interface StockIconProps {
  className?: string;
}

const StockIcon = ({ className }: StockIconProps) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      className={twMerge("size-[15px] text-cyan", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.17134 7.69121C8.89362 6.96894 9.60163 6.26092 10.3144 5.54815C10.2906 5.54815 10.2716 5.54815 10.2526 5.54815C10.0008 5.54815 9.74894 5.54815 9.4971 5.54815C9.08369 5.54815 8.77957 5.22027 8.81283 4.80687C8.83659 4.52651 9.07894 4.26991 9.36404 4.22239C9.41156 4.21289 9.45433 4.21289 9.50185 4.21289C10.3097 4.21289 11.1127 4.21289 11.9205 4.21289C12.3007 4.21289 12.6 4.51701 12.6 4.8924C12.6 5.41035 12.6 5.92829 12.6 6.44624C12.6 6.73135 12.6 7.02121 12.6 7.30632C12.6 7.70547 12.3197 7.99058 11.9205 8.00008C11.6164 8.00958 11.3123 7.74348 11.2743 7.42986C11.2695 7.38235 11.2648 7.33958 11.2648 7.29206C11.2648 7.04972 11.2648 6.81213 11.2648 6.56979C11.2648 6.55078 11.2648 6.53177 11.2648 6.49851C11.241 6.52227 11.222 6.53652 11.203 6.55553C10.3572 7.40135 9.51135 8.24718 8.66553 9.093C8.41843 9.34009 8.03829 9.36385 7.76744 9.15952C7.73417 9.13576 7.70566 9.10725 7.67715 9.07874C7.25424 8.65583 6.83133 8.23292 6.40842 7.81001C6.39416 7.79575 6.37991 7.7815 6.3514 7.74348C6.33714 7.77199 6.32764 7.79575 6.31338 7.81001C5.39153 8.73186 4.46968 9.65371 3.54783 10.5756C3.34826 10.7704 3.10591 10.8417 2.84456 10.7419C2.37414 10.5661 2.25059 9.99584 2.60222 9.63945C2.9491 9.28782 3.29599 8.94569 3.64287 8.59881C4.38415 7.85753 5.13018 7.11149 5.87147 6.37021C6.1043 6.13737 6.45119 6.09461 6.72204 6.26567C6.76956 6.29418 6.81232 6.3322 6.85509 6.37496C7.28275 6.79787 7.70566 7.22554 8.12857 7.64845C8.14283 7.6627 8.15233 7.68646 8.16659 7.70072L8.17134 7.69121Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default StockIcon;

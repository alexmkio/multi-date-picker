import { twMerge } from "tailwind-merge";

interface PinIconProps {
  className?: string;
}

const PinIcon = ({ className }: PinIconProps) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      className={twMerge("size-[21px] text-soft-red", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.222 11.087C20.2047 11.1475 20.1917 11.2124 20.1744 11.273C20.0187 11.8355 19.5297 12.1947 18.9196 12.199C17.9546 12.199 16.994 12.199 16.0291 12.199C15.9555 12.199 15.9036 12.2207 15.8473 12.2726C14.9559 13.1683 14.0645 14.0597 13.1688 14.9511C13.1169 15.003 13.0953 15.0506 13.0953 15.1198C13.0953 16.0934 13.0953 17.067 13.0953 18.0406C13.0953 18.6724 12.6842 19.1787 12.0654 19.2955C11.6284 19.3777 11.2476 19.2479 10.9317 18.9363C10.6331 18.6378 10.3346 18.3392 10.036 18.0406C9.1749 17.1795 8.31813 16.3228 7.45703 15.4617C7.4354 15.44 7.41376 15.4227 7.3878 15.3968C7.35751 15.4227 7.33155 15.4487 7.30126 15.479C5.85167 16.9286 4.40641 18.3781 2.95683 19.8234C2.59335 20.1869 2.15631 20.3124 1.65869 20.1609C0.775962 19.8926 0.481718 18.7676 1.12213 18.1012C1.45532 17.755 1.79716 17.4219 2.13468 17.0843C3.26406 15.955 4.39343 14.8256 5.52281 13.7005C5.54877 13.6746 5.57906 13.6529 5.63964 13.601C5.59204 13.5707 5.5531 13.5577 5.52281 13.5318C4.38045 12.3894 3.23809 11.2471 2.09141 10.1047C1.86207 9.87536 1.71495 9.61573 1.68033 9.28687C1.6111 8.54261 2.18228 7.90652 2.93087 7.90219C3.9088 7.90219 4.8824 7.90219 5.86033 7.90219C5.93389 7.90219 5.98581 7.88489 6.04207 7.82863C6.93345 6.93292 7.82484 6.04153 8.72055 5.15015C8.77248 5.09822 8.79411 5.04197 8.79411 4.96841C8.79411 4.00346 8.79411 3.04284 8.79411 2.07789C8.79411 1.51537 9.09701 1.05237 9.59896 0.866299C10.0793 0.688887 10.5206 0.77543 10.9057 1.11294C10.9447 1.14323 10.975 1.18218 11.0096 1.2168C13.9304 4.1376 16.8512 7.05841 19.772 9.97488C19.9927 10.1956 20.1528 10.4465 20.1961 10.7624C20.1961 10.7797 20.2047 10.7927 20.2134 10.8057V11.0826L20.222 11.087ZM5.99879 10.4033C7.53925 11.9437 9.05807 13.4625 10.5855 14.9857C10.5855 14.8515 10.5855 14.7088 10.5855 14.566C10.5726 14.1679 10.7154 13.839 11.0009 13.5621C11.4553 13.112 11.9053 12.6577 12.3553 12.2077C13.065 11.498 13.7746 10.7884 14.4799 10.0787C14.653 9.90132 14.8564 9.76718 15.0987 9.71958C15.2415 9.68929 15.3886 9.68929 15.5358 9.68064C15.6569 9.67631 15.7738 9.68064 15.8863 9.68064C14.3631 8.15749 12.84 6.63435 11.3168 5.1112C11.3168 5.27131 11.3168 5.43574 11.3168 5.60449C11.3168 5.94634 11.1957 6.24058 10.9577 6.4829C9.76771 7.67718 8.57343 8.87147 7.37914 10.0614C7.18875 10.2518 6.95509 10.3773 6.68681 10.3989C6.4618 10.4162 6.23679 10.3989 5.99879 10.3989V10.4033Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PinIcon;
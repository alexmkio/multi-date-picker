import { twMerge } from "tailwind-merge";

interface HiddenIconProps {
  className?: string;
}

const HiddenIcon = ({ className }: HiddenIconProps) => {
  return (
    <svg
      width="16"
      height="13"
      viewBox="0 0 16 13"
      className={twMerge("w-[15px] h-[12.1875px] text-black", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.988878 6.53395C0.982874 6.47391 0.982874 6.35983 0.988878 6.29979C1.00689 6.1557 1.08494 5.99959 1.15699 5.87351C1.37314 5.51927 1.65533 5.14101 1.90149 4.80478C3.6907 2.39716 5.9122 0.50588 9.12437 0.824095C10.085 0.92016 11.0096 1.24438 11.8322 1.73071C12.3365 1.32844 12.6608 0.613953 13.4353 0.830099C14.0957 1.01622 14.3299 1.84478 13.8736 2.35513L4.4232 11.8055C3.76275 12.3699 2.77809 11.8535 2.86815 10.995C2.91618 10.5206 3.34247 10.2925 3.61265 9.95626C2.81411 9.16973 2.08162 8.31716 1.45119 7.39253C1.29508 7.16438 1.0249 6.81014 0.994882 6.53996L0.988878 6.53395ZM10.4633 3.10564C9.25046 2.53525 7.79748 2.51724 6.57265 3.0576C5.23975 3.646 4.08697 4.96089 3.26442 6.13168C3.22239 6.19172 3.10231 6.34182 3.08429 6.38985C3.08429 6.40186 3.07229 6.41387 3.08429 6.43188C3.37249 6.85217 3.6787 7.26044 4.00892 7.6447C4.21306 7.88486 4.43521 8.13103 4.65736 8.35318C4.69338 8.38921 4.93354 8.62336 4.95756 8.62336L6.68673 6.9002C6.30247 5.53127 7.61135 4.22239 8.98028 4.60665L10.4753 3.10564H10.4633ZM10.8175 11.6254C12.7808 10.8869 14.2398 9.22377 15.4106 7.54864C15.6628 7.18839 16.023 6.78012 15.981 6.32381C15.951 5.96957 15.4647 5.36916 15.2485 5.06296C15.0504 4.78677 14.8402 4.52259 14.6361 4.25241L13.3092 5.56129V5.60332C13.4713 5.80746 13.6334 6.0176 13.7835 6.22775C13.8075 6.26377 13.9096 6.38385 13.8976 6.42588C12.7508 8.04697 11.3038 9.80016 9.20843 10.1004C9.04632 10.1244 8.88421 10.1244 8.7221 10.1544L7.02295 11.8595C8.2718 12.1598 9.61671 12.0757 10.8175 11.6194V11.6254Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HiddenIcon;

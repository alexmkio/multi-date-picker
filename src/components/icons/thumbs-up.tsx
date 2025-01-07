import { twMerge } from "tailwind-merge";

interface ThumbsUpIconProps {
  className?: string;
}

const ThumbsUpIcon = ({ className }: ThumbsUpIconProps) => {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      className={twMerge("w-[15px] h-[16px] text-lime-green", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.68 4.83741H13C14.16 4.89741 15.05 5.85741 15 7.01741L14.01 13.5474C13.82 14.4474 13.09 15.1174 12.18 15.2174H1.87C0.9 15.1174 0.1 14.3274 0 13.3574V8.10741C0.09 7.12741 0.89 6.32741 1.87 6.23741H3.69L6.29 0.387412C6.54 -0.0625878 6.98 -0.0325878 7.43 0.0474122C8.67 0.267412 9.6 1.34741 9.68 2.59741V4.84741V4.83741ZM4.83 13.8374H12.04C12.26 13.8374 12.55 13.5974 12.61 13.3874L13.6 7.01741C13.65 6.62741 13.37 6.26741 12.98 6.22741H8.94C8.62 6.18741 8.35 5.96741 8.3 5.63741C8.26 4.69741 8.35 3.72741 8.3 2.79741C8.29 2.54741 8.24 2.31741 8.12 2.09741C7.95 1.78741 7.66 1.55741 7.32 1.44741L4.82 7.07741V13.8274L4.83 13.8374ZM3.45 7.60741H1.98C1.7 7.60741 1.37 7.96741 1.37 8.24741V13.1574C1.35 13.4474 1.69 13.8274 1.98 13.8274H3.45V7.59741V7.60741Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ThumbsUpIcon;

import { twMerge } from "tailwind-merge";

interface WeatherIconProps {
  className?: string;
}

const WeatherIcon = ({ className }: WeatherIconProps) => {
  return (
    <svg
      width="25"
      height="23"
      viewBox="0 0 25 23"
      className={twMerge("w-[25px] h-[23px] text-soft-red", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.46002 14.6337C6.27002 14.4037 6.06002 14.1937 5.89002 13.9537C5.11002 12.8937 4.78002 11.7037 4.91002 10.3937C5.08002 8.70369 5.88002 7.39369 7.31002 6.48369C8.32002 5.84369 9.43002 5.61369 10.61 5.73369C11.93 5.87369 13.04 6.43369 13.93 7.42369C14.03 7.53369 14.12 7.65369 14.21 7.77369C14.25 7.82369 14.28 7.83369 14.34 7.81369C16.7 7.15369 18.8 7.66369 20.59 9.32369C21.69 10.3437 22.3 11.6337 22.52 13.1037C22.53 13.1737 22.55 13.2437 22.54 13.3137C22.52 13.5037 22.62 13.5837 22.77 13.6837C24.28 14.6337 25.05 16.0137 24.99 17.8037C24.92 19.8737 23.41 21.6437 21.38 22.0737C21.04 22.1437 20.69 22.1737 20.34 22.1737C16.32 22.1737 12.31 22.1837 8.29002 22.1737C6.75002 22.1737 5.55002 21.5137 4.77002 20.1737C3.64002 18.2337 4.40002 15.7037 6.39002 14.6737C6.41002 14.6637 6.43002 14.6537 6.44002 14.6437L6.46002 14.6337ZM14.35 20.3437C14.55 20.3437 14.74 20.3437 14.94 20.3437C16.79 20.3437 18.64 20.3537 20.49 20.3437C21.98 20.3237 23.15 19.1437 23.16 17.6537C23.16 16.5137 22.68 15.6537 21.64 15.1337C21.39 15.0037 21.13 14.8837 20.88 14.7537C20.84 14.7337 20.8 14.6837 20.79 14.6437C20.77 14.4037 20.75 14.1537 20.74 13.9137C20.71 13.3037 20.6 12.7137 20.36 12.1537C19.48 10.1537 17.41 9.06369 15.25 9.48369C14.16 9.69369 13.25 10.2337 12.57 11.1337C12.41 11.3437 12.25 11.5537 12.08 11.7637C12.05 11.8037 11.98 11.8337 11.93 11.8337C11.73 11.8337 11.52 11.8337 11.32 11.8337C9.75002 11.8337 8.53002 13.0437 8.53002 14.6137C8.53002 14.9737 8.53002 15.3237 8.53002 15.6837C8.53002 15.7637 8.51002 15.8037 8.43002 15.8337C8.14002 15.9437 7.85002 16.0637 7.55002 16.1837C7.29002 16.2837 7.06002 16.4237 6.86002 16.6037C6.28002 17.1337 5.99002 17.7737 6.11002 18.5637C6.26002 19.5437 7.19002 20.3737 8.29002 20.3737C10.3 20.3537 12.32 20.3737 14.33 20.3737L14.35 20.3437ZM12.56 8.67369C11.44 7.40369 9.41002 7.07369 7.91002 8.33369C6.45002 9.57369 6.47002 11.4937 7.17002 12.5437C7.19002 12.5037 7.20002 12.4737 7.22002 12.4437C7.43002 12.0137 7.71002 11.6237 8.06002 11.2837C8.87002 10.5037 9.84002 10.0837 10.96 9.99369C11.08 9.99369 11.17 9.94369 11.26 9.85369C11.44 9.66369 11.63 9.48369 11.82 9.30369C12.06 9.08369 12.32 8.87369 12.56 8.66369V8.67369Z"
        fill="currentColor"
      />
      <path
        d="M9.15 2.65393C9.15 2.33393 9.14 2.02393 9.15 1.70393C9.18 1.06393 9.75 0.673927 10.36 0.873927C10.72 0.983927 10.96 1.29393 10.97 1.69393C10.97 2.33393 10.98 2.98393 10.97 3.62393C10.97 4.12393 10.58 4.48393 10.08 4.49393C9.57 4.50393 9.18 4.17393 9.15 3.66393C9.13 3.33393 9.15 2.99393 9.15 2.65393Z"
        fill="currentColor"
      />
      <path
        d="M1.83 11.7943C1.47 11.7943 1.11 11.8243 0.75 11.7943C0.29 11.7343 0 11.3443 0 10.8743C0 10.4043 0.32 10.0343 0.78 9.9943C1.04 9.9743 1.31 9.9743 1.58 9.9743C2 9.9743 2.42 9.9543 2.84 9.9843C3.36 10.0243 3.67 10.4143 3.66 10.9343C3.64 11.4243 3.29 11.7843 2.79 11.8043C2.47 11.8143 2.15 11.8043 1.83 11.8043C1.83 11.8043 1.83 11.7943 1.83 11.7843V11.7943Z"
        fill="currentColor"
      />
      <path
        d="M6.09999 6.02417C6.09999 6.64417 5.53999 7.06417 4.95999 6.89417C4.84999 6.86417 4.73999 6.79417 4.64999 6.70417C4.18999 6.25417 3.73999 5.78417 3.26999 5.33417C2.98999 5.06417 2.97999 4.53417 3.24999 4.19417C3.57999 3.78417 4.26999 3.78417 4.58999 4.16417C4.96999 4.62417 5.42999 5.02417 5.85999 5.44417C6.02999 5.60417 6.10999 5.79417 6.09999 6.02417Z"
        fill="currentColor"
      />
      <path
        d="M14.93 6.92399C14.34 6.92399 13.89 6.38399 14.06 5.85399C14.11 5.68399 14.23 5.51399 14.36 5.38399C14.72 4.99399 15.11 4.62399 15.48 4.25399C15.51 4.22399 15.54 4.20399 15.56 4.17399C15.83 3.77399 16.45 3.81399 16.77 4.07399C17.13 4.37399 17.19 4.89399 16.89 5.27399C16.78 5.40399 16.66 5.52399 16.54 5.64399C16.19 6.00399 15.84 6.35399 15.49 6.71399C15.34 6.86399 15.15 6.92399 14.95 6.92399H14.93Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WeatherIcon;

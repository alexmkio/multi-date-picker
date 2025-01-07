import { twMerge } from "tailwind-merge";

interface CloseIconProps {
  className?: string;
  rotateClass?: string;
}

const CloseIcon = ({ className, rotateClass }: CloseIconProps) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      className={twMerge("size-[9.3px] text-black", className, rotateClass)}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.74914 6.10514L4.85414 6.21014C5.42914 6.78514 5.99914 7.35514 6.57414 7.93014C7.07414 8.43014 7.56914 8.92514 8.06914 9.42014C8.39414 9.74514 8.90914 9.72014 9.20914 9.38014C9.48414 9.07014 9.46414 8.60514 9.15414 8.30014C8.08914 7.23514 7.02414 6.17014 5.95914 5.10514L5.85414 5.00014L5.96914 4.88514C6.71914 4.13514 7.46914 3.38514 8.22414 2.63014C8.53914 2.31514 8.85914 2.00014 9.17414 1.68014C9.49414 1.35514 9.47414 0.835141 9.12914 0.540142C8.81414 0.265142 8.35914 0.290142 8.04914 0.600142C6.98414 1.66514 5.91914 2.73014 4.85414 3.79514C4.81914 3.83014 4.78914 3.86014 4.75414 3.89514L4.63914 3.78014C3.59414 2.74014 2.55414 1.70014 1.51414 0.660142C1.48414 0.630142 1.44914 0.595142 1.41914 0.565142C1.10914 0.270142 0.619144 0.280142 0.319144 0.590142C0.0141443 0.900141 0.0241444 1.38514 0.349144 1.70514C1.40914 2.76514 2.47414 3.83014 3.53414 4.89014C3.56914 4.92514 3.59914 4.95514 3.64414 5.00014L3.54414 5.10014C3.09414 5.55014 2.63914 6.00514 2.18914 6.45514C1.57414 7.07014 0.954144 7.68514 0.344144 8.30514C0.0141443 8.63514 0.0241443 9.14014 0.359144 9.44514C0.669144 9.73014 1.13914 9.71014 1.45914 9.39514C2.51914 8.33514 3.57914 7.28014 4.63414 6.22014L4.74914 6.10514Z" />
    </svg>
  );
};

export default CloseIcon;
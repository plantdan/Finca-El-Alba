import cacaoIcon from "@/assets/cacao-icon.png";

interface CacaoDividerProps {
  inverted?: boolean;
  className?: string;
}

const CacaoDivider = ({ inverted = false, className = "" }: CacaoDividerProps) => {
  return (
    <img
      src={cacaoIcon}
      alt=""
      aria-hidden="true"
      className={`w-8 h-8 object-contain mb-8 ${inverted ? "brightness-0 invert" : ""} ${className}`}
    />
  );
};

export default CacaoDivider;

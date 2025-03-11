import { cn } from "@/lib/utils";
const ProductPrice = ({
  value,
  clasName,
}: {
  value: number;
  clasName?: string;
}) => {
  const stringValue = value.toFixed(2);
  const [initValue, floatValue] = stringValue.split(".");
  return (
    <p className={cn("text-2xl", clasName)}>
      <span className="text-xs align-super">$</span>
      {initValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;

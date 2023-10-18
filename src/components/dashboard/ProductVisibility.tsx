import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Radio,
  RadioGroup,
} from "@nextui-org/react";

const ProductVisibility = function () {
  return (
    <Card className="bg-white w-full mb-4" shadow="sm" radius="sm">
      <CardHeader className="mt-2 px-4">
        <h3 className="text-[22px] font-bold text-slate-600">Visibility</h3>
      </CardHeader>
      <Divider />
      <CardBody className="overflow-hidden">
        <RadioGroup className="accent-zinc-800">
          <Radio className="accent-zinc-800" value="Hidden">
            Hidden
          </Radio>
          <Radio className="accent-zinc-800" value="Publish">
            Publish
          </Radio>
        </RadioGroup>
      </CardBody>
    </Card>
  );
};
export default ProductVisibility;

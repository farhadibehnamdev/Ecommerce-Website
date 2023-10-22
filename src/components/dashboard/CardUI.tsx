"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { TrendingUp } from "lucide-react";
const CardUI = function ({ bgColor, title, data }: any) {
  return (
    <Card className={`flex px-4 py-4 ${bgColor}  w-72 h-36`} shadow="sm">
      <CardHeader className="flex justify-between pt-4">
        <p className="text-tiny uppercase font-bold">{title}</p>
        <small className="text-14 font-semibold">{data}</small>
      </CardHeader>
      <CardBody className="overflow-hidden  flex-row justify-between">
        <span className="inline">+11.01%</span>
        <TrendingUp className="w-4 h-4 inline-block" />
      </CardBody>
    </Card>
  );
};

export default CardUI;

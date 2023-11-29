"use client";
import { useCallback } from "react";
import BaseTable from "./BaseTable";
import {
  Button,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { MoreVertical } from "lucide-react";
interface ICategory {
  code: string;
  name: string;
  description: string;
  image: string;
}

const data: ICategory[] = [
  { code: "1", name: "shoes", description: "the best shoes", image: "" },
  { code: "2", name: "T-shirt", description: "the best shoes", image: "" },
  { code: "3", name: "socks", description: "the best shoes", image: "" },
  { code: "4", name: "jeans", description: "the best shoes", image: "" },
];

const columns: ICategory;

const Categories = function () {
  const renderCell = useCallback(
    (category: ICategory, columnKey: React.Key) => {
      const cellValue = category[columnKey as keyof ICategory];

      switch (columnKey) {
        case "name":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">{cellValue}</p>
            </div>
          );
        case "description":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">{cellValue}</p>
            </div>
          );
        case "image":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">{cellValue}</p>
            </div>
          );

        case "actions":
          return (
            <div className="relative flex justify-end items-center gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <MoreVertical className="text-default-300" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem>View</DropdownItem>
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Delete</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );
  return <BaseTable data={data} renderCell={renderCell} columns={} />;
};
export default Categories;

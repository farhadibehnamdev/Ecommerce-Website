"use client";
import { ApiReturnProduct } from "@/api/productApi";
import { useProducts } from "@/hooks/products/useProducts";
import BaseTable, { Column } from "./BaseTable";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Delete, Edit, Eye, MoreVertical } from "lucide-react";
import { useCallback, useMemo, useState } from "react";

interface ProductsProps {
  data: ApiReturnProduct;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
}

interface ICategory {
  uid: string;
  name: string;
  description: string;
  image: string;
}

export const categoryData: ICategory[] = [
  {
    uid: "1",
    name: "shoes",
    description: "the best shoes",
    image: "https://i.pravatar.cc/150?u=a04258114e29026708c",
  },
  {
    uid: "2",
    name: "T-shirt",
    description: "the best shoes",
    image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
  },
  {
    uid: "3",
    name: "socks",
    description: "the best shoes",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    uid: "4",
    name: "jeans",
    description: "the best shoes",
    image: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  },
];

export const columns: Column<ICategory>[] = [
  {
    name: "name",
    uid: "name",
    sortable: true,
    render(item) {
      return item.name;
    },
  },
  {
    name: "description",
    uid: "description",
    sortable: false,
    render(item) {
      return item.description;
    },
  },
  {
    name: "image",
    uid: "image",
    sortable: false,
    render(item) {
      return item.image;
    },
  },
  {
    name: "actions",
    uid: "actions",
    sortable: false,
    render(item) {
      return null;
    },
  },
];
const Products = function () {
  const [filterValue, setFilterValue] = useState("");
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
              {/* <p className="text-bold text-small capitalize"></p> */}

              <Avatar isBordered radius="full" src={cellValue} />
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
                <DropdownMenu className="text-zinc-800">
                  <DropdownItem>
                    <span className="flex justify-between">
                      view <Eye className="w-4 h-4 text-blue-600 " />
                    </span>
                  </DropdownItem>
                  <DropdownItem>
                    <span className="flex justify-between">
                      Edit <Edit className="w-4 h-4 text-green-600" />
                    </span>
                  </DropdownItem>
                  <DropdownItem>
                    <span className="flex justify-between">
                      Delete
                      <Delete className="w-4 h-4 text-red-600" />
                    </span>
                  </DropdownItem>
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
  const filteredItems = useMemo(() => {
    let filteredData = [...categoryData];
    const hasSearchFilter = Boolean(filterValue);

    if (hasSearchFilter) {
      filteredData = filteredData.filter((item: ICategory) =>
        item.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    // if (
    //   statusFilter !== "all" &&
    //   Array.from(statusFilter).length !== statusOptions.length
    // ) {
    //   filteredData = filteredData.filter((item) =>
    //     Array.from(statusFilter).includes(item.status)
    //   );
    // }

    return filteredData;
  }, [filterValue]);

  const { data, isLoading, isError, isSuccess } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong...</p>;
  return (
    <BaseTable
      data={filteredItems}
      renderCell={renderCell}
      columns={columns}
      setFilterValue={setFilterValue}
      filterValue={filterValue}
      dataType="categories"
    />
  );
};

export default Products;

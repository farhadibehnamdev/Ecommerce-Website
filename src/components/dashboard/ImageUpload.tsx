import { ImageResponseData } from "@/api/productApi";
import { useUploadFile } from "@/hooks/useUploadFile";
import { cn } from "@/utils";
import { Progress, Spinner } from "@nextui-org/react";
import Image from "next/image";
import { forwardRef } from "react";
import { PiCircle } from "react-icons/pi";
import { FileWithUrl } from "./FileInputUI";

interface ImageUploadProps extends React.HTMLAttributes<HTMLTableRowElement> {
  name: string;
  size: number;
  file: File;
  error?: boolean | undefined;
}

const ImageUpload = forwardRef<HTMLTableRowElement, ImageUploadProps>(
  ({ file, name, size, className, ...props }, ref) => {
    const {
      data,
      progress,
      isLoading,
      error: processingError,
    } = useUploadFile<ImageResponseData>(
      "http://localhost:8080/products/1/images/main",
      file,
      {
        disabled: false,
      }
    );
    return (
      <tr ref={ref} {...props} className={cn("", className)}>
        <td className="px-6 py-4 whitespace-nowrap text-sm dark:text-slate-400">
          <div className="relative flex h-12 w-20">
            {false ? (
              <div className="flex w-full justify-center items-center">
                <PiCircle className="h-6 w-6" />
              </div>
            ) : (
              <Image
                style={{ objectFit: "contain" }}
                src={file ? URL.createObjectURL(file) : ""}
                fill
                alt={name}
              />
            )}
          </div>
        </td>
        <td className="px-6 py-4 truncate whitespace-normal text-sm font-medium dark:text-slate-400 ">
          <div className="">
            <p
              className={cn("dark:text-slate-300", {
                "dark:text-red-500": "error",
              })}
            >
              {name}
            </p>
            {data ? (
              <p>{data.alt}</p>
            ) : isLoading ? (
              <Spinner className="mt-1 w-4 h-4 animate-spin" />
            ) : null}
          </div>
        </td>
        <td
          className={cn(
            "px-6 py-4 whitespace-nowrap text-sm dark:text-slate-400",
            {
              "dark:text-red-500": "error",
            }
          )}
        >
          {(size / 1000).toFixed(0)} KB
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm dark:text-slate-400 ">
          <Progress
            aria-label="Loading..."
            value={progress}
            className={cn('"max-w-md w-full h-2"')}
          />
        </td>
      </tr>
    );
  }
);

ImageUpload.displayName = "ImageUpload";
export default ImageUpload;

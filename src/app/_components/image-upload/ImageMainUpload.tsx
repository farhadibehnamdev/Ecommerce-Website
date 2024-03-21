import { ImageResponseData } from "@/api/productApi";
import { useUploadFile } from "@/hooks/useUploadFile";
import { CircularProgress, Progress, Spinner } from "@nextui-org/react";
import { XCircleIcon } from "lucide-react";
import Image from "next/image";
import { MouseEventHandler, forwardRef, useEffect, useState } from "react";
import { URL } from "url";

interface ImageMainUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  file: File;
  name: string;
  size: number;
  handleRemoveImage: MouseEventHandler;
  error?: boolean | undefined;
}

const ImageMainUpload = forwardRef<HTMLDivElement, ImageMainUploadProps>(
  ({ file, handleRemoveImage, ...props }, ref) => {
    const [value, setValue] = useState<number>(0);
    const { data, progress, isLoading, error } =
      useUploadFile<ImageResponseData>(
        `products/65327720a582bb7f7a1cd30f/images/main`,
        file,
        {
          disabled: false,
        }
      );

    useEffect(() => {
      // const interval = setInterval(() => {
      //   console.log("progress useEffect ::", progress);
      //   setValue(progress!);
      // }, 500);
      // return () => clearInterval(interval);
    }, []);

    return (
      <div className="flex justify-center">
        <div className="relative">
          {data?.success && (
            <XCircleIcon
              className="absolute top-0 w-10 h-10"
              onClick={handleRemoveImage}
            />
          )}
        </div>
        {data?.success ? (
          <>
            <div className="p-5 inline-block">
              <Image
                src={data.imageUrl}
                alt="photo"
                style={{ objectFit: "contain" }}
                fill
              />
            </div>
          </>
        ) : (
          isLoading && (
            // <CircularProgress
            //   aria-label="Loading..."
            //   size="lg"
            //   value={value}
            //   color="warning"
            //   showValueLabel={true}
            // />
            <Spinner size="lg" label="loading..." />
          )
          //   <Spinner size="lg" label="loading..." />
        )}
      </div>
    );
  }
);

ImageMainUpload.displayName = "ImageMainUpload";
export default ImageMainUpload;

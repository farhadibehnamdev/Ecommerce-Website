import {
  ChangeEvent,
  ChangeEventHandler,
  DragEvent,
  DragEventHandler,
  ForwardedRef,
} from "react";
import { cn, validateFileType } from "@/utils";
import { MAX_FILE_SIZE } from "@/config/image";
import { PiPlusBold } from "react-icons/pi";
import ImageUpload from "./ImageUpload";
import toast from "react-hot-toast";
import { StepsType } from "./Stepper";
import { CardBody, Card, CardHeader, Chip, Image } from "@nextui-org/react";
import { State } from "./FileInputUI";
import useMainImage from "@/hooks/useMainImage";
import { SidebarCloseIcon, XCircleIcon } from "lucide-react";
import { URL } from "url";
import ImageMainUpload from "./ImageMainUpload";

interface IProductMainImage {
  ref: ForwardedRef<HTMLInputElement>;
  props: any;
}

const ProductMainImage = function ({ ref, ...props }: IProductMainImage) {
  const {
    mainImageInput,
    handleDrag,
    dragActiveMainImage,
    handleMainImageChange,
    handleMainImageDrop,
    clearState,
  } = useMainImage();
  const noInput: boolean = mainImageInput.length === 0;
  const handleRemoveImage = function () {
    clearState();
  };
  return (
    <div className="flex flex-row justify-center">
      <div className="min-h-full w-1/2 md:mx-5">
        <div
          onSubmit={(e) => e.preventDefault()}
          onDragEnter={handleDrag}
          className="flex h-full items-center w-full  justify-start"
        >
          <label
            htmlFor="dropzone-file"
            className={cn(
              "group relative h-full flex flex-col items-center justify-center w-full aspect-video border-2 border-slate-300 border-dashed rounded-lg dark:border-gray-600 transition",
              {
                "dark:border-slate-400 dark:bg-slate-800": dragActiveMainImage,
              }
            )}
          >
            <div
              className={cn(
                "relative w-full h-full flex flex-col items-center justify-center",
                { "items-center": !noInput }
              )}
            >
              {!noInput ? (
                <div className="flex justify-center">
                  <ImageMainUpload
                    file={mainImageInput[0]?.file}
                    name={mainImageInput[0]?.name}
                    size={mainImageInput[0]?.size}
                    handleRemoveImage={handleRemoveImage}
                  />
                </div>
              ) : (
                <>
                  <div
                    className="absolute inset-0 cursor-pointer"
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleMainImageDrop}
                  />

                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop {(MAX_FILE_SIZE / 1000000).toFixed(0)}
                    MB image file
                  </p>
                  <p className="text-sm text-danger-600">
                    You can upload only one image here.
                  </p>

                  <input
                    {...props}
                    ref={ref}
                    onChange={handleMainImageChange}
                    accept="image/jpeg, image/jpg, image/png"
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                  />
                </>
              )}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductMainImage;

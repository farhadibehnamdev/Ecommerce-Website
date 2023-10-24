"use client";
import {
  ChangeEvent,
  DragEvent,
  DragEventHandler,
  forwardRef,
  useReducer,
  useState,
} from "react";
import { cn, validateFileType } from "@/utils";
import { MAX_FILE_SIZE } from "@/config/image";
import { PiPlusBold } from "react-icons/pi";
import ImageUpload from "./ImageUpload";
import toast from "react-hot-toast";
import {
  CardBody,
  Card,
  Tabs,
  Tab,
  CardHeader,
  Chip,
  Spacer,
} from "@nextui-org/react";
import ProductGallery from "./ProductGallery";
import ProductMainImage from "./ProductMainImage";
import { GalleryVerticalIcon, Image as ImageIcon } from "lucide-react";

export interface FileWithUrl {
  name: string;
  size: number;
  // error?: boolean | undefined;
  file: File;
}

const addFileToInput = () => ({
  type: "ADD_FILES_TO_INPUT",
  payload: [] as FileWithUrl[],
});
const clearFileInput = () => ({
  type: "CLEAR_FILE_INPUT",
  payload: [],
});

export type Action = ReturnType<typeof addFileToInput | typeof clearFileInput>;
export type State = FileWithUrl[] | [];

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

// type FileInputUIProps = {
//   steps: StepsType[];
//   setStepComplete: Function;
// };
const FileInputUI = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <>
        <Tabs
          aria-label="Options"
          color="default"
          variant="bordered"
          className="mx-5"
        >
          <Tab
            key="photos"
            title={
              <div className="flex items-center space-x-2">
                <ImageIcon />
                <span>Product Main Image</span>
              </div>
            }
          >
            <Card className="max-w-full md:mx-5" shadow="sm">
              <CardBody className="w-full">
                <ProductMainImage ref={ref} props={props} />
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="music"
            title={
              <div className="flex items-center space-x-2">
                <GalleryVerticalIcon />
                <span>Product Images Gallery</span>
              </div>
            }
          >
            <Card className="max-w-full md:mx-5" shadow="sm">
              <CardBody className="w-full">
                <ProductGallery ref={ref} props={props} />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </>
    );
  }
);
FileInputUI.displayName = "FileInputUI";
export default FileInputUI;

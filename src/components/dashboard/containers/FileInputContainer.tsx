"use client";
import {
  forwardRef,
  useReducer,
  useState,
  type ChangeEvent,
  type DragEvent,
} from "react";
import FileUploadUI from "../presentational/FileUploadUI";
import toast from "react-hot-toast";
import { validateFileType } from "@/utils";
import { useS3Upload } from "@/hooks/useS3Upload";

interface FileWithUrl {
  name: string;
  getUrl: string;
  size: number;
  error?: boolean | undefined;
}

const addFileToInput = () => ({
  type: "ADD_FILES_TO_INPUT" as const,
  payload: [] as FileWithUrl[],
});

type Action = ReturnType<typeof addFileToInput>;
type State = FileWithUrl[];

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

const FileInputContainer = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const { s3Upload } = useS3Upload();
    const [dragActive, setDragActive] = useState<boolean>(false);
    const [input, dispatch] = useReducer((state: State, action: Action) => {
      switch (action.type) {
        case "ADD_FILES_TO_INPUT": {
          // do not allow more than 5 files to be uploaded at once
          if (state.length + action.payload.length > 10) {
            toast("Too many files");
            return state;
          }

          return [...state, ...action.payload];
        }

        // You could extend this, for example to allow removing files
      }
    }, []);

    const noInput = input.length === 0;

    const handleDrag = (e: DragEvent<HTMLFormElement | HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === " dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      try {
        if (e.target.files && e.target.files[0]) {
          const valid = validateFileType(e.target.files[0]);
          if (!valid) {
            toast("Invalid file type");
            return;
          }
        }
        const { getUrl, error } = await s3Upload(e.target.files?.[0]!);
        if (!getUrl || error) throw new Error("Error uploading file");
        const { name, size } = e.target.files?.[0]!;
        addFilesToState([{ name, getUrl, size }]);
      } catch (error) {
        console.log(error);
      }
    };

    const addFilesToState = (files: FileWithUrl[]) => {
      dispatch({ type: "ADD_FILES_TO_INPUT", payload: files });
    };

    const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const files = Array.from(e.dataTransfer.files);
        const validFiles = files.filter((file) => validateFileType(file));

        if (files.length !== validFiles.length) {
          toast("Invalid file type");
        }

        try {
          const filesWithUrl = await Promise.all(
            validFiles.map(async (file) => {
              const { name, size } = file;
              const { getUrl, error } = await s3Upload(file);

              if (!getUrl || error) return { name, size, getUrl: "", error };
              return { name, size, getUrl };
            })
          );
          setDragActive(false);
          addFilesToState(filesWithUrl);
          e.dataTransfer.clearData();
        } catch (error) {}
      }
    };

    return <FileUploadUI />;
  }
);

FileInputContainer.displayName = "FileInput";

export default FileInputContainer;

import { Action, FileWithUrl, State } from "@/components/dashboard/FileInputUI";
import { validateFileType } from "@/utils";
import { ChangeEvent, DragEvent, useReducer, useState } from "react";
import toast from "react-hot-toast";
const useMainImage = function () {
  const [dragActiveMainImage, setDragActiveMainImage] =
    useState<boolean>(false);
  const [mainImageInput, mainImageDispatch] = useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case "ADD_FILES_TO_INPUT": {
          return [...state, ...action.payload];
        }
        case "CLEAR_INPUT": {
          return [];
        }
        default: {
          return state;
        }
        // You could extend this, for example to allow removing files
      }
    },
    []
  );

  const handleDrag = (e: DragEvent<HTMLFormElement | HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === " dragenter" || e.type === "dragover") {
      setDragActiveMainImage(true);
    } else if (e.type === "dragleave") {
      setDragActiveMainImage(false);
    }
  };
  const handleMainImageChange = function (e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    try {
      if (e.target.files && e.target.files[0]) {
        const valid = validateFileType(e.target.files[0]);
        if (!valid) {
          toast("Invalid file type");
          return;
        }
      }
      const { name, size } = e.target.files?.[0]!;
      addFilesToState([{ name, size, file: e.target.files?.[0]! }]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleMainImageDrop = async function (e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files);
      const validFiles = files.filter((file) => validateFileType(file));
      if (files.length !== validFiles.length) {
        toast("invalid file type");
      }
      try {
        const filesWithUrl = await Promise.all(
          validFiles.map(async (file) => {
            const { name, size } = file;
            return { name, size, file };
          })
        );
        setDragActiveMainImage(false);
        addFilesToState(filesWithUrl);
        e.dataTransfer.clearData();
      } catch (error) {}
    }
  };

  const addFilesToState = (files: FileWithUrl[]) => {
    mainImageDispatch({ type: "ADD_FILES_TO_INPUT", payload: files });
  };

  const clearState = () => {
    mainImageDispatch({ type: "CLEAR_INPUT", payload: [] });
  };

  return {
    mainImageInput,
    handleDrag,
    dragActiveMainImage,
    handleMainImageChange,
    handleMainImageDrop,
    clearState,
  };
};

export default useMainImage;

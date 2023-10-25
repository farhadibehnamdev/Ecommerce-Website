import { Action, FileWithUrl, State } from "@/components/dashboard/FileInputUI";
import { validateFileType } from "@/utils";
import { ChangeEvent, DragEvent, useReducer, useState } from "react";
import toast from "react-hot-toast";

const useGalleryImage = function () {
  const [dragActiveGalleryImage, setDragActiveGalleryImage] =
    useState<boolean>(false);

  const [galleryImageInput, galleryImageDispatch] = useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case "ADD_FILES_TO_INPUT": {
          if (state.length + action.payload.length > 4) {
            toast("Too many files");
            return state;
          }
          return [...state, ...action.payload];
        }
        case "CLEAR_FILE_INPUT": {
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
  console.log("gallery Image ::: ", galleryImageInput);
  const handleDrag = (e: DragEvent<HTMLFormElement | HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === " dragenter" || e.type === "dragover") {
      setDragActiveGalleryImage(true);
    } else if (e.type === "dragleave") {
      setDragActiveGalleryImage(false);
    }
  };
  const handleGalleryImageChange = function (e: ChangeEvent<HTMLInputElement>) {
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
  const handleGalleryImageDrop = async function (e: DragEvent<HTMLDivElement>) {
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
        setDragActiveGalleryImage(false);
        addFilesToState(filesWithUrl);
        e.dataTransfer.clearData();
      } catch (error) {}
    }
  };
  const addFilesToState = (files: FileWithUrl[]) => {
    galleryImageDispatch({ type: "ADD_FILES_TO_INPUT", payload: files });
  };

  return {
    handleGalleryImageDrop,
    handleGalleryImageChange,
    handleDrag,
    galleryImageInput,
    dragActiveGalleryImage,
  };
};

export default useGalleryImage;

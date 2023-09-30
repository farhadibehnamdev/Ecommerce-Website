"use client";
import {
  FileUpload,
  FileUploadHeaderTemplateOptions,
  FileUploadSelectEvent,
  FileUploadUploadEvent,
  ItemTemplateOptions,
} from "primereact/fileupload";
import { Toast } from "primereact/toast";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { Tag } from "primereact/tag";
import { useRef, useState } from "react";
import FileUploadUI from "../presentational/FileUploadUI";
import Image from "next/image";
const FileUploadContainer = function () {
  const toast = useRef<Toast>(null);
  const [totalSize, setTotalSize] = useState(0);
  const fileUploadRef = useRef<FileUpload>(null);
  const onTemplateSelect = (e: FileUploadUploadEvent) => {
    // let _totalSize = totalSize;
    let file = e.files[0];
    setTotalSize(file.size);
  };

  const onTemplateUpload = (e: FileUploadUploadEvent) => {
    let _totalSize = 0;
    setTotalSize(_totalSize);
    toast.current?.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  const onTemplateRemove = (file: File, callback: Function) => {
    setTotalSize(totalSize - file.size);
    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  return (
    <FileUploadUI
      toast={toast}
      setTotalSize={setTotalSize}
      totalSize={totalSize}
      fileUploadRef={fileUploadRef}
      onTemplateUpload={onTemplateUpload}
      onTemplateRemove={onTemplateRemove}
      onTemplateClear={onTemplateClear}
      onTemplateSelect={onTemplateSelect}
    />
  );
};

export default FileUploadContainer;

import Image from "next/image";
import { Button } from "primereact/button";
import {
  FileUpload,
  FileUploadHeaderTemplateOptions,
  ItemTemplateOptions,
} from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Tag } from "primereact/tag";
import { Toast } from "primereact/toast";
import { Tooltip } from "primereact/tooltip";
import { useRef } from "react";
interface FileUploadUIProps {
  toast: React.Ref<Toast>;
  setTotalSize: Function;
  totalSize: number;
  onTemplateUpload: Function;
  onTemplateRemove: Function;
  onTemplateClear: Function;
  fileUploadRef: React.Ref<FileUpload>;
  onTemplateSelect: Function;
}
const FileUploadUI = function ({
  toast,
  setTotalSize,
  fileUploadRef,
  onTemplateUpload,
  onTemplateRemove,
  totalSize,
  onTemplateClear,
  onTemplateSelect,
}: FileUploadUIProps) {
  const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const value = totalSize / 1000;
    const formatedValue =
      fileUploadRef && fileUploadRef.current
        ? fileUploadRef.current.formatSize(totalSize)
        : "0 B";
    return (
      <div
        className={className}
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
        }}
      >
        {chooseButton}
        {uploadButton}
        {cancelButton}
        <div className="flex align-items-center gap-3 ml-auto">
          <span>{formatedValue} / 1 MB</span>
          <ProgressBar
            value={value}
            showValue={false}
            style={{ width: "10rem", height: "12px" }}
          ></ProgressBar>
        </div>
      </div>
    );
  };

  return (
    <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
      <h3 className="text-[25px] mb-4 font-semibold">Main Image</h3>
      <div className="bg-white grid grid-cols-1 gap-4 sm:rounded-md md:col-span-2">
        <Toast ref={toast}></Toast>

        <FileUpload
          name="demo[]"
          url={"/api/upload"}
          multiple
          accept="image/*"
          headerTemplate={headerTemplate}
          maxFileSize={1000000}
          emptyTemplate={
            <p className="m-0">Drag and drop files to here to upload.</p>
          }
        />

        {/* 
        <FileUpload
          ref={fileUploadRef}
          name="demo[]"
          url="/api/upload"
          accept="image/*"
          maxFileSize={1000000}
          headerTemplate={headerTemplate}
          itemTemplate={itemTemplate}
          emptyTemplate={emptyTemplate}
          chooseOptions={chooseOptions}
          uploadOptions={uploadOptions}
          cancelOptions={cancelOptions}
        /> */}
      </div>
    </div>
  );
};

export default FileUploadUI;

"use client";

import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import { useRef } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Spacer,
} from "@nextui-org/react";

const General = function ({ register }: any) {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Card className="bg-white w-full " shadow="sm" radius="sm">
        <CardHeader className="px-4 py-4">
          <h3 className="text-[22px] font-700 text-slate-600">Basic Info</h3>
        </CardHeader>
        <Divider className="mb-2" />
        <CardBody className="overflow-hidden">
          <div className="mb-5">
            <Input
              type="text"
              variant="bordered"
              label="Product Name"
              placeholder="Product Name"
              labelPlacement="outside"
              size="lg"
              {...register("name")}
            />
            <span className="text-[12px]">
              A product name is required and recommended to be unique.
            </span>
          </div>
          <div className="mb-5 shadow-sm rounded-lg">
            <p className="mb-2 text-base text-black">Description</p>
            <Editor
              {...register("description")}
              apiKey="gzzvye1m3v6mexm536ii0av310tb85vla0tkrun3m7c1y9l8"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 500,
                menubar: false,
                // plugins: [
                //   "advlist autolink lists link image charmap print preview anchor",
                //   "searchreplace visualblocks code fullscreen",
                //   "insertdatetime media table paste code help wordcount",
                // ],
                toolbar:
                  "undo redo | formatselect | " +
                  "bold italic backcolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </div>
        </CardBody>
      </Card>
      <Spacer y={4} />
    </>
  );
};

export default General;

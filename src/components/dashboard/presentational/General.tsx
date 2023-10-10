"use client";

import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import { useRef } from "react";

const General = function ({ text, setText }: any) {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
      <div className="mb-6 bg-white px-8 py-8  rounded-md">
        <h3 className="text-[25px] mb-4 font-bold">General</h3>
        <div className="mb-5">
          <p className="mb-2 text-base text-black">Product Name</p>
          <input
            className="w-full p-3 rounded-md border border-zinc-200  text-base"
            type="text"
            placeholder="Product Name"
          />
          <span className="text-[12px]">
            A product name is required and recommended to be unique.
          </span>
        </div>
        <div className="mb-5">
          <p className="mb-2 text-base text-black">Description</p>
          <Editor
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
      </div>
    </div>
  );
};

export default General;

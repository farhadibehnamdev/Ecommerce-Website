import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { Editor as TinyMCEEditor } from "tinymce";
import { AddProductFormSchemaType } from "./AddProduct";
import { FieldErrors } from "react-hook-form";
interface ITextEditor extends AddProductFormSchemaType {
  errors: FieldErrors<AddProductFormSchemaType>;
  onChange: (...event: any[]) => void;
  value: string;
}
const TextEditor = function ({ onChange, value, errors }: any) {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const handleEditorChange = (editor: any) => onChange(editor);

  return (
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
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px}" +
          `${errors?.discription && "border-color:red;border:2px solid"}`,
      }}
      textareaName="description"
      value={value}
      onEditorChange={handleEditorChange}
    />
  );
};

export default TextEditor;

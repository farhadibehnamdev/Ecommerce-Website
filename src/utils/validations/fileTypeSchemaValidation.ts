import { ALLOWED_FILE_TYPES } from "@/configs/image";
import { z } from "zod";
export const fileTypeSchema = z.string().refine(
  (value) => {
    return ALLOWED_FILE_TYPES.includes(value);
  },
  { message: "Invalid file type" }
);

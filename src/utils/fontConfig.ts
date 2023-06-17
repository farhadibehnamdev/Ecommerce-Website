import localFont from "next/font/local";
export const jostBodyRegular = localFont({
  src: [{ path: "/fonts/Jost-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-jostRegular",
});
export const jostBodyBold = localFont({
  src: [{ path: "/fonts/Jost-Bold.ttf", weight: "700", style: "normal" }],
  variable: "--font-jostBold",
});

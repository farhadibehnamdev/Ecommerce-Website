import localFont from "next/font/local";
export const jostBodyRegular = localFont({
  src: [{ path: "/fonts/Jost-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-jostRegular",
});
export const jostBodyBold = localFont({
  src: [{ path: "/fonts/Jost-Bold.ttf", weight: "700", style: "normal" }],
  variable: "--font-jostBold",
});

export const interRegular = localFont({
  src: [
    { path: "/fonts/inter/Inter-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-interRegular",
});

export const interSemibold = localFont({
  src: [
    { path: "/fonts/inter/Inter-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-interSemiBold",
});

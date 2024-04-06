import localFont from "next/font/local";

export const suisse = localFont({
  src: [
    {
      path: "../../public/fonts/SuisseIntl-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SuisseIntl-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SuisseIntl-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-su",
});

export const protoGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/ProtoGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-pg",
});

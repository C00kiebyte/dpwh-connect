"use client";

import { FastAverageColor } from "fast-average-color";
import Image from "next/image";
import { useState } from "react";

type Props = {
  url: string;
};

export default function PostImage({ url }: Props) {
  const [bgColor, setBgColor] = useState("#000000");

  const handeImageLoad = (event: any) => {
    const fac = new FastAverageColor();
    fac.getColorAsync(event.target).then((color) => {
      setBgColor(color.hex);
    });
  };

  return (
    <div
      className="overflow-hidden rounded-lg w-full h-100 bg-black flex justify-center items-center"
      style={{ backgroundColor: bgColor }}
    >
      <Image
        src={url}
        alt=""
        crossOrigin="anonymous"
        onLoad={handeImageLoad}
        width={720}
        height={720}
        className="w-auto h-full aspect-auto object-cover hover:scale-105 transition-transform duration-700"
      />
    </div>
  );
}

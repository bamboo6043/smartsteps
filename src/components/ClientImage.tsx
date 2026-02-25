"use client";

import React, { useState } from "react";

type ClientImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src?: string;
  fallback?: string;
};

export default function ClientImage({ src, fallback = "/logo.png", alt, ...rest }: ClientImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);

  const handleError = () => {
    // avoid infinite loop
    if (currentSrc === fallback) return;
    setCurrentSrc(fallback);
  };

  return <img src={currentSrc} alt={alt} onError={handleError} {...rest} />;
}

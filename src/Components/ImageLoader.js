import React from "react";
import { useRef, useEffect } from "react";

function ImageLoader({ src, loading = "lazy", onImageLoad, ...restProps }) {
  //   const imgRef = useRef(null);
  //   let img;
  //   useEffect(() => {
  //     if (onImageLoad && src && loadImage) loadImage();
  //   }, [src, onImageLoad]);

  //   function loadImage() {
  //     // setIsLoading(true);
  //     img = new Image();
  //     img.onload = handleLoad;
  //     // img.onerror = handleError;
  //     img.src = src;
  //   }

  //   function handleLoad() {
  //     onImageLoad && onImageLoad(img);
  //   }

  //   if (!src) return null;

  return <img r loading={loading} src={src} {...restProps} />;
}

export default ImageLoader;

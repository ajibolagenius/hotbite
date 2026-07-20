import Image, { type StaticImageData } from "next/image";
import { ImageEdge } from "./ImageEdge";

interface TornPhotoProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/** Photo with a ragged torn-paper frame on all four sides. Position/size/rotate via `className`. */
export function TornPhoto({ src, alt, className = "", sizes, priority }: TornPhotoProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 overflow-hidden rounded-sm shadow-xl">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </div>
      <ImageEdge side="top" />
      <ImageEdge side="bottom" />
      <ImageEdge side="left" />
      <ImageEdge side="right" />
    </div>
  );
}

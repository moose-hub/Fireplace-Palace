import "./FounderImage.css";
import Image from "next/image";

// eslint-disable-next-line react/prop-types
export function FounderImage({ image, alt }) {
  return (
    <Image
      src={image}
      sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
      placeholder="empty"
      alt={alt}
      className="founder__banner-img"
    />
  );
}

import "./FounderBanner.css";
import imageSrc from "../../assets/founders/founder-mike-and-mandy.png";
import { FounderImage } from "./founderBannerComponents/founderImage/FounderImage";
import { FounderDesc } from "./founderBannerComponents/founderDesc/FounderDesc";

export function FounderBanner() {
  return (
    <div className="founder__banner">
      <FounderDesc 
      desc1="Meet the artisans behind our masterpieces!"
      desc2="Mike and Mandy"
      />
      <FounderImage image={imageSrc} alt="Founder Banner Image" />
    </div>
  );
}

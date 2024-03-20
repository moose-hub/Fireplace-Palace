import './homeHeroBanner.css';
import imageSrc from '../../assets/hero-desktop.png';
import { HeroImage } from './bannerComponents/heroImage/HeroImage';
import { HeroDesc } from './bannerComponents/heroDesc/HeroDesc';

export function HeroBanner() {
  return (
    <div className="hero__banner">
      <HeroImage image={imageSrc} alt="Hero Image" />
      <HeroDesc />
    </div>
  );
}

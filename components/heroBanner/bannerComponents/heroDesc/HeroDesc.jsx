import "./HeroDesc.css"
import Link from "next/link"

export function HeroDesc() {
    return(     
         <div className="hero__banner-desc">
             <h1 className="banner__desc-title">Discover the Perfect Fireplace ...</h1>
             <Link className="banner__booking-link" href="/booking">Book consultation</Link>
         </div>
 )}
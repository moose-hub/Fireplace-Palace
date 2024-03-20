import "./FounderDesc.css"

export function FounderDesc({desc1, desc2}) {
    return(     
         <div className="founder__banner-desc">
             <p className="banner__desc-info">{desc1}</p>
             <p className="banner__desc-info">{desc2}</p>
         </div>
 )}
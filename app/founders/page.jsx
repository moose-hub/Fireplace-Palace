import {FounderBanner} from "../../components/founderBanner/FounderBanner";
import {CardSection} from "../../components/cardSection/CardSection";
import Main from "../../components/main/main";

import F1 from '../../assets/founders/founders-1.png';
import F2 from '../../assets/founders/founders-2.png';
import F3 from '../../assets/founders/founders-3.png';

export default function Founders() {
  const cardData = [
    {
      image: F1,
      title: "Our craftsmanship",
      desc: "Mike and Mandy studied and honed their craft under the fireplace sensei Vik Von Blaze. Nothing gets delivered to a customer without their sign off.",
    },
    {
      image: F2,
      title: "Our experience",
      desc: "Numbers don't lie - we've been around for 20+ years and have a long list of happy customers who gladly recommend us.",
    },
    {
      image: F3,
      title: "Our guarantee",
      desc: "If you're not 100% satisfied we will fully refund your purchase. Also, we offer free repairs for the first 20 years of ownership. Find that somewhere else!",
    },
  ];
  return (
    <Main>
      <FounderBanner />
      <CardSection cardData={cardData}/>
    </Main>
  );
}

import Main from "../components/main/main";
import "./page.css";

import { HeroBanner } from '../components/heroBanner/homeHeroBanner';
import { CardSection } from '../components/cardSection/CardSection';

import HIW1 from '../assets/how-it-works-1.png';
import HIW2 from '../assets/how-it-works-2.png';
import HIW3 from '../assets/how-it-works-3.png';

export default function Home() {
  const cardData = [
    {
      image: HIW1,
      title: 'Give us a call ...',
      desc: "Call us and book in a 'Design Consultation' on a date and time to suit you.",
    },
    {
      image: HIW2,
      title: 'We come to you ...',
      desc: 'We come to your home to do an assessment of the space and to style your preference.',
    },
    {
      image: HIW3,
      title: 'We recommend ...',
      desc: 'We send you a bespoke set of fireplace recommendations.',
    },
  ];
  return (
    <Main>
      <HeroBanner />
      <CardSection title="How it works" cardData={cardData}/>
    </Main>
  )
}

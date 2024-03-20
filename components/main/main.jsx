import './main.css';
import { HeroBanner } from '../heroBanner/homeHeroBanner.jsx';
import { CardSection } from '../cardSection/CardSection.jsx';

function Main() {
  return (
    <main>
      <HeroBanner />
      <CardSection title="How it works" />
    </main>
  );
}

export default Main;

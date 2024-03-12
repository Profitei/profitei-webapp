import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Ganhe Skins Incríveis"
    description="Participe de rifas com preços acessíveis e tenha a chance de ganhar skins para dar aquele up no seu inventário de CS2."
  >
    <VerticalFeatureRow
      title=" Preços Acessíveis"
      description="Acreditamos que todos devem ter a chance de ganhar, independentemente do orçamento. Com rifas a preços baixos, a emoção é acessível a todos."
      image="/assets/images/cs2.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Sorteios diários na Twitch"
      description="Acompanhe diariamente a live do Balloninho e saiba ao vivo quem são os vencedores dos Sorteios."
      image="/assets/images/balloni.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Fácil de Participar"
      description="Com um processo simples de inscrição e participação, você está a apenas alguns cliques de potencialmente ganhar skins fantásticas."
      image="/assets/images/img3.jpeg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };

import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Nunca foi tão fácil ganhar novas skins."
      subtitle="Em breve."
      button={
        <Link href="/">
          <Button>Aguarde</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };

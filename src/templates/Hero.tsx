import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-50">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li></li>
        <li></li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'A sua primeira plataforma de rifas para\n'}
            <span className="text-primary-500">Skins de CS2</span>
          </>
        }
        description="Compre rifas e concorra a skins incríveis."
        button={
          <Link href="">
            <Button xl>Aguarde</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };

import Image from 'next/image';
import { useRouter } from 'next/router';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const router = useRouter();

  const handleGooglePlayClick = () => {
    router.push(
      'https://play.google.com/store/apps/details?id=net.profitei.app&hl=pt_BR',
    );
  };

  return (
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
          buttons={
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={handleGooglePlayClick}
                className="focus:outline-none"
                style={{
                  display: 'inline-block',
                  padding: 0,
                  border: 'none',
                  background: 'none',
                }}
              >
                <Image
                  src="/assets/images/google-play-badge.png"
                  alt="Disponível no Google Play"
                  width={150}
                  height={50}
                />
              </button>
              <button
                type="button"
                // disabled
                className="cursor-not-allowed opacity-30"
                style={{
                  display: 'inline-block',
                  padding: 0,
                  border: 'none',
                  background: 'none',
                }}
              >
                <Image
                  src="/assets/images/apple.svg"
                  alt="Disponível na Apple Store em breve"
                  width={150}
                  height={50}
                />
              </button>
            </div>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };

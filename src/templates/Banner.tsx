import Image from 'next/image';
import { useRouter } from 'next/router';

import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => {
  const router = useRouter();

  const handleGooglePlayClick = () => {
    router.push(
      'https://play.google.com/store/apps/details?id=net.profitei.app&hl=pt_BR',
    );
  };

  return (
    <Section>
      <CTABanner
        title="Nunca foi tão fácil ganhar novas skins."
        subtitle="Acesse o nosso aplicativo."
        buttons={
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={handleGooglePlayClick} // Adicionando o evento onClick
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
              disabled
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
  );
};

export { Banner };

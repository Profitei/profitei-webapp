import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  buttons: ReactNode; // Certifique-se de que o nome da prop seja 'buttons'
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    <div className="mb-16 mt-4 text-2xl">{props.description}</div>

    <div className="flex justify-center">{props.buttons}</div>
  </header>
);

export { HeroOneButton };

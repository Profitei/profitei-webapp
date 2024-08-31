import type { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  buttons: ReactNode; // Mudança de 'button' para 'buttons'
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col rounded-md bg-primary-100 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
    <div className="text-2xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-primary-500">{props.subtitle}</div>
    </div>

    <div className="mt-3 flex flex-col space-y-2 sm:ml-2 sm:mt-0 sm:items-start">
      {props.buttons}
    </div>
  </div>
);

export { CTABanner };

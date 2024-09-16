import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  imageUrl?: string; // Adicionar uma prop opcional para a URL de clique
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  const handleImageClick = () => {
    if (props.imageUrl) {
      router.push(props.imageUrl); // Redirecionar para a URL se estiver definida
    }
  };

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="w-full p-6 sm:w-1/2">
        {/* Aplicar onClick para a imagem se imageUrl for fornecida */}
        <img
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
          className={props.imageUrl ? 'cursor-pointer' : ''}
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="Patrocinadores"
    description="Nossos patrocinadores para compra e venda de skins."
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a href="" target="_blank">
              <img
                src="/assets/images/lukao.jpeg"
                alt="Um exemplo de Patrocinador"
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };

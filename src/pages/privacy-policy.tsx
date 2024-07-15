import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-4 text-4xl font-bold text-primary-600">
        Política de Privacidade - Profitei
      </h1>
      <p className="mb-8 text-gray-600">Data de Vigência: [inserir data]</p>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold text-primary-500">
          1. Introdução
        </h2>
        <p className="text-gray-700">
          Bem-vindo ao Profitei! Esta Política de Privacidade explica como
          coletamos, usamos, compartilhamos e protegemos suas informações
          pessoais quando você utiliza a nossa plataforma de venda de rifas de
          skins de Counter Strike. Ao usar nossos serviços, você concorda com os
          termos descritos nesta política.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold text-primary-500">
          2. Informações que Coletamos
        </h2>
        <p className="mb-2 text-gray-700">
          Coletamos diferentes tipos de informações para fornecer e melhorar
          nossos serviços:
        </p>
        <h3 className="mb-2 text-xl font-semibold text-primary-400">
          Informações de Cadastro:
        </h3>
        <ul className="mb-4 list-inside list-disc text-gray-700">
          <li>Nome completo</li>
          <li>Endereço de e-mail</li>
          <li>Data de nascimento</li>
          <li>Informações de contato</li>
        </ul>
        <h3 className="mb-2 text-xl font-semibold text-primary-400">
          Informações de Uso:
        </h3>
        <ul className="mb-4 list-inside list-disc text-gray-700">
          <li>Histórico de compras e rifas participadas</li>
          <li>Dados de navegação na plataforma</li>
          <li>Preferências e configurações da conta</li>
        </ul>
        <h3 className="mb-2 text-xl font-semibold text-primary-400">
          Informações de Pagamento:
        </h3>
        <ul className="mb-4 list-inside list-disc text-gray-700">
          <li>
            Dados de transações financeiras (por meio de serviços terceiros como
            MercadoPago)
          </li>
        </ul>
        <h3 className="mb-2 text-xl font-semibold text-primary-400">
          Informações Técnicas:
        </h3>
        <ul className="list-inside list-disc text-gray-700">
          <li>Endereço IP</li>
          <li>Tipo de dispositivo e navegador</li>
          <li>Dados de cookies e tecnologias semelhantes</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold text-primary-500">
          3. Como Usamos as Informações
        </h2>
        <p className="mb-2 text-gray-700">Usamos suas informações para:</p>
        <ul className="list-inside list-disc text-gray-700">
          <li>Processar e gerenciar suas compras de rifas</li>
          <li>Enviar notificações sobre rifas, sorteios e promoções</li>
          <li>Melhorar a experiência do usuário na plataforma</li>
          <li>
            Analisar e monitorar o uso da plataforma para melhorias contínuas
          </li>
          <li>Cumprir obrigações legais e regulatórias</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold text-primary-500">
          4. Compartilhamento de Informações
        </h2>
        <p className="mb-2 text-gray-700">
          Não vendemos, alugamos ou compartilhamos suas informações pessoais com
          terceiros, exceto nos seguintes casos:
        </p>
        <ul className="list-inside list-disc text-gray-700">
          <li>
            Com fornecedores e parceiros de confiança que auxiliam na operação
            da plataforma (como processadores de pagamento)
          </li>
          <li>Para cumprir com obrigações legais, regulatórias ou judiciais</li>
          <li>
            Em caso de fusão, aquisição ou venda de ativos, onde as informações
            do usuário possam ser transferidas como parte do negócio
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold text-primary-500">
          5. Segurança das Informações
        </h2>
        <p className="text-gray-700">
          Adotamos medidas de segurança adequadas para proteger suas informações
          contra acesso não autorizado, alteração, divulgação ou destruição.
          Utilizamos criptografia, firewalls e outros protocolos de segurança
          para garantir a integridade dos dados.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold text-primary-500">
          6. Seus Direitos
        </h2>
        <p className="mb-2 text-gray-700">Você tem o direito de:</p>
        <ul className="mb-2 list-inside list-disc text-gray-700">
          <li>Acessar, corrigir ou excluir suas informações pessoais</li>
          <li>Optar por não receber comunicações de marketing</li>
          <li>Solicitar a portabilidade de seus dados</li>
          <li>Restringir ou objetar ao processamento de suas informações</li>
        </ul>
        <p className="text-gray-700">
          Para exercer esses direitos, entre em contato conosco através do
          e-mail
          <a
            href="mailto:suporte@profitei.com"
            className="text-primary-500 underline"
          >
            suporte@profitei.com
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold text-primary-500">
          7. Retenção de Dados
        </h2>
        <p className="text-gray-700">
          Reteremos suas informações pessoais pelo tempo necessário para cumprir
          as finalidades descritas nesta Política de Privacidade, a menos que um
          período de retenção maior seja exigido ou permitido por lei.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold text-primary-500">
          8. Alterações na Política de Privacidade
        </h2>
        <p className="text-gray-700">
          Podemos atualizar esta Política de Privacidade periodicamente.
          Notificaremos você sobre quaisquer alterações significativas
          publicando a nova política em nossa plataforma e atualizando a data de
          vigência no topo desta página.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold text-primary-500">
          9. Contato
        </h2>
        <p className="text-gray-700">
          Se você tiver dúvidas sobre esta Política de Privacidade ou sobre
          nossas práticas de privacidade, entre em contato conosco pelo e-mail
          <a
            href="mailto:suporte@profitei.com"
            className="text-primary-500 underline"
          >
            suporte@profitei.com
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold text-primary-500">
          10. Consentimento
        </h2>
        <p className="text-gray-700">
          Ao usar nossos serviços, você consente com a coleta, uso e
          compartilhamento de suas informações conforme descrito nesta Política
          de Privacidade.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold text-primary-500">
          11. Legislação Aplicável
        </h2>
        <p className="text-gray-700">
          Esta Política de Privacidade é regida pelas leis do Brasil. Qualquer
          disputa relacionada a esta política será resolvida nos tribunais
          competentes do Brasil.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

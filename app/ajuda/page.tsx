import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronLeft } from "lucide-react"

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-dark text-light-dim pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-light-dim hover:text-light transition-colors">
            <ChevronLeft size={16} />
            <span>Voltar para a página inicial</span>
          </Link>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-primary px-3 py-1 text-sm font-bold text-primary-foreground rounded-lg mb-4">
            SUPORTE
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-light">Central de Ajuda CFT DROP</h1>
          <p className="text-light-dim text-lg">
            Encontre respostas para suas dúvidas sobre nosso programa de dropshipping de calçados.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="informacoes" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-gray/20">
              <TabsTrigger value="informacoes">Informações Gerais</TabsTrigger>
              <TabsTrigger value="processo">Processo</TabsTrigger>
              <TabsTrigger value="produtos">Produtos</TabsTrigger>
              <TabsTrigger value="suporte">Suporte</TabsTrigger>
            </TabsList>

            {/* Informações Gerais */}
            <TabsContent
              value="informacoes"
              className="bg-gray/10 backdrop-blur-md border border-white/5 rounded-xl p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-light">Informações Gerais</h2>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="what-is-cft">
                  <AccordionTrigger className="text-light text-lg font-semibold">
                    O que é a CFT Dropshipping?
                  </AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    A CFT Dropshipping é uma plataforma especializada em dropshipping de calçados, que permite que
                    revendedores comercializem produtos sem precisar manter estoque físico. Nós cuidamos de todo o
                    processo logístico, desde o armazenamento até o envio para o cliente final.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="how-works">
                  <AccordionTrigger className="text-light text-lg font-semibold">
                    Como funciona o dropshipping?
                  </AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    O dropshipping é um modelo de negócio onde você vende produtos sem precisar comprá-los
                    antecipadamente ou gerenciar estoque. Quando um cliente compra um produto de sua loja, você repassa
                    o pedido para nós, e nós enviamos o produto diretamente para seu cliente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="rules">
                  <AccordionTrigger className="text-light text-lg font-semibold">
                    Quais são as regras do programa?
                  </AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>É proibido utilizar o nome "CFT" em suas páginas, anúncios ou descrições de produtos</li>
                      <li>É proibido anunciar preços abaixo do mínimo estabelecido</li>
                      <li>É proibido utilizar imagens da nossa loja física ou de nossos colaboradores</li>
                      <li>É proibido se apresentar como dono ou representante da marca</li>
                      <li>É proibido divulgar links diretos para o nosso catálogo</li>
                      <li>É proibido divulgar informações de contato direto da CFT para seus clientes</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pricing">
                  <AccordionTrigger className="text-light text-lg font-semibold">
                    Como funcionam os preços e margens?
                  </AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Os preços no catálogo já são os valores para revendedores</li>
                      <li>Você deve adicionar sua margem de lucro ao vender os produtos</li>
                      <li>Há um preço mínimo sugerido para cada produto que deve ser respeitado</li>
                      <li>A margem média de lucro recomendada é de 30% a 70% sobre o valor do produto</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payments">
                  <AccordionTrigger className="text-light text-lg font-semibold">
                    Como funcionam os pagamentos?
                  </AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Pagamentos dos pedidos devem ser realizados antecipadamente</li>
                      <li>Aceitamos PIX, boleto bancário e cartão de crédito</li>
                      <li>O pedido só é processado após confirmação do pagamento</li>
                      <li>Não trabalhamos com sistema de consignação</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="fee">
                  <AccordionTrigger className="text-light text-lg font-semibold">
                    Existe taxa de adesão?
                  </AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    Não cobramos taxa de adesão ou mensalidade para participar do nosso programa de dropshipping.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* Processo */}
            <TabsContent
              value="processo"
              className="bg-gray/10 backdrop-blur-md border border-white/5 rounded-xl p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-light">Processo de Trabalho</h2>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="process">
                  <AccordionTrigger className="text-light text-lg font-semibold">
                    Qual é o passo a passo do processo?
                  </AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Cadastro: Faça seu cadastro na nossa plataforma</li>
                      <li>
                        Acesso ao catálogo: Tenha acesso ao nosso catálogo completo de calçados com preços para
                        revendedores
                      </li>
                      <li>Divulgação: Divulgue os produtos em suas redes sociais, site ou marketplace</li>
                      <li>Venda: Quando realizar uma venda, repasse o pedido para nós</li>
                      <li>Envio: Nós separamos o produto, embalamos e enviamos diretamente para seu cliente</li>
                      <li>
                        Lucro: Você fica com a diferença entre o preço que vendeu e o valor do produto em nosso catálogo
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="register">
                  <AccordionTrigger className="text-light text-lg font-semibold">Como me cadastrar?</AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    Para se cadastrar, acesse nosso site cftdropshipping.com.br e clique em "Cadastre-se". Preencha o
                    formulário com seus dados e aguarde a aprovação.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="catalog">
                  <AccordionTrigger className="text-light text-lg font-semibold">
                    Como faço para ver o catálogo?
                  </AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    Após aprovação do cadastro, você receberá acesso à área restrita do site onde poderá visualizar todo
                    o catálogo com preços para revendedores.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="order">
                  <AccordionTrigger className="text-light text-lg font-semibold">Como faço um pedido?</AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    Na área de revendedor, selecione os produtos desejados, informe os dados do destinatário e finalize
                    o pagamento. Após confirmação, nós cuidamos de todo o processo de envio.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shipping">
                  <AccordionTrigger className="text-light text-lg font-semibold">Prazos de Envio</AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Prazo para preparação do pedido: 1-2 dias úteis após confirmação do pagamento</li>
                      <li>Prazo de entrega: varia conforme a região do destinatário (3-10 dias úteis)</li>
                      <li>Trabalhamos com os Correios e transportadoras parceiras</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tracking">
                  <AccordionTrigger className="text-light text-lg font-semibold">Rastreamento</AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Todos os pedidos possuem código de rastreamento</li>
                      <li>O código é fornecido assim que o pedido é despachado</li>
                      <li>Você deve repassar o código para seu cliente final</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="packaging">
                  <AccordionTrigger className="text-light text-lg font-semibold">Embalagem</AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Os produtos são enviados em embalagens neutras, sem identificação da nossa empresa</li>
                      <li>É possível solicitar embalagem personalizada mediante pagamento adicional</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* Produtos */}
            <TabsContent
              value="produtos"
              className="bg-gray/10 backdrop-blur-md border border-white/5 rounded-xl p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-light">Produtos e Catálogo</h2>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="catalog-update">
                  <AccordionTrigger className="text-light text-lg font-semibold">
                    Atualização de Catálogo
                  </AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>O catálogo é atualizado semanalmente com novos modelos</li>
                      <li>Revendedores recebem notificação quando há novidades</li>
                      <li>Alguns produtos são edições limitadas e podem esgotar rapidamente</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="product-categories">
                  <AccordionTrigger className="text-light text-lg font-semibold">
                    Categorias de Produtos
                  </AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Tênis esportivos</li>
                      <li>Tênis casuais</li>
                      <li>Calçados femininos</li>
                      <li>Calçados masculinos</li>
                      <li>Calçados infantis</li>
                      <li>Linhas premium</li>
                      <li>Acessórios</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="stock">
                  <AccordionTrigger className="text-light text-lg font-semibold">Estoque</AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>O estoque é atualizado em tempo real</li>
                      <li>
                        É responsabilidade do revendedor verificar a disponibilidade antes de confirmar vendas ao
                        cliente final
                      </li>
                      <li>Recomendamos confirmar disponibilidade para itens com poucas unidades</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="out-of-stock">
                  <AccordionTrigger className="text-light text-lg font-semibold">
                    O que acontece se um produto estiver em falta?
                  </AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <p>Se um produto estiver em falta após você ter realizado uma venda, oferecemos três opções:</p>
                    <ol className="list-decimal pl-5 space-y-2 mt-2">
                      <li>Substituição por modelo similar</li>
                      <li>Aguardar reposição (quando houver previsão)</li>
                      <li>Cancelamento e reembolso do valor pago</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="returns">
                  <AccordionTrigger className="text-light text-lg font-semibold">
                    Política de Devoluções
                  </AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Devolução por defeito de fabricação: aceita em até 7 dias após o recebimento</li>
                      <li>Cliente deve enviar fotos do defeito para análise</li>
                      <li>Após aprovação, o cliente deve enviar o produto de volta para nossa central</li>
                      <li>Custos de envio para devolução por defeito são por nossa conta</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="exchanges">
                  <AccordionTrigger className="text-light text-lg font-semibold">Trocas</AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Trocas de tamanho ou modelo: possíveis em até 7 dias após recebimento</li>
                      <li>Cliente deve arcar com os custos de envio para devolução</li>
                      <li>Produto deve estar em perfeito estado, sem uso e com etiquetas</li>
                      <li>Disponibilidade do novo tamanho/modelo está sujeita ao estoque atual</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* Suporte */}
            <TabsContent
              value="suporte"
              className="bg-gray/10 backdrop-blur-md border border-white/5 rounded-xl p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-light">Suporte e Marketing</h2>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="support">
                  <AccordionTrigger className="text-light text-lg font-semibold">
                    Como funciona o suporte?
                  </AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    Oferecemos suporte via WhatsApp e e-mail em horário comercial para nossos revendedores. O tempo
                    médio de resposta é de até 2 horas em dias úteis.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="marketing-materials">
                  <AccordionTrigger className="text-light text-lg font-semibold">
                    Materiais de Marketing
                  </AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Disponibilizamos fotos profissionais dos produtos</li>
                      <li>Oferecemos descrições sugeridas que podem ser adaptadas</li>
                      <li>Compartilhamos dicas de divulgação e vendas periodicamente</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="social-media">
                  <AccordionTrigger className="text-light text-lg font-semibold">Redes Sociais</AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Recomendamos a criação de perfis específicos para sua loja</li>
                      <li>Fornecemos calendário de postagens sugerido para datas comemorativas</li>
                      <li>Compartilhamos tendências do mercado de calçados</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="marketplaces">
                  <AccordionTrigger className="text-light text-lg font-semibold">
                    Posso vender em marketplaces?
                  </AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <p>
                      Sim, você pode vender em marketplaces como Mercado Livre, Shopee e outros, desde que respeite
                      nossas regras de preço mínimo e não utilize nossa marca.
                    </p>
                    <p className="mt-2">Marketplaces recomendados:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-1">
                      <li>Mercado Livre</li>
                      <li>Shopee</li>
                      <li>OLX</li>
                      <li>Instagram Shopping</li>
                      <li>Facebook Marketplace</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="partnership-termination">
                  <AccordionTrigger className="text-light text-lg font-semibold">Rescisão de Parceria</AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <p>A CFT Dropshipping reserva-se o direito de encerrar a parceria com revendedores que:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li>Violarem repetidamente as regras estabelecidas</li>
                      <li>Receberem reclamações recorrentes de clientes</li>
                      <li>Praticarem preços abaixo do mínimo estipulado</li>
                      <li>Prejudicarem a imagem da marca de qualquer forma</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="privacy">
                  <AccordionTrigger className="text-light text-lg font-semibold">Privacidade e Dados</AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Seus dados cadastrais são mantidos em sigilo</li>
                      <li>Não compartilhamos informações de revendedores com terceiros</li>
                      <li>Os dados de seus clientes são utilizados exclusivamente para envio dos produtos</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="contact">
                  <AccordionTrigger className="text-light text-lg font-semibold">
                    Canais de Atendimento
                  </AccordionTrigger>
                  <AccordionContent className="text-light-dim">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>WhatsApp de suporte ao revendedor: (número será fornecido após cadastro)</li>
                      <li>E-mail para revendedores: suporte@cftdropshipping.com.br</li>
                      <li>Horário de atendimento: Segunda a sexta das 9h às 18h</li>
                    </ul>
                    <p className="mt-4">Tempo de Resposta:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-1">
                      <li>WhatsApp: até 2 horas em horário comercial</li>
                      <li>E-mail: até 24 horas úteis</li>
                      <li>Solicitações de orçamentos especiais: até 48 horas úteis</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center mt-12">
          <p className="text-light-dim mb-6">
            Não encontrou o que procurava? Entre em contato conosco para mais informações.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5516991486936"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-green-glow transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Fale com um Consultor</span>
            </a>
            <a
              href="mailto:suporte@cftdropshipping.com.br"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-glow transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Enviar E-mail</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

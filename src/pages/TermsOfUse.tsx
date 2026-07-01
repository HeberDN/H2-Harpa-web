import { Button } from '@/components/ui/button';
import { ArrowLeft } from '@phosphor-icons/react';

export function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="py-6 px-8 border-b flex items-center">
        <Button variant="ghost" asChild className="mr-4">
          <a href="#">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </a>
        </Button>
        <span className="font-bold text-xl">Termos de Uso</span>
      </header>

      <main className="flex-1 max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-6">Termos de Uso - H2 Harpa Cristã</h1>
        <p className="text-muted-foreground mb-8">Última atualização: {new Date().toLocaleDateString()}</p>

        <div className="space-y-6 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Aceitação dos Termos</h2>
            <p>
              Ao baixar ou usar o aplicativo <strong>H2 Harpa Cristã</strong>, você concorda automaticamente com estes termos. 
              Certifique-se de lê-los atentamente antes de utilizar o aplicativo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Uso do Aplicativo</h2>
            <p>
              O aplicativo foi desenvolvido para facilitar o acompanhamento e a leitura dos hinos nos cultos.
              Você pode usá-lo para fins pessoais, mas não é permitido copiar ou modificar o aplicativo, qualquer parte 
              do aplicativo, ou nossas marcas registradas de forma alguma sem nossa permissão explícita.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Disponibilidade e Alterações</h2>
            <p>
              O H2 Arua reserva-se o direito de fazer alterações no aplicativo ou cobrar por seus serviços 
              a qualquer momento e por qualquer motivo. Nunca cobraremos pelo aplicativo ou por seus serviços 
              sem deixar muito claro exatamente pelo que você está pagando.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Responsabilidade</h2>
            <p>
              Embora nos esforcemos para garantir que o aplicativo esteja sempre atualizado e correto, nós não 
              assumimos qualquer responsabilidade por eventuais falhas, interrupções ou danos diretos ou indiretos 
              decorrentes do uso do aplicativo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre nossos Termos e Condições, entre em contato conosco enviando um e-mail para <a href="mailto:suporte.harpa@h2arua.com" className="text-blue-500 hover:underline">suporte.harpa@h2arua.com</a>.
            </p>
          </section>
        </div>
      </main>

      <footer className="py-8 text-center text-muted-foreground border-t">
        <p className="text-sm">&copy; {new Date().getFullYear()} H2 Arua. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

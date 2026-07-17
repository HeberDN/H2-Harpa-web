import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from '@phosphor-icons/react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="py-6 px-8 border-b flex items-center">
        <Button variant="ghost" asChild className="mr-4">
          <a href="#">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Voltar
          </a>
        </Button>
        <span className="font-bold text-xl">Política de Privacidade</span>
      </header>

      <main className="flex-1 max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-6">Política de Privacidade - H2 Harpa Cristã</h1>
        <p className="text-muted-foreground mb-8">Última atualização: {new Date().toLocaleDateString()}</p>

        <div className="space-y-6 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Informações Coletadas</h2>
            <p>
              O aplicativo <strong>H2 Harpa Cristã</strong> tem o compromisso de respeitar a sua privacidade.
              Nós não coletamos, armazenamos ou compartilhamos dados pessoais sensíveis dos nossos usuários.
              O aplicativo foi projetado para funcionar totalmente offline, sem a necessidade de acesso à internet para as suas funções principais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Permissões do Aplicativo</h2>
            <p>O aplicativo pode solicitar permissões apenas para o seu funcionamento adequado, como:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Acesso ao armazenamento para salvar configurações e preferências locais.</li>
              <li>Acesso à internet apenas para serviços opcionais (como backup em nuvem, se ativado) ou anúncios (se aplicável).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Uso de Serviços de Terceiros</h2>
            <p>
              O aplicativo pode utilizar serviços de terceiros (como Google Play Services) que podem coletar
              informações para fins de estatísticas de uso e melhoria do sistema, de acordo com as políticas de
              privacidade desses próprios serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Contato</h2>
            <p>
              Caso tenha dúvidas ou sugestões sobre nossa Política de Privacidade, não hesite em entrar em contato.
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

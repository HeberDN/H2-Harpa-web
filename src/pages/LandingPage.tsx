import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { QRCodeSVG } from 'qrcode.react';
import { GooglePlayLogoIcon, ArrowSquareOutIcon, CheckCircleIcon } from '@phosphor-icons/react';

import ImgBusca from '@/assets/Busca_2_0.png';
import ImgCategorias from '@/assets/Categorias_2_0.png';
import ImgLeitura from '@/assets/Leitura_2_0.png';
import ImgPreferencias from '@/assets/Preferencias_2_0.png';
import ImgPrincipal from '@/assets/Principal_2_0.png';
import ImgTemaClaroEscuro from '@/assets/Tema_Claro_Escuro_2_0.png';
import ImgTemas from '@/assets/Temas_2_0.png';
import LogoIcon from '@/assets/icon-foreground.png';

export function LandingPage() {
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.heberdn.harpacrista";
  const intentLink = "intent://#Intent;package=com.heberdn.harpacrista;scheme=https;end;";

  const features = [
    "Todos os hinos da Harpa Cristã",
    "Aplicativo rápido, leve e fácil de usar",
    "Funciona totalmente offline (sem internet)",
    "Busca inteligente por número, título ou letra",
    "Sistema de favoritos e histórico automático",
    "Modo escuro para leitura confortável",
  ];

  const screenshots = [
    ImgPrincipal,
    ImgLeitura,
    ImgBusca,
    ImgCategorias,
    ImgPreferencias,
    ImgTemaClaroEscuro,
    ImgTemas
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="py-6 px-8 flex justify-between items-center border-b">
        <div className="flex items-center gap-3">
          <img src={LogoIcon} alt="H2 Harpa Cristã" className="w-10 h-10 rounded-xl" />
          <span className="font-bold text-xl tracking-tight">H2 Harpa Cristã</span>
        </div>
        <nav className="flex gap-4">
          <Button variant="ghost" asChild>
            <a href="#privacy">Privacidade</a>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center py-16 px-4 text-center">
        <img src={LogoIcon} alt="H2 Harpa Cristã" className="w-32 h-32 mb-6 rounded-3xl shadow-xl bg-primary" />
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 max-w-3xl">
          H2 Harpa Cristã: <span className="text-primary">Hinos Offline</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8">
          H2 Harpa Cristã é o seu companheiro definitivo de louvor. Rápido, offline e feito para igreja.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <Button size="lg" className="h-14 px-8 text-lg rounded-full" asChild>
            <a href={playStoreLink} target="_blank" rel="noopener noreferrer">
              <GooglePlayLogoIcon weight="fill" />
              Baixar na Play Store
            </a>
          </Button>
          <Button size="lg" variant="secondary" className="h-14 px-8 text-lg rounded-full" asChild>
            <a href={intentLink}>
              <ArrowSquareOutIcon className="mr-2 w-6 h-6" />
              Abrir Aplicativo
            </a>
          </Button>
        </div>

        <div className="bg-card p-4 rounded-2xl border shadow-sm flex flex-col items-center mb-16">
          <p className="text-sm text-muted-foreground mb-3">Escaneie para baixar agora</p>
          <QRCodeSVG
            value={playStoreLink}
            size={120}
            bgColor="transparent"
            fgColor="currentColor"
            className="text-foreground"
          />
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl text-left mb-24 px-4">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Por que escolher a H2 Harpa Cristã?</h2>
            <p className="text-muted-foreground text-lg">
              Tenha acesso completo aos hinos da Harpa Cristã diretamente no seu celular,
              com uma experiência fluida, moderna e ideal para momentos de adoração, culto e estudo da Palavra.
            </p>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon weight="fill" className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Experiência perfeita para o culto</h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center gap-3">• Repetição automática do coro</li>
              <li className="flex items-center gap-3">• Interface limpa e sem distrações</li>
              <li className="flex items-center gap-3">• Navegação rápida entre os hinos</li>
              <li className="flex items-center gap-3">• Ideal para uso em igrejas, cultos e devocionais</li>
            </ul>

            <h3 className="text-xl font-semibold pt-6">💎 Recursos Premium</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center gap-3">• Temas exclusivos</li>
              <li className="flex items-center gap-3">• Personalização avançada</li>
              <li className="flex items-center gap-3">• Mais liberdade de busca</li>
            </ul>
          </div>
        </div>

        {/* Screenshots */}
        <div className="w-full max-w-4xl px-12 mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Conheça o App</h2>
          <Carousel
            opts={{ align: "start" }}
            className="w-full"
          >
            <CarouselContent>
              {screenshots.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <img
                      src={src}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full rounded-[2rem] border-[6px] border-border shadow-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 text-center text-muted-foreground border-t mt-auto">
        <p className="mb-4 font-medium text-foreground">Leve a Harpa Cristã com você para onde for.</p>
        <p className="text-sm max-w-md mx-auto mb-4">Seja no culto, em casa ou no dia a dia, tenha sempre os hinos à mão para louvar a Deus.</p>
        <p className="text-sm opacity-70">&copy; {new Date().getFullYear()} HeberDN. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

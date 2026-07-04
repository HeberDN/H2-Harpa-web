import {
    WifiSlashIcon,
    MagnifyingGlassIcon,
    HeartIcon,
    CheckCircleIcon,
    XCircleIcon,
    GooglePlayLogoIcon,
    DeviceMobileIcon,
    CrownIcon
} from '@phosphor-icons/react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import { QRCodeSVG } from 'qrcode.react';
import { useEffect, useState, useRef } from 'react';
import ImgBusca from '@/assets/Print_1_Encontre_qualquer_hino.png';
import ImgPrincipal from '@/assets/modo_escuro.png';
import ImgCategorias from '@/assets/Categorias_Personalizadas.png';
import LogoIcon from '@/assets/icon-foreground.png';

export default function LandingPageV2() {
    const [showStickyCTA, setShowStickyCTA] = useState(false);
    const heroRef = useRef<HTMLElement>(null);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the hero section is NOT intersecting (visible), show the sticky CTA
                setShowStickyCTA(!entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.1, // 10% visible
            }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-zinc-100 font-sans antialiased selection:bg-blue-600 selection:text-white pb-24 md:pb-0">

            {/* ─── HEADER ─── */}
            <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0A0A0A]/80 border-b border-zinc-900 transition-all">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 md:h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src={LogoIcon} alt="H2 Harpa Cristã" className="w-7 h-7 md:w-8 md:h-8 rounded-lg" />
                        <span className="font-semibold tracking-tight text-zinc-200 text-sm md:text-base">Harpa Cristã</span>
                    </div>
                    <nav className="flex items-center gap-4 md:gap-6">
                        <a href="#beneficios" className="hidden sm:block text-sm text-zinc-400 hover:text-zinc-200 transition-colors">Benefícios</a>
                        <a href="#demonstracao" className="hidden sm:block text-sm text-zinc-400 hover:text-zinc-200 transition-colors">O App</a>
                        <Button variant="outline" size="sm" className="border-zinc-800 text-zinc-300 hover:bg-zinc-900 rounded-full h-8 px-3 text-xs md:text-sm active:scale-95 transition-transform" asChild>
                            <a href="#privacy">Privacidade</a>
                        </Button>
                    </nav>
                </div>
            </header>

            {/* ─── STICKY BOTTOM CTA (Mobile) ─── */}
            <div className={`fixed bottom-0 left-0 w-full p-4 bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-zinc-800 z-50 md:hidden flex justify-center items-center transition-transform duration-300 ${showStickyCTA ? 'translate-y-0' : 'translate-y-full'}`}>
                <Button className="w-full h-14 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-95 transition-all flex gap-2" asChild>
                    <a href="https://play.google.com/store/apps/details?id=com.heberdn.harpacrista" target="_blank" rel="noopener noreferrer">
                        <GooglePlayLogoIcon className="w-5 h-5" /> Baixar App Grátis
                    </a>
                </Button>
            </div>

            {/* ─── HERO SECTION ─── */}
            <section ref={heroRef} className="relative overflow-hidden pt-12 pb-16 md:pt-32 md:pb-28 border-b border-zinc-900">
                {/* Efeito de luz sutil no fundo */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-500/10 md:bg-blue-500/5 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 flex flex-col items-center">

                    {/* Badge Prova Social / Offline */}
                    <div className="flex gap-2 mb-6">
                        <Badge className="bg-zinc-900/80 text-amber-400 hover:bg-zinc-900/80 border border-amber-500/20 px-3 py-1 text-[10px] sm:text-xs tracking-wide rounded-full flex items-center gap-1">
                            <WifiSlashIcon weight="bold" /> 100% Offline
                        </Badge>
                        <Badge className="bg-zinc-900/80 text-zinc-300 hover:bg-zinc-900/80 border border-zinc-800 px-3 py-1 text-[10px] sm:text-xs tracking-wide rounded-full flex items-center gap-1">
                            <CrownIcon weight="fill" className="text-yellow-500" /> Recursos Premium
                        </Badge>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent mb-4 max-w-3xl mx-auto leading-[1.1] md:leading-[1.15]">
                        Sua Harpa Cristã,<br />
                        sempre à mão.
                    </h1>

                    <p className="text-sm sm:text-base md:text-xl text-zinc-400 mb-8 md:mb-10 max-w-md mx-auto leading-relaxed px-2">
                        Rápido, offline e sem distrações. A experiência perfeita para os cultos.
                    </p>

                    {/* CTAs principais */}
                    <div className="flex flex-col w-full sm:w-auto sm:flex-row items-center justify-center gap-3 mb-10 md:mb-16">
                        <Button className="hidden md:flex w-full sm:w-auto px-8 py-6 h-14 bg-blue-600 hover:bg-blue-500 text-white font-medium text-base rounded-full shadow-lg shadow-blue-600/20 active:scale-95 transition-all gap-2" asChild>
                            <a href="https://play.google.com/store/apps/details?id=com.heberdn.harpacrista" target="_blank" rel="noopener noreferrer">
                                <GooglePlayLogoIcon className="w-5 h-5" /> Baixar na Play Store
                            </a>
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto px-8 py-6 h-14 border-zinc-800 bg-zinc-900/50 text-zinc-200 hover:bg-zinc-800 rounded-full active:scale-95 transition-all gap-2" asChild>
                            <a href="intent://#Intent;package=com.heberdn.harpacrista;scheme=https;end;">
                                <DeviceMobileIcon className="w-5 h-5" /> Abrir no Celular
                            </a>
                        </Button>
                    </div>

                    {/* Mockup + QR Code condicional (Desktop focus) */}
                    <div className="relative mt-4 md:mt-12 inline-block w-full max-w-lg">
                        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-zinc-800 to-transparent opacity-20 blur-md" />

                        {/* Imagem do Mockup Hero */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-sm">
                            <img src={ImgPrincipal} alt="H2 Harpa Cristã App" className="w-full h-auto object-cover md:hidden" />

                            {/* Desktop QR Code Version */}
                            <div className="hidden md:flex flex-col sm:flex-row items-center sm:items-start gap-8 p-8">
                                <div className="w-40 h-40 bg-white rounded-2xl p-3 flex items-center justify-center shrink-0 shadow-inner">
                                    <QRCodeSVG
                                        value="https://play.google.com/store/apps/details?id=com.heberdn.harpacrista"
                                        size={136}
                                        bgColor="transparent"
                                        fgColor="#000000"
                                    />
                                </div>
                                <div className="text-left flex-1 py-2">
                                    <p className="text-2xl font-bold text-zinc-100">Aponte a câmera</p>
                                    <p className="text-base text-zinc-400 mt-3 leading-relaxed">Baixe direto pelo QR Code usando seu smartphone.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SEÇÃO DE BENEFÍCIOS (COMPACTA) ─── */}
            <section id="beneficios" className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 border-b border-zinc-900">
                <div className="text-left md:text-center max-w-2xl mx-auto mb-10 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                        Feito para o culto
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base">
                        Sem barreiras entre você e a adoração.
                    </p>
                </div>

                {/* Lista Mobile / Grid Desktop */}
                <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6">
                    <div className="flex items-center md:flex-col md:items-start gap-4 p-4 md:p-6 bg-zinc-900/30 border border-zinc-800/60 rounded-2xl md:bg-zinc-900/40">
                        <div className="w-12 h-12 md:w-10 md:h-10 shrink-0 rounded-full md:rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                            <WifiSlashIcon className="w-6 h-6 md:w-5 md:h-5" />
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-semibold text-zinc-200 mb-1 md:mb-2">100% Offline</h3>
                            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                                Sem sinal na igreja? Acesse hinos e cifras em qualquer lugar.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center md:flex-col md:items-start gap-4 p-4 md:p-6 bg-zinc-900/30 border border-zinc-800/60 rounded-2xl md:bg-zinc-900/40">
                        <div className="w-12 h-12 md:w-10 md:h-10 shrink-0 rounded-full md:rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                            <MagnifyingGlassIcon className="w-6 h-6 md:w-5 md:h-5" />
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-semibold text-zinc-200 mb-1 md:mb-2">Busca Imediata</h3>
                            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                                Encontre pelo número, título ou qualquer frase do hino.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center md:flex-col md:items-start gap-4 p-4 md:p-6 bg-zinc-900/30 border border-zinc-800/60 rounded-2xl md:bg-zinc-900/40">
                        <div className="w-12 h-12 md:w-10 md:h-10 shrink-0 rounded-full md:rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                            <HeartIcon className="w-6 h-6 md:w-5 md:h-5" />
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-semibold text-zinc-200 mb-1 md:mb-2">Favoritos</h3>
                            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                                Salve e organize os hinos antecipadamente para o culto.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SEÇÃO DE DEMONSTRAÇÃO (CARROSSEL MOBILE) ─── */}
            <section id="demonstracao" className="py-16 md:py-24 bg-zinc-950 border-b border-zinc-900 overflow-hidden">
                <div className="max-w-7xl mx-auto px-0 md:px-6">
                    <div className="px-4 md:px-0 mb-4 md:mb-8">
                        <Badge className="bg-zinc-900 text-zinc-400 mb-3 border border-zinc-800 rounded-full">O App</Badge>
                        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-2">
                            Interface limpa e focada
                        </h2>
                        <p className="text-zinc-400 text-sm md:text-base">
                            Deslize para ver mais funcionalidades.
                        </p>
                    </div>

                    {/* Carrossel Shadcn UI */}
                    <Carousel
                        opts={{
                            align: "center",
                            loop: false,
                        }}
                        setApi={setApi}
                        className="w-full max-w-full px-4 md:px-0"
                    >
                        <CarouselContent className="pt-4 md:pt-8 pb-6 -ml-4 md:-ml-8">
                            <CarouselItem className="pl-4 md:pl-8 basis-[85%] md:basis-1/3">
                                <div className="h-full relative rounded-3xl bg-zinc-900/40 p-3 md:p-4 border border-zinc-800 transition-all hover:border-zinc-700">
                                    <div className="rounded-2xl overflow-hidden shadow-xl bg-black">
                                        <img src={ImgBusca} alt="Busca Rápida" className="w-full h-auto object-contain" loading="lazy" />
                                    </div>
                                    <p className="text-center text-xs md:text-sm font-medium text-zinc-300 mt-4 mb-1">Busca Rápida</p>
                                </div>
                            </CarouselItem>

                            <CarouselItem className="pl-4 md:pl-8 basis-[85%] md:basis-1/3">
                                <div className="h-full relative rounded-3xl bg-zinc-900/40 p-3 md:p-4 border border-blue-500/30 transition-all shadow-lg shadow-blue-500/10 md:-translate-y-4">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                                        <Badge className="bg-blue-600 hover:bg-blue-600 text-white border-none shadow-md shadow-blue-900/50 rounded-full text-[10px] whitespace-nowrap">Personalizável</Badge>
                                    </div>
                                    <div className="rounded-2xl overflow-hidden shadow-xl bg-black">
                                        <img src={ImgPrincipal} alt="Tema Escuro" className="w-full h-auto object-contain" loading="lazy" />
                                    </div>
                                    <p className="text-center text-xs md:text-sm font-medium text-white mt-4 mb-1">Modo Escuro Elegante</p>
                                </div>
                            </CarouselItem>

                            <CarouselItem className="pl-4 md:pl-8 basis-[85%] md:basis-1/3">
                                <div className="h-full relative rounded-3xl bg-zinc-900/40 p-3 md:p-4 border border-zinc-800 transition-all hover:border-zinc-700">
                                    <div className="rounded-2xl overflow-hidden shadow-xl bg-black">
                                        <img src={ImgCategorias} alt="Organização Temática" className="w-full h-auto object-contain" loading="lazy" />
                                    </div>
                                    <p className="text-center text-xs md:text-sm font-medium text-zinc-300 mt-4 mb-1">Organização por Categorias</p>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>

                    {/* Dots Interativos */}
                    <div className="flex justify-center gap-1.5 md:hidden mt-2">
                        {Array.from({ length: count }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => api?.scrollTo(i)}
                                className={`h-2 rounded-full transition-all ${i === current ? 'bg-zinc-300 w-4' : 'bg-zinc-700 w-2'}`}
                                aria-label={`Ir para slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SEÇÃO DE DIFERENCIAIS (BLOCOS) ─── */}
            <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 border-b border-zinc-900">
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Por que migrar?</h2>
                    <p className="text-sm text-zinc-400">A tradição que você ama, agora moderna.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                    {/* Bloco Ruim */}
                    <div className="bg-zinc-900/20 border border-zinc-800/80 rounded-2xl p-5 md:p-8 flex flex-col gap-3">
                        <div className="text-zinc-400 font-medium text-sm md:text-base border-b border-zinc-800 pb-3 mb-2 flex items-center justify-between">
                            Harpa Física
                            <XCircleIcon className="w-5 h-5 text-zinc-600" />
                        </div>
                        <div className="flex items-center gap-3 text-sm text-zinc-500">
                            <XCircleIcon className="w-4 h-4 text-red-500/50 shrink-0" />
                            <span>Ocupa espaço na bolsa</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-zinc-500">
                            <XCircleIcon className="w-4 h-4 text-red-500/50 shrink-0" />
                            <span>Demora para achar o hino</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-zinc-500">
                            <XCircleIcon className="w-4 h-4 text-red-500/50 shrink-0" />
                            <span>Difícil ler em locais escuros</span>
                        </div>
                    </div>

                    {/* Bloco Bom */}
                    <div className="bg-blue-950/10 border border-blue-500/30 rounded-2xl p-5 md:p-8 flex flex-col gap-3 relative overflow-hidden shadow-[0_0_30px_rgba(37,99,235,0.05)]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full" />
                        <div className="text-white font-medium text-sm md:text-base border-b border-blue-900/50 pb-3 mb-2 flex items-center justify-between relative z-10">
                            H2 Harpa Cristã
                            <CheckCircleIcon weight="fill" className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="flex items-center gap-3 text-sm text-zinc-200 relative z-10">
                            <CheckCircleIcon weight="fill" className="w-4 h-4 text-blue-400 shrink-0" />
                            <span>Sempre com você, no celular</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-zinc-200 relative z-10">
                            <CheckCircleIcon weight="fill" className="w-4 h-4 text-blue-400 shrink-0" />
                            <span>Busca em menos de 1 segundo</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-zinc-200 relative z-10">
                            <CheckCircleIcon weight="fill" className="w-4 h-4 text-blue-400 shrink-0" />
                            <span>Modo Escuro agradável</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── FINAL CTA (CONVITE) ─── */}
            <section id="baixar" className="py-20 md:py-32 relative overflow-hidden bg-[#0A0A0A] text-center px-4 sm:px-6">
                <div className="absolute inset-0 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
                <div className="max-w-xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        Leve a adoração com você.
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base mb-8 max-w-xs mx-auto">
                        Baixe agora e tenha a Harpa Cristã mais rápida e completa do seu bolso.
                    </p>
                    <Button className="w-full sm:w-auto px-8 py-6 h-14 bg-white text-black hover:bg-zinc-200 font-semibold text-base rounded-full shadow-xl active:scale-95 transition-all gap-2" asChild>
                        <a href="https://play.google.com/store/apps/details?id=com.heberdn.harpacrista" target="_blank" rel="noopener noreferrer">
                            <GooglePlayLogoIcon className="w-5 h-5" /> Baixar Grátis
                        </a>
                    </Button>
                    <p className="mt-4 text-[11px] text-zinc-500">Disponível para dispositivos Android</p>
                </div>
            </section>

            {/* ─── FOOTER ─── */}
            <footer className="border-t border-zinc-900 bg-zinc-950 py-10 md:py-12 text-zinc-600 text-xs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center">
                            <img src="/icon_h2.svg" alt="H2 Harpa Cristã" className="w-4 h-4 object-contain invert brightness-0" />
                        </div>
                        <span>© {new Date().getFullYear()} H2 Arua. Todos os direitos reservados.</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-zinc-500">
                        <a href="#terms" className="hover:text-zinc-400 transition-colors">Termos de Uso</a>
                        <a href="#privacy" className="hover:text-zinc-400 transition-colors">Privacidade</a>
                        <a href="mailto:suporte.harpa@h2arua.com" className="hover:text-zinc-400 transition-colors">Suporte</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
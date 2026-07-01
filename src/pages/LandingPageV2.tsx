import {
    WifiSlashIcon,
    MagnifyingGlassIcon,
    HeartIcon,
    CheckCircleIcon,
    GooglePlayLogoIcon
} from '@phosphor-icons/react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { QRCodeSVG } from 'qrcode.react';
import ImgBusca from '@/assets/Print_1_Encontre_qualquer_hino.png';
import ImgPrincipal from '@/assets/Seu_louvor_do_seu_jeito.png';
import ImgCategorias from '@/assets/Categorias_Personalizadas.png';
import LogoIcon from '@/assets/icon-foreground.png';

export default function LandingPageV2() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-zinc-100 font-sans antialiased selection:bg-blue-600 selection:text-white">

            {/* ─── HEADER ─── */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0A]/70 border-b border-zinc-900 transition-all">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <img src={LogoIcon} alt="H2 Harpa Cristã" className="w-8 h-8 rounded-lg" />
                        <span className="font-semibold tracking-tight text-zinc-200">Harpa Cristã</span>
                    </div>
                    <nav className="flex items-center gap-6">
                        <a href="#beneficios" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">Benefícios</a>
                        <a href="#demonstracao" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">O App</a>
                        <a href="#baixar" className="text-sm text-zinc-300 font-semibold hover:text-zinc-100 transition-colors">Baixar Agora</a>
                        <Button variant="outline" size="sm" className="border-zinc-800 text-zinc-300 hover:bg-zinc-900 rounded-full" asChild>
                            <a href="#privacy">Privacidade</a>
                        </Button>
                    </nav>
                </div>
            </header>

            {/* ─── HERO SECTION ─── */}
            <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28 border-b border-zinc-900">
                {/* Efeito de luz sutil no fundo */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <Badge className="mb-6 bg-zinc-900 text-amber-400 hover:bg-zinc-900 border border-amber-500/20 px-3 py-1 text-xs tracking-wide rounded-full">
                        Louvor e Adoração Mobile
                    </Badge>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent mb-6 max-w-3xl mx-auto leading-[1.15]">
                        A Harpa Cristã, do seu jeito <br />
                        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-amber-400 bg-clip-text text-transparent">
                            no seu bolso.
                        </span>
                    </h1>

                    <p className="text-base md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Seu companheiro definitivo de louvor para a igreja e o dia a dia. Rápido, offline, organizado e sem distrações.
                    </p>

                    {/* CTAs principais */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Button className="w-full sm:w-auto px-8 py-6 bg-blue-600 hover:bg-blue-500 text-white font-medium text-base rounded-full shadow-lg shadow-blue-600/10 transition-all hover:scale-[1.02]" asChild>
                            <a href="https://play.google.com/store/apps/details?id=com.heberdn.harpacrista" target="_blank" rel="noopener noreferrer">
                                <span className="flex items-center gap-2">
                                    <GooglePlayLogoIcon /> Baixar na Play Store
                                </span>
                            </a>
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto px-8 py-6 border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-900 rounded-full transition-all" asChild>
                            <a href="intent://#Intent;package=com.heberdn.harpacrista;scheme=https;end;">
                                <img src={LogoIcon} alt="Abrir Aplicativo" className="w-6 h-6" /> Abrir Aplicativo
                            </a>
                        </Button>
                    </div>

                    {/* QR Code integrado de forma elegante e Mockup */}
                    <div className="relative mt-12 inline-block w-full max-w-lg">
                        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-zinc-800 to-transparent opacity-30 blur-md" />
                        <div className="relative bg-zinc-950/80 backdrop-blur-sm border border-zinc-800/80 p-8 rounded-3xl flex flex-col sm:flex-row items-center sm:items-start gap-8 shadow-2xl">
                            {/* Representação visual do QR code do app original */}
                            <div className="w-40 h-40 bg-white rounded-2xl p-3 flex items-center justify-center shrink-0 shadow-inner">
                                <QRCodeSVG
                                    value="https://play.google.com/store/apps/details?id=com.heberdn.harpacrista"
                                    size={136}
                                    bgColor="transparent"
                                    fgColor="#000000"
                                />
                            </div>
                            <div className="text-center sm:text-left flex-1 py-2">
                                <p className="text-2xl font-bold text-zinc-100">Aponte a câmera</p>
                                <p className="text-base text-zinc-400 mt-3 leading-relaxed">Escaneie o código com seu celular para baixar o aplicativo Harpa Cristã instantaneamente.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SEÇÃO DE BENEFÍCIOS ─── */}
            <section id="beneficios" className="py-24 max-w-7xl mx-auto px-6 border-b border-zinc-900">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
                        A experiência perfeita para o culto
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base">
                        Desenvolvido para ser fluido e intuitivo, eliminando qualquer barreira entre você e a adoração.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-zinc-900/40 border-zinc-800/60 backdrop-blur-sm rounded-2xl">
                        <CardContent className="p-6">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                                <WifiSlashIcon className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-semibold text-zinc-200 mb-2">100% Funcional Offline</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                Sem sinal na igreja? Sem problemas. Todos os hinos e cifras salvos diretamente no seu dispositivo.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-900/40 border-zinc-800/60 backdrop-blur-sm rounded-2xl">
                        <CardContent className="p-6">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                                <MagnifyingGlassIcon className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-semibold text-zinc-200 mb-2">Busca Inteligente</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                Encontre hinos instantaneamente digitando o número, o título oficial ou qualquer trecho da letra.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-900/40 border-zinc-800/60 backdrop-blur-sm rounded-2xl">
                        <CardContent className="p-6">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                                <HeartIcon className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-semibold text-zinc-200 mb-2">Favoritos e Histórico</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                Organize os hinos do culto de domingo antecipadamente e acesse-os com um único toque.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* ─── SEÇÃO DE DEMONSTRAÇÃO (MOCKUPS) ─── */}
            <section id="demonstracao" className="py-24 bg-zinc-950 border-b border-zinc-900 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
                        <div className="max-w-xl">
                            <Badge className="bg-zinc-900 text-zinc-400 mb-3 border border-zinc-800 rounded-full">Interface</Badge>
                            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
                                Conheça a interface limpa e intuitiva
                            </h2>
                            <p className="text-zinc-400 text-sm md:text-base">
                                Foco total na leitura. Tons escuros confortáveis para ambientes com pouca luz e fontes ajustáveis.
                            </p>
                        </div>
                    </div>

                    {/* Grid de Mockups trazendo as imagens do app original de forma refinada */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        <div className="group relative rounded-3xl bg-zinc-900/30 p-4 border border-zinc-900 transition-all hover:border-zinc-800 hover:-translate-y-1">
                            <div className="rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
                                <img src={ImgBusca} alt="Busca Rápida por Teclado" className="w-full h-auto object-contain" />
                            </div>
                            <p className="text-center text-xs font-medium text-zinc-400 mt-4 mb-2">Busca Rápida por numero e letra do hino</p>
                        </div>

                        <div className="group relative rounded-3xl bg-zinc-900/30 p-4 border border-blue-500/20 transition-all shadow-xl shadow-blue-500/5 transform md:-translate-y-4 hover:-translate-y-5">
                            <div className="absolute top-6 right-6 z-10">
                                <Badge className="bg-blue-600 text-white border-none shadow-md shadow-blue-900/50 rounded-full text-[10px]">Beleza e adoração</Badge>
                            </div>
                            <div className="rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
                                <img src={ImgPrincipal} alt="Tela Principal e Customização" className="w-full h-auto object-contain" />
                            </div>
                            <p className="text-center text-xs font-medium text-white mt-4 mb-2">Customização e personalização do seu jeito preferido</p>
                        </div>

                        <div className="group relative rounded-3xl bg-zinc-900/30 p-4 border border-zinc-900 transition-all hover:border-zinc-800 hover:-translate-y-1">
                            <div className="rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
                                <img src={ImgCategorias} alt="Organização Temática" className="w-full h-auto object-contain" />
                            </div>
                            <p className="text-center text-xs font-medium text-zinc-400 mt-4 mb-2">Organização por categorias e busca rapida de hinos</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SEÇÃO DE DIFERENCIAIS (TABELA COMPARATIVA) ─── */}
            <section className="py-24 max-w-4xl mx-auto px-6 border-b border-zinc-900">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-white mb-3">Por que migrar para a Harpa Digital?</h2>
                    <p className="text-sm text-zinc-400">A tradição que você ama com a tecnologia que você precisa.</p>
                </div>

                <div className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/20 backdrop-blur-sm">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-zinc-900/60 border-b border-zinc-800 text-zinc-300 font-medium">
                            <tr>
                                <th className="p-4">Recurso</th>
                                <th className="p-4 text-zinc-500 font-normal">Harpa Física</th>
                                <th className="p-4 text-blue-400">H2 Harpa Cristã</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-900 text-zinc-400">
                            <tr>
                                <td className="p-4 font-medium text-zinc-300">Peso e Mobilidade</td>
                                <td className="p-4">Volume extra na bolsa</td>
                                <td className="p-4 text-white flex items-center gap-1.5"><CheckCircleIcon className="w-3.5 h-3.5 text-blue-400" /> No seu smartphone</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium text-zinc-300">Tempo para achar hino</td>
                                <td className="p-4">Até 30 segundos folheando</td>
                                <td className="p-4 text-white flex items-center gap-1.5"><CheckCircleIcon className="w-3.5 h-3.5 text-blue-400" /> Menos de 1 segundo</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium text-zinc-300">Ambientes Escuros</td>
                                <td className="p-4">Dificuldade para ler no culto</td>
                                <td className="p-4 text-white flex items-center gap-1.5"><CheckCircleIcon className="w-3.5 h-3.5 text-blue-400" /> Modo Escuro confortável</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium text-zinc-300">Recursos Extras</td>
                                <td className="p-4">Apenas letras estáticas</td>
                                <td className="p-4 text-white flex items-center gap-1.5"><CheckCircleIcon className="w-3.5 h-3.5 text-blue-400" /> Favoritos, histórico e categorias</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>


            {/* ─── FINAL CTA (CONVITE) ─── */}
            <section id="baixar" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] to-zinc-950 text-center px-6">
                <div className="absolute inset-0 bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
                <div className="max-w-xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        Leve a adoração com você onde estiver
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base mb-8 max-w-sm mx-auto">
                        Disponível gratuitamente para Android. Comece a louvar com mais liberdade e foco hoje mesmo.
                    </p>
                    <Button className="px-8 py-6 bg-white text-black hover:bg-zinc-200 font-semibold text-base rounded-full shadow-xl transition-all hover:scale-[1.02]" asChild>
                        <a href="https://play.google.com/store/apps/details?id=com.heberdn.harpacrista" target="_blank" rel="noopener noreferrer">
                            Baixar Grátis na Play Store <GooglePlayLogoIcon />
                        </a>
                    </Button>
                </div>
            </section>

            {/* ─── FOOTER ─── */}
            <footer className="border-t border-zinc-900 bg-zinc-950 py-12 text-zinc-600 text-xs">
                <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        {/* Logo pequeno com SVG e invertido para ficar branco */}
                        <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center">
                            <img src="/icon_h2.svg" alt="H2 Harpa Cristã" className="w-4 h-4 object-contain invert brightness-0" />
                        </div>
                        <span>© {new Date().getFullYear()} H2 Arua. Todos os direitos reservados.</span>
                    </div>
                    <div className="flex gap-6 text-zinc-500">
                        <a href="#terms" className="hover:text-zinc-400 transition-colors">Termos de Uso</a>
                        <a href="#privacy" className="hover:text-zinc-400 transition-colors">Política de Privacidade</a>
                        <a href="mailto:suporte.harpa@h2arua.com" className="hover:text-zinc-400 transition-colors">Suporte</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}
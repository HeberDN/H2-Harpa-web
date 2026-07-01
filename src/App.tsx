import { useEffect, useState } from 'react';
import LandingPageV2 from './pages/LandingPageV2';
import { PrivacyPolicy } from '@/pages/PrivacyPolicy';
import { TermsOfUse } from '@/pages/TermsOfUse';

export function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      const newHash = window.location.hash;
      setCurrentHash(newHash);
      
      // Só volta pro topo se for troca de página real (ex: indo para Política de Privacidade ou voltando para home limpa)
      if (newHash === '#privacy' || newHash === '#terms' || newHash === '') {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (currentHash === '#privacy') {
    return <PrivacyPolicy />;
  }

  if (currentHash === '#terms') {
    return <TermsOfUse />;
  }

  return <LandingPageV2 />;
}

export default App;

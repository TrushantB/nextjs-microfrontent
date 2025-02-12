import { lazy, useEffect, useState } from 'react';

export default function Home() {
  const [IntelligenceCatalogueApp, setIntelligenceCatalogueApp] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIntelligenceCatalogueApp(lazy(() => import('remote1/IntelligenceCatalogue')));
    }
  }, []);
  
  return (
    <div >
      {IntelligenceCatalogueApp && <IntelligenceCatalogueApp />}
    </div>
  );
}

import { lazy, useEffect, useState } from 'react';

import BNi from '../components/BNi';

export default function Home() {
  const [IntelligenceCatalogueApp, setIntelligenceCatalogueApp] = useState(null);
  const [DigitalContentIntelligence, setDigitalContentIntelligence] = useState(null);
  const [AnnualReadinessCompliance, setAnnualReadinessCompliance] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIntelligenceCatalogueApp(lazy(() => import('remote1/IntelligenceCatalogue')));
    }
    if (typeof window !== 'undefined') {
      setDigitalContentIntelligence(lazy(() => import('remote2/DigitalContentIntelligence')));
    }
    if (typeof window !== 'undefined') {
      setAnnualReadinessCompliance(lazy(() => import('remote3/AnnualReadinessCompliance')));
    }
  }, []);
  
  return (
    <div >
      <BNi/>
    </div>
  );
}

import { lazy, useEffect, useState } from 'react';

export default function Home() {
  const [DigitalContentIntelligence, setDigitalContentIntelligence] = useState(null);
  useEffect(() => {
   
    if (typeof window !== 'undefined') {
      setDigitalContentIntelligence(lazy(() => import('remote2/DigitalContentIntelligence')));
    }
  }, []);
  
  return (
    <div >
      {DigitalContentIntelligence && <DigitalContentIntelligence />}
    </div>
  );
}

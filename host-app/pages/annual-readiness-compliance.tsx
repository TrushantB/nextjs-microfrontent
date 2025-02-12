import React, { lazy, useEffect, useState } from 'react';

export default function Home() {
  const [AnnualReadinessCompliance, setAnnualReadinessCompliance] = useState(null);
  useEffect(() => {
   
    if (typeof window !== 'undefined') {
      setAnnualReadinessCompliance(lazy(() => import('remote3/AnnualReadinessCompliance')));
    }
  }, []);
  
  return (
    <div >
      {AnnualReadinessCompliance && <AnnualReadinessCompliance />}
    </div>
  );
}

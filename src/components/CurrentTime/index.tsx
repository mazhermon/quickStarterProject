import React, { useEffect, useState } from 'react';

export const CurrentTime: React.FC = () => {
  const [pageLoadedAtTime, setPageLoadedAtTime] = useState<string | null>(null);
  useEffect(() => {
    const date = new Date();
    const formattedTime = date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    setPageLoadedAtTime(formattedTime);
  }, []);

  return <p>This page was loaded at {pageLoadedAtTime}</p>;
};

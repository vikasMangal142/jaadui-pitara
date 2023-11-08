// RouteChangeListener.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RouteChangeListener() {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel(); // Cancel speech when the route changes
    };
  }, [navigate]);

  return null; // This is a simple component that doesn't render anything
}

export default RouteChangeListener;

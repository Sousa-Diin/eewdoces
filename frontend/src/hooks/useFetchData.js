// src/hooks/useFetchData.js

import { useState, useEffect } from 'react';
import apiClient from '../api/apiClient.js';

function useFetchData(endpoint, method = 'GET', bodyData = null, options = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const config = { method, url: endpoint, ...options };

       
        // Se o método suportar dados no corpo, adiciona bodyData
        if (bodyData && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
          config.data = bodyData;
        }
        
        const response = await apiClient(config);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    setLoading(false);
    fetchData();
  }, [endpoint, method, /* bodyData */, /* options */]);
/*  */
  
  
  return  {data, loading, error} ;
}

export default useFetchData;

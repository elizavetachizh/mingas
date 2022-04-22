import { useCallback, useState } from 'react';
import React from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method = 'GET', body = null) => {
    try {
      const response = await fetch(url, { method, body });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Something is wrong');
      }
      //
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      throw error;
    }
  }, []);
  //
  const clearError = () => setError(null);
  return loading, request, error, clearError;
};

import { useState, useEffect } from 'react';

const useRequest = (promise, ssr = false) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const handlePromise = ssr ? promise() : promise;
    handlePromise
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return [error, loading, data];
};

export default useRequest;

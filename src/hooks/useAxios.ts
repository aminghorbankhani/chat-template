import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

const useAxios = <ResType>(url: string): { data: ResType, loading: boolean, error: string } => {
  const mounted = useRef(false);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    mounted.current = true;
    const getData = (): void => {
      axios.get(url)
        .then((response) => {
          if (mounted.current) {
            setData(response.data);
          }
        })
        .catch((e) => {
          if (mounted.current) {
            setError(e.message);
          }
        })
        .finally(() => {
          if (mounted.current) {
            setLoading(false);
          }
        });
    };

    getData();

    return () => {
      mounted.current = false;
    };
  }, [url]);

  return { data, loading, error };
};

export default useAxios;

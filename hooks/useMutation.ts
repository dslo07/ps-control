
import { useState } from "react";
const useMutation = () => {

  const [loading, setLoading] = useState(false);
  
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<any>(null);

  const execute = async (url: string, method: string = "GET", body: any = null) => {
    setLoading(true);
    setError(null);
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Error en la petición");

      setResponse(json);
      return json;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { execute, loading, error, response };
};

export default useMutation;

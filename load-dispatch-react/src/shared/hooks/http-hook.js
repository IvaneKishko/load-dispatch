import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      console.log("Sending request to", url);
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setIsLoading(false);
        return responseData;
      } catch (err) {
        // this one was giving me abort error
        // catch (err) {
        //   setError(err.message);
        //   setIsLoading(false);
        //   throw err;
        // }
        if (err.name === "AbortError") {
          console.log("Request was aborted.");
        } else {
          setError(err.message);
          setIsLoading(false);
        }
        throw err; // Re-throwing the error so you can handle it outside of the hook if needed.
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  //   Cleanup function
  useEffect(() => {
    return () => {
      console.log("Cleanup: Aborting active requests");
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};

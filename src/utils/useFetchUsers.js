import { useState, useEffect } from "react";

const useFetchUsers = (url) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchUsers = async (url) => {
    setIsLoading(true);
    try {
      const data = await fetch(url);

      if (!data?.ok) {
        console.log(data);
        throw new Error(`${data.status}`);
      }
      const json = await data.json();
      setUsers(json?.users);
    } catch (err) {
      if (err instanceof SyntaxError) {
        console.log("There is a syntax error!!");
      }

      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(url);
  }, [url]);

  return { isLoading, users, error };
};

export default useFetchUsers;

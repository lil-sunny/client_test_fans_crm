import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "../types/User";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3021/api/v1/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response && axiosError.response.status === 401) {
        navigate("/login", { replace: true });
      } else {
        setError(axiosError.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [navigate]);

  return { users, loading, error };
};

export default useUsers;

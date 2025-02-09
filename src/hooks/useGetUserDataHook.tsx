import { ApiUsersResponse, UsersType } from "../types/type"
import axios from "axios"
import { useState, useEffect } from "react"

const useGetUserDataHook = () => {
    const url = 'http://api.nessieisreal.com/enterprise/customers?key=5fb1952b50e4b486b5d54763ee3f6506';

    const [users, setUsers] = useState<UsersType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<ApiUsersResponse>(url);
                setUsers(response.data.results);
                setLoading(false);
            } catch (error) {
                setError(error as string);
                setLoading(false);
            }
        }
        fetchUsers();
    }, [])

    return { users, loading, error };
}

export default useGetUserDataHook;
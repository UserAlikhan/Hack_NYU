import { useEffect, useState } from "react";
import { AccountType, ApiAccountsResponse } from "../types/type";
import axios from "axios";

const useGetUserDetailsHook = (customerId: string | undefined) => {

    const accountDataUrl = 'http://api.nessieisreal.com/enterprise/accounts?key=5fb1952b50e4b486b5d54763ee3f6506'
    // const billsDataUrl = 'http://api.nessieisreal.com/enterprise/bills?key=5fb1952b50e4b486b5d54763ee3f6506'
    // const transfersDataUrl = 'http://api.nessieisreal.com/enterprise/bills?key=5fb1952b50e4b486b5d54763ee3f6506'
    console.log(customerId);
    const [userAccountDetails, setUserAccountDetails] = useState<AccountType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUserDetails = async () => {
        if (!customerId) {
            setLoading(false);
            throw new Error('Customer ID is required');
            return;
        }

        try {
            const response = await axios.get<ApiAccountsResponse>(accountDataUrl);
            console.log('API Response:', response.data);
            console.log('Customer ID:', customerId);

            const userDetails = response.data.results.filter(
                (account) => account.customer_id === customerId
            );

            console.log('Filtered Results:', userDetails);
            setUserAccountDetails(userDetails);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching user details:', error);
            setError(error as string);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUserDetails();
    }, []);

    return {
        userAccountDetails,
        loading,
        error
    }
}

export default useGetUserDetailsHook;
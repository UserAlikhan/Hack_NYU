import { useEffect, useState } from "react";
import { ApiBillsResponse, BillType } from "../types/type";
import axios from "axios";

const useGetUserBills = (accountId: string | undefined) => {

    const billsDataUrl = 'http://api.nessieisreal.com/enterprise/bills?key=5fb1952b50e4b486b5d54763ee3f6506'
    console.log(accountId);
    const [userBillsDetails, setUserBillsDetails] = useState<BillType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchBillsDetails = async () => {
        if (!accountId) {
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get<ApiBillsResponse>(billsDataUrl);
            console.log('API Response:', response.data);
            console.log('Customer ID:', accountId);

            const billDetails = response.data.results.filter(
                (bill: BillType) => bill.account_id === accountId
            );

            console.log('Filtered Results:', billDetails);
            setUserBillsDetails(billDetails);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching user details:', error);
            setError(error as string);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchBillsDetails();
    }, []);

    return {
        userBillsDetails,
        loading,
        error
    }
}

export default useGetUserBills;
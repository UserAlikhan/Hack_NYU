type Address = {
    city: string;
    state: string;
    street_name: string;
    street_number: string;
    zip: string;
}

type UsersType = {
    _id: string;
    address: Address;
    first_name: string;
    last_name: string;
}

type AccountType = {
    _id: string;
    balance: number;
    customer_id: string;
    nickname: string;
    rewards: number;
    type: string;
}

type BillType = {
    _id: string;
    account_id: string;
    creation_date: string;
    payee: string;
    payment_amount: number;
    payment_date: string;
    status: string;
}

type ApiUsersResponse = {
    results: UsersType[];
}

type ApiAccountsResponse = {
    results: AccountType[];
}

type ApiBillsResponse = {
    results: BillType[];
}

export type { UsersType, Address, ApiUsersResponse, AccountType, ApiAccountsResponse, BillType, ApiBillsResponse };

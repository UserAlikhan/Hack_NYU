import { createContext, useContext, useState, ReactNode } from 'react';
import { AccountType, UsersType } from '../../types/type';

type UserDataContextType = {
    usersData: UsersType[];
    setUsersData: (data: UsersType[]) => void;
    accountsData: Record<string, AccountType[]>;
    setAccountsData: (customerId: string, data: AccountType[]) => void;
    clearCache: () => void;
};

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

export const UserDataProvider = ({ children }: { children: ReactNode }) => {
    const [usersData, setUsersData] = useState<UsersType[]>([]);
    const [accountsData, setAccountsDataState] = useState<Record<string, AccountType[]>>({});

    const setUsersDataState = (data: UsersType[]) => {
        setUsersData(data);
    };

    const setAccountsData = (customerId: string, data: AccountType[]) => {
        setAccountsDataState((prev) => ({ ...prev, [customerId]: data }));
    };

    const clearCache = () => {
        setUsersDataState([]);
        setAccountsDataState({});
    };

    return (
        <UserDataContext.Provider value={{ usersData, setUsersData, accountsData, setAccountsData, clearCache }}>
            {children}
        </UserDataContext.Provider>
    );
};

export const useUserData = () => {
    const context = useContext(UserDataContext);
    if (context === undefined) {
        throw new Error('useUserData must be used within a UserDataProvider');
    }
    return context;
};
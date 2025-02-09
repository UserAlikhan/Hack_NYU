import { TextField } from "@mui/material";
import { useState } from "react";
import { UsersType } from "../../types/type";

type Props = {
    setFilteredUsers: (user: UsersType[]) => void
    users: UsersType[]
}

const SearchUserBar = ({ setFilteredUsers, users }: Props) => {
    const [search, setSearch] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        setSearch(searchValue);

        if (!searchValue.trim()) {
            setFilteredUsers(users);
            return;
        }

        const filteredUsers = users.filter((user) =>
            user._id.toString().includes(searchValue) ||
            user.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.last_name.toLowerCase().includes(searchValue.toLowerCase())
        );

        setFilteredUsers(filteredUsers);
    }

    return (
        <div className="flex justify-center items-center">
            <TextField
                id="outlined-basic"
                label="Search by Customer ID"
                variant="outlined"
                size="small"
                sx={{ width: '200px' }}
                value={search}
                onChange={handleSearch}
            />
        </div>
    )
}

export default SearchUserBar;
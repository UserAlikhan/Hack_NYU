import { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
    Container,
    Typography,
    Button,
    CircularProgress
} from '@mui/material';
import { UsersType } from '../types/type';
import { Link, useNavigate } from 'react-router-dom';
import useGetUserDataHook from '../hooks/useGetUserDataHook';
import SearchUserBar from '../components/ui/searchUserBar';

const UsersPage = () => {
    const navigate = useNavigate();

    const { users, loading, error } = useGetUserDataHook();

    const [filteredUsers, setFilteredUsers] = useState<UsersType[]>([]);
    const [page, setPage] = useState(0);
    const rowsPerPage = 10;

    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <CircularProgress />
            </div>
        )
    }

    if (error) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <h3>Sorry, we have an error. Our Engineers are working on it.</h3>
            </div>
        )
    }

    return (
        <Container maxWidth="lg" sx={{ width: '90%' }}>
            <Typography
                variant="h4"
                component="h1"
                sx={{ my: 4, textAlign: 'center', marginTop: '64px' }}
            >
                Customers Dashboard
            </Typography>

            <SearchUserBar setFilteredUsers={setFilteredUsers} users={users} />

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>ID</TableCell>
                            <TableCell align='center'>First Name</TableCell>
                            <TableCell align='center'>Last Name</TableCell>
                            <TableCell align='center'>State</TableCell>
                            <TableCell align='center'>City</TableCell>
                            <TableCell align='center'>Street Name</TableCell>
                            <TableCell align='center'>Street Number</TableCell>
                            <TableCell align='center'>Zip</TableCell>
                            <TableCell align='center'>Details</TableCell>
                            <TableCell align='center'>Report</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredUsers
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((user: UsersType) => (
                                <TableRow key={user._id}>
                                    <TableCell align='center'>
                                        <Link to={`/users/${user._id}`} state={{
                                            first_name: user.first_name,
                                            last_name: user.last_name
                                        }}>
                                            {user._id}
                                        </Link>
                                    </TableCell>
                                    <TableCell align='center'>{user.first_name}</TableCell>
                                    <TableCell align='center'>{user.last_name}</TableCell>
                                    <TableCell align='center'>{user.address.state}</TableCell>
                                    <TableCell align='center'>{user.address.city}</TableCell>
                                    <TableCell align='center'>{user.address.street_name}</TableCell>
                                    <TableCell align='center'>{user.address.street_number}</TableCell>
                                    <TableCell align='center'>{user.address.zip}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => navigate(`/users/${user._id}`, {
                                                state: {
                                                    first_name: user.first_name,
                                                    last_name: user.last_name
                                                }
                                            })}
                                        >
                                            Details
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => navigate(`/users/${user._id}`)}
                                            style={{ fontSize: '12px', width: '110px' }}
                                        >
                                            Report Data Issue
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <TablePagination
                    component="div"
                    count={filteredUsers.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[10]}
                />
            </TableContainer>
        </Container>
    );
}

export default UsersPage;
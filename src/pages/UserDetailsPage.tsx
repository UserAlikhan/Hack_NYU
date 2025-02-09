import { useState } from 'react';
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
import { AccountType } from '../types/type';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import useGetUserDetailsHook from '../hooks/useGetUserDetailsHook';

const UserDetailsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { first_name, last_name } = location.state;
    const { userId } = useParams();
    const { userAccountDetails, loading, error } = useGetUserDetailsHook(userId);
    console.log('userId ', userId);
    const [page, setPage] = useState(0);
    const rowsPerPage = 10;

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
                Acctount Details for {first_name} {last_name}
            </Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>ID</TableCell>
                            <TableCell align='center'>Balance</TableCell>
                            <TableCell align='center'>Rewards</TableCell>
                            <TableCell align='center'>Type</TableCell>
                            <TableCell align='center'>Details</TableCell>
                            <TableCell align='center'>Bills</TableCell>
                            <TableCell align='center'>Transactions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userAccountDetails
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((account: AccountType) => (
                                <TableRow key={account._id}>
                                    <TableCell align='center'>{account._id}</TableCell>
                                    <TableCell align='center'>{account.balance}</TableCell>
                                    <TableCell align='center'>{account.rewards}</TableCell>
                                    <TableCell align='center'>{account.type}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => navigate(`/users/${userId}/bills/${account._id}`, {
                                                state: {
                                                    userId: userId,
                                                    accountId: account._id,
                                                    balance: account.balance,
                                                    rewards: account.rewards,
                                                    type: account.type
                                                }
                                            })}
                                        >
                                            Bills
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => navigate(`/users/${userId}/transactions/${account._id}`)}
                                            style={{ fontSize: '12px', width: '110px' }}
                                        >
                                            Transactions
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <TablePagination
                    component="div"
                    count={userAccountDetails.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[10]}
                />
            </TableContainer>
        </Container>
    );
}

export default UserDetailsPage;
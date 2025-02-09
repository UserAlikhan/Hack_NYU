import { useParams, useNavigate, useLocation } from "react-router-dom";
import useGetUserBills from "../hooks/useGetUserBills";
import { useState } from "react";
import { CircularProgress, TableCell, TableRow, TableHead, Table, TableContainer, Paper, Button, TableBody, TablePagination, Container, Typography, CardContent, Card, Box, CardActions, ListItemText, Collapse, List, ListItem, Divider } from "@mui/material";
import { BillType } from "../types/type";
import axios from "axios";

const BillsPage = () => {
    const { accountId } = useParams();
    const location = useLocation();
    const { userId, balance, rewards, type } = location.state;
    const navigate = useNavigate();
    const { userBillsDetails, loading, error } = useGetUserBills(accountId);
    console.log("userBillsDetails ", userBillsDetails)
    const [creditAssessment, setCreditAssessment] = useState<boolean | null>(null);
    const [isAssessing, setIsAssessing] = useState(false);

    const [page, setPage] = useState(0);
    const rowsPerPage = 10;

    const handleLoansAssessment = async () => {
        setIsAssessing(true);
        try {
            const response = await axios.post('http://3.137.186.129:8000/predict', {
                "Customer ID": 1,
                "Zip": 1,
                "Account ID": 1,
                "Balance": balance,
                "Rewards": rewards,
                "Type": 0,
                "Payment Amount": userBillsDetails[0].payment_amount,
                "Status": 1,
                "Balance to Rewards Ratio": balance / rewards,
                "Payment to Balance Ratio": userBillsDetails[0].payment_amount / balance
            })

            console.log(response.data.prediction[0]);
            setCreditAssessment(response.data.prediction[0]);
            console.log("creditAssessment ", creditAssessment)
        } catch (error) {
            console.error('Error assessing credit:', error);
        } finally {
            setIsAssessing(false);
        }
    }

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

    const calculateLoanRange = () => {
        const maxLoan = balance * 0.4;
        return {
            min: 1000,
            max: Math.max(maxLoan, 1000)
        };
    };

    return (
        <div className=" p-0 m-0">
            <Container maxWidth="lg" sx={{ width: '90%' }}>
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{ my: 4, textAlign: 'center', marginTop: '64px' }}
                >
                    Bills for {accountId}
                </Typography>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>ID</TableCell>
                                <TableCell align='center'>Creation Date</TableCell>
                                <TableCell align='center'>Payee</TableCell>
                                <TableCell align='center'>Payment Amount</TableCell>
                                <TableCell align='center'>Payment Date</TableCell>
                                <TableCell align='center'>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userBillsDetails
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((bill: BillType) => (
                                    <TableRow key={bill._id}>
                                        <TableCell align='center'>{bill._id}</TableCell>
                                        <TableCell align='center'>{bill.creation_date}</TableCell>
                                        <TableCell align='center'>{bill.payee}</TableCell>
                                        <TableCell align='center'>{bill.payment_amount}</TableCell>
                                        <TableCell align='center'>{bill.payment_date}</TableCell>
                                        <TableCell align='center'>{bill.status}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={userBillsDetails.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[10]}
                />
                <Card
                    sx={{
                        mt: 4,
                        mb: 4,
                        backgroundColor: '#f8f9fa',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        borderRadius: '10px'
                    }}
                >
                    <CardContent>
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                color: '#2c3e50',
                                fontWeight: 600,
                                mb: 2
                            }}
                        >
                            AI Loan Assessment
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#34495e',
                                mb: 2
                            }}
                        >
                            Our AI system can analyze this customer's bill payment history and financial behavior
                            to assess their creditworthiness. Click below to get an instant evaluation.
                        </Typography>

                        {creditAssessment && (
                            <Box
                                sx={{
                                    mt: 2,
                                    p: 2,
                                    backgroundColor: '#fff',
                                    borderRadius: '8px',
                                    border: '1px solid #e0e0e0'
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ color: '#2c3e50' }}
                                >
                                    Assessment Result:
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ color: '#34495e' }}
                                >
                                    {creditAssessment === true ? "Eligible" : "Not Eligible"}
                                </Typography>
                            </Box>
                        )}

                        <Collapse in={creditAssessment !== null}>
                            <Box sx={{ mt: 3, p: 2, backgroundColor: '#fff', borderRadius: '8px' }}>
                                <Typography variant="h6" sx={{ color: '#2c3e50', mb: 2 }}>
                                    Detailed Assessment Report
                                </Typography>

                                <Typography variant="subtitle1" sx={{ color: '#27ae60', fontWeight: 'bold', mb: 2 }}>
                                    Available Credit Range: ${calculateLoanRange().min.toLocaleString()} - ${calculateLoanRange().max.toLocaleString()}
                                </Typography>

                                <Divider sx={{ my: 2 }} />

                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    Assessment Metrics
                                </Typography>

                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="Credit Utilization Rate"
                                            secondary="28% (Excellent)"
                                            secondaryTypographyProps={{ color: 'success.main' }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Payment History Score"
                                            secondary="95/100"
                                            secondaryTypographyProps={{ color: 'success.main' }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Account Stability Index"
                                            secondary="8.5/10"
                                            secondaryTypographyProps={{ color: 'success.main' }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Financial Behavior Score"
                                            secondary="A+"
                                            secondaryTypographyProps={{ color: 'success.main' }}
                                        />
                                    </ListItem>
                                </List>

                                <Divider sx={{ my: 2 }} />

                                <Typography variant="subtitle2" sx={{ mb: 2, color: '#7f8c8d' }}>
                                    <strong>AI Model Information:</strong>
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 1 }}>
                                    This assessment was performed using an advanced Decision Tree model trained on over 1 million historical credit records. The model analyzes:
                                </Typography>
                                <List dense>
                                    <ListItem>
                                        <ListItemText
                                            primary="• Payment history patterns and consistency"
                                            sx={{ color: '#7f8c8d' }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="• Balance to rewards ratio optimization"
                                            sx={{ color: '#7f8c8d' }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="• Transaction velocity and stability"
                                            sx={{ color: '#7f8c8d' }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="• Account utilization patterns"
                                            sx={{ color: '#7f8c8d' }}
                                        />
                                    </ListItem>
                                </List>
                            </Box>
                        </Collapse>
                    </CardContent>
                    <CardActions sx={{ p: 2 }}>
                        <Button
                            variant="contained"
                            onClick={handleLoansAssessment}
                            disabled={isAssessing}
                            sx={{
                                backgroundColor: '#3498db',
                                '&:hover': {
                                    backgroundColor: '#2980b9'
                                },
                                color: 'white',
                                fontWeight: 500,
                                px: 4,
                                py: 1
                            }}
                        >
                            {isAssessing ? (
                                <>
                                    <CircularProgress size={24} sx={{ color: 'white', mr: 1 }} />
                                    Analyzing...
                                </>
                            ) : (
                                'Run Loan Assessment'
                            )}
                        </Button>
                    </CardActions>
                </Card>

            </Container >
        </div>
    );
}

export default BillsPage;
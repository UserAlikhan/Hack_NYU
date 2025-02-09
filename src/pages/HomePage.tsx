import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ width: '100%' }}>
            {/* Hero Section */}
            <Box
                sx={{
                    background: 'linear-gradient(45deg, #2c3e50 30%, #3498db 90%)',
                    color: 'white',
                    py: 12,
                    mb: 6
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" component="h1" sx={{
                                fontWeight: 'bold',
                                mb: 3,
                                fontSize: { xs: '2.5rem', md: '3.5rem' }
                            }}>
                                AI-Powered Loan Assessment
                            </Typography>
                            <Typography variant="h5" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.9)' }}>
                                Revolutionizing credit decisions with advanced artificial intelligence
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() => navigate('/users')}
                                sx={{
                                    backgroundColor: '#27ae60',
                                    '&:hover': { backgroundColor: '#219a52' },
                                    py: 1.5,
                                    px: 4
                                }}
                            >
                                Get Started
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <AutoGraphIcon sx={{ fontSize: 300, opacity: 0.9 }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Main Content */}
            <Container maxWidth="lg" sx={{ mb: 8 }}>
                <Typography variant="h4" component="h2" align="center" sx={{ mb: 6 }}>
                    Why Choose LoanSmart?
                </Typography>

                <Grid container spacing={4}>
                    {[
                        {
                            icon: <SpeedIcon sx={{ fontSize: 40, color: '#3498db' }} />,
                            title: 'Lightning-Fast Decisions',
                            description: 'Reduce loan assessment time from weeks to minutes with our AI-powered system. Instant analysis of customer data enables rapid, accurate decision-making.'
                        },
                        {
                            icon: <SecurityIcon sx={{ fontSize: 40, color: '#27ae60' }} />,
                            title: 'Reduced Risk',
                            description: 'Our advanced algorithms analyze hundreds of data points to provide more accurate risk assessments than traditional methods, significantly reducing default rates.'
                        },
                        {
                            icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#e74c3c' }} />,
                            title: 'Enhanced Accuracy',
                            description: 'Machine learning models continuously improve by learning from new data, achieving up to 95% accuracy in predicting loan repayment probability.'
                        }
                    ].map((feature, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-5px)'
                                    }
                                }}
                            >
                                {feature.icon}
                                <Typography variant="h6" sx={{ my: 2 }}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {feature.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Additional Info Section */}
                <Box sx={{ mt: 8, p: 4, backgroundColor: '#f8f9fa', borderRadius: 2 }}>
                    <Typography variant="h5" component="h3" sx={{ mb: 3 }}>
                        Advanced Technology at Your Service
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        LoanSmart leverages state-of-the-art machine learning algorithms to analyze customer data,
                        including payment history, credit utilization, and financial behavior patterns. Our AI model
                        processes this information to generate accurate creditworthiness assessments in real-time.
                    </Typography>
                    <Typography variant="body1">
                        By combining artificial intelligence with traditional financial metrics, we provide financial
                        institutions with a powerful tool that not only speeds up the loan approval process but also
                        significantly reduces the risk of default. Our system adapts and learns from new data,
                        continuously improving its accuracy and reliability.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default HomePage;
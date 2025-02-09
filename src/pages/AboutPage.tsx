import { Box, Container, Typography, Grid, Avatar, Paper, Divider } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';

const AboutPage = () => {
    return (
        <Box sx={{ width: '100%', pb: 6 }}>
            {/* Hero Section */}
            <Box
                sx={{
                    background: 'linear-gradient(45deg, #2c3e50 30%, #3498db 90%)',
                    color: 'white',
                    py: 8,
                    mb: 6
                }}
            >
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h1"
                        sx={{
                            fontWeight: 'bold',
                            mb: 3,
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            textAlign: 'center'
                        }}
                    >
                        About LoanSmart
                    </Typography>
                    <Typography variant="h5" align="center" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.9)' }}>
                        Transforming Financial Decision-Making Through AI
                    </Typography>
                </Container>
            </Box>

            {/* Main Content */}
            <Container maxWidth="lg">
                {/* Our Story Section */}
                <Box sx={{ mb: 8 }}>
                    <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
                        Our Story
                    </Typography>
                    <Paper elevation={3} sx={{ p: 4, backgroundColor: '#f8f9fa' }}>
                        <Typography variant="body1" paragraph>
                            LoanSmart emerged from a simple yet powerful idea: to revolutionize
                            how financial institutions make lending decisions. We recognized that traditional loan
                            assessment methods were often time-consuming, subjective, and prone to human bias.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our team of financial experts and AI specialists came together to develop a
                            cutting-edge solution that combines advanced machine learning algorithms with
                            traditional financial metrics. The result is a powerful, accurate, and unbiased
                            loan assessment tool that's transforming the lending industry.
                        </Typography>
                    </Paper>
                </Box>

                {/* Our Mission Section */}
                <Box sx={{ mb: 8 }}>
                    <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
                        Our Mission
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}
                            >
                                <BusinessIcon sx={{ fontSize: 40, color: '#3498db', mb: 2 }} />
                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    Innovation
                                </Typography>
                                <Typography variant="body1">
                                    Continuously pushing the boundaries of AI technology to improve
                                    financial decision-making processes.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}
                            >
                                <SchoolIcon sx={{ fontSize: 40, color: '#27ae60', mb: 2 }} />
                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    Education
                                </Typography>
                                <Typography variant="body1">
                                    Empowering financial institutions with the knowledge and tools
                                    to make better lending decisions.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}
                            >
                                <CodeIcon sx={{ fontSize: 40, color: '#e74c3c', mb: 2 }} />
                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    Technology
                                </Typography>
                                <Typography variant="body1">
                                    Developing state-of-the-art AI solutions that set new standards
                                    in loan assessment accuracy.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

                {/* Technology Section */}
                <Box sx={{ mb: 8 }}>
                    <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
                        Our Technology
                    </Typography>
                    <Paper elevation={3} sx={{ p: 4, backgroundColor: '#f8f9fa' }}>
                        <Typography variant="body1" paragraph>
                            At the heart of LoanSmart is our advanced Decision Tree model, which processes
                            and analyzes vast amounts of financial data in real-time. Our AI system considers
                            hundreds of variables, from payment history to market trends, providing a comprehensive
                            assessment of loan applications.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Key features of our technology include:
                        </Typography>
                        <Box component="ul" sx={{ pl: 4 }}>
                            <Typography component="li" sx={{ mb: 1 }}>
                                Real-time data processing and analysis
                            </Typography>
                            <Typography component="li" sx={{ mb: 1 }}>
                                Advanced pattern recognition algorithms
                            </Typography>
                            <Typography component="li" sx={{ mb: 1 }}>
                                Continuous learning and adaptation
                            </Typography>
                            <Typography component="li">
                                99.9% system reliability and uptime
                            </Typography>
                        </Box>
                    </Paper>
                </Box>

                {/* Contact Section */}
                <Box>
                    <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
                        Get in Touch
                    </Typography>
                    <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                        <Typography variant="body1" paragraph>
                            Interested in learning more about how LoanSmart can transform your
                            lending processes? We'd love to hear from you.
                        </Typography>
                        <Typography variant="body1">
                            Email: contact@loansmart.com
                        </Typography>
                        <Typography variant="body1">
                            Phone: (555) 123-4567
                        </Typography>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
};

export default AboutPage;
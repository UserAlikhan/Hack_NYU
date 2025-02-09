import { Box, Container, Grid, Typography, Link, Divider, Icon } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#2c3e50',
                color: 'white',
                py: 6,
                width: '100%',
                position: 'relative',
                marginTop: 'auto',
                left: 0,
                right: 0
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    px: { xs: 2, sm: 4, md: 8 },
                    width: '100%',
                    margin: 0,
                    maxWidth: '100% !important'
                }}
            >
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Icon sx={{ fontSize: 32, mr: 1 }} />
                            <Typography variant="h6" component="div">
                                LoanSmart
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Empowering financial decisions through AI-driven credit assessment
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Quick Links
                        </Typography>
                        <Link href="/about" color="inherit" display="block" sx={{ mb: 1 }}>
                            About Us
                        </Link>
                        <Link href="/contact" color="inherit" display="block" sx={{ mb: 1 }}>
                            Contact
                        </Link>
                        <Link href="/privacy" color="inherit" display="block" sx={{ mb: 1 }}>
                            Privacy Policy
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Contact Info
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            Email: info@loansmart.com
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            Phone: (555) 123-4567
                        </Typography>
                        <Typography variant="body2">
                            Address: New York, NY 10012
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 3, backgroundColor: 'rgba(255,255,255,0.1)' }} />

                <Typography variant="body2" align="center" sx={{ pt: 2 }}>
                    © {new Date().getFullYear()} LoanSmart. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;
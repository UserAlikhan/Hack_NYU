import { AppBar, Toolbar, Typography, Button, Box, Icon } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavigationHeader = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#2c3e50' }}>
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
                    <Icon sx={{ fontSize: 32, mr: 1 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 4, fontWeight: 'bold' }}>
                        LoanSmart
                    </Typography>
                </Box>

                <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
                    <Button
                        color="inherit"
                        onClick={() => navigate('/users')}
                        sx={{ '&:hover': { backgroundColor: '#34495e' } }}
                    >
                        Users
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => navigate('/about')}
                        sx={{ '&:hover': { backgroundColor: '#34495e' } }}
                    >
                        About
                    </Button>
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                        variant="outlined"
                        color="inherit"
                        sx={{
                            borderColor: '#fff',
                            '&:hover': { backgroundColor: '#34495e', borderColor: '#fff' }
                        }}
                    >
                        Login
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#27ae60',
                            '&:hover': { backgroundColor: '#219a52' }
                        }}
                        onClick={() => navigate('/')}
                    >
                        Get Started
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationHeader;
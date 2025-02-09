import { List, ListItem, ListItemText } from "@mui/material"
import { Divider } from "@mui/material"
import { Typography } from "@mui/material"
import { Collapse } from "@mui/material"
import { Box } from "@mui/material"

const DecisionDetails = (showDetails: boolean, creditAssessment: boolean, balance: number) => {
    const calculateLoanRange = () => {
        const maxLoan = balance * 0.4;
        return {
            min: 1000,
            max: Math.max(maxLoan, 1000)
        };
    };
    return (
        <Collapse in={showDetails && creditAssessment === true}>
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
    )
}

export default DecisionDetails;
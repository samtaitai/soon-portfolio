import { Box, Typography, Container, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) => theme.palette.background.paper,
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Soyon. All rights reserved.
                    </Typography>
                    <Box>
                        <IconButton color="inherit" aria-label="GitHub" href="https://github.com/samtaitai" target="_blank">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton color="inherit" aria-label="LinkedIn" href="https://www.linkedin.com/in/soyonlee/" target="_blank">
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;

import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center" sx={{ minHeight: '80vh' }}>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
                            Hi, I'm Soyon
                        </Typography>
                        <Typography variant="h1" sx={{ mb: 2, background: 'linear-gradient(45deg, #bb86fc 30%, #03dac6 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Full Stack Developer
                        </Typography>
                        <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 4 }}>
                            Building modern, scalable, and responsive web applications with the latest technologies.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button
                                variant="contained"
                                size="large"
                                color="primary"
                                onClick={() => navigate('/projects')}
                            >
                                View Work
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                color="primary"
                                onClick={() => navigate('/about')}
                            >
                                About Me
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                    {/* Placeholder for Hero Image or 3D Element */}
                    <Box
                        sx={{
                            width: '100%',
                            height: 400,
                            background: 'radial-gradient(circle, rgba(187,134,252,0.1) 0%, rgba(18,18,18,0) 70%)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography variant="h6" color="primary" sx={{ opacity: 0.5 }}>
                            [Interactive Visual]
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;

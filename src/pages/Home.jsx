import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="xl" sx={{ position: 'relative', overflow: 'hidden' }}>
            {/* Decorative Background Tags */}
            <Box sx={{ position: 'absolute', top: 40, left: 20, opacity: 0.1, typography: 'fontFamilyMonospace', fontSize: '1.5rem', userSelect: 'none', zIndex: 0 }}>
                &lt;html&gt;
                <br />
                &nbsp;&nbsp;&lt;body&gt;
            </Box>
            <Box sx={{ position: 'absolute', bottom: 40, left: 20, opacity: 0.1, typography: 'fontFamilyMonospace', fontSize: '1.5rem', userSelect: 'none', zIndex: 0 }}>
                &nbsp;&nbsp;&lt;/body&gt;
                <br />
                &lt;/html&gt;
            </Box>

            <Grid container spacing={4} alignItems="center" sx={{ minHeight: '90vh', position: 'relative', zIndex: 1 }}>
                <Grid item xs={12} md={7}>
                    <Box sx={{ textAlign: 'left', pl: { md: 8 } }}>
                        <Typography variant="h6" color="secondary.main" sx={{ fontFamily: 'monospace', mb: 2, display: 'flex', alignItems: 'center', opacity: 0.8 }}>
                            &lt;h1&gt;
                        </Typography>

                        <Typography variant="h1" sx={{
                            fontSize: { xs: '3.5rem', md: '5rem' },
                            mb: 1,
                            color: 'text.primary',
                            lineHeight: 1.1
                        }}>
                            Hi, I'm <Box component="span" sx={{ color: 'primary.main' }}>Soyon</Box>
                        </Typography>

                        <Typography variant="h3" sx={{
                            mb: 3,
                            background: 'linear-gradient(90deg, #00F0FF 0%, #FF0055 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontFamily: 'monospace',
                            fontSize: { xs: '1.5rem', md: '2rem' }
                        }}>
                            Full Stack Developer
                        </Typography>

                        <Typography variant="h6" color="secondary.main" sx={{ fontFamily: 'monospace', mb: 4, opacity: 0.8 }}>
                            &lt;/h1&gt;
                        </Typography>

                        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mb: 5, fontFamily: 'monospace', fontSize: '1.1rem', borderLeft: '2px solid #333', pl: 3 }}>
                            // Building modern, scalable, and responsive web applications.
                            <br />
                            const status = "Open to work";
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 3 }}>
                            <Button
                                size="large"
                                onClick={() => navigate('/projects')}
                                sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
                            >
                                View Work
                            </Button>
                            <Button
                                size="large"
                                color="secondary"
                                onClick={() => navigate('/about')} // Treating About as Contact/Info
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    borderColor: 'secondary.main',
                                    color: 'secondary.main',
                                    '&:hover': {
                                        borderColor: 'secondary.main',
                                        bgcolor: 'secondary.main',
                                        color: 'black'
                                    }
                                }}
                            >
                                About Me
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' }, position: 'relative' }}>
                    {/* Abstract Tech Swirl/Circle behind profile */}
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 500,
                        height: 500,
                        background: 'conic-gradient(from 0deg at 50% 50%, #00F0FF 0deg, transparent 60deg, #FF0055 180deg, transparent 240deg, #00F0FF 360deg)',
                        borderRadius: '50%',
                        opacity: 0.1,
                        animation: 'spin 10s linear infinite',
                        zIndex: -1,
                        '@keyframes spin': {
                            '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
                            '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }
                        }
                    }} />

                    <Box sx={{
                        position: 'relative',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: -5,
                            borderRadius: '50%',
                            background: 'linear-gradient(45deg, #00F0FF, #FF0055)',
                            zIndex: 0,
                            animation: 'pulse 3s ease-in-out infinite'
                        },
                        '@keyframes pulse': {
                            '0%, 100%': { opacity: 0.5 },
                            '50%': { opacity: 0.8 }
                        }
                    }}>
                        <Box
                            component="img"
                            src="/profile-picture.png"
                            alt="Soyon"
                            sx={{
                                width: 350,
                                height: 350,
                                objectFit: 'cover',
                                borderRadius: '50%',
                                position: 'relative',
                                zIndex: 1,
                                border: '4px solid #111',
                                filter: 'grayscale(100%) contrast(120%)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    filter: 'grayscale(0%)',
                                    transform: 'scale(1.02)'
                                }
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;

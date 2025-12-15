import { Typography, Container, Box, Paper, Grid, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const About = () => {
    const skills = ['React', 'JavaScript', 'Material UI', 'Node.js', 'Playwright', 'Git', 'Azure', 'CI/CD'];

    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 8 }}>
                <Typography variant="h2" gutterBottom color="primary">
                    About Me
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', maxWidth: 800 }}>
                    I am a passionate Full Stack Developer with a focus on building efficient and user-friendly web applications.
                    With a strong foundation in modern web technologies, I love transforming ideas into reality through code.
                </Typography>

                <Box sx={{ mt: 3, mb: 6 }}>
                    <Button
                        variant="outlined"
                        size="large"
                        startIcon={<DownloadIcon />}
                        href="/Michaela_Lee_Resume_v2.pdf"
                        download
                        sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
                    >
                        Download Resume
                    </Button>
                </Box>

                <Box sx={{ mt: 6 }}>
                    <Typography variant="h4" gutterBottom>
                        Skills & Technologies
                    </Typography>
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        {skills.map((skill) => (
                            <Grid item key={skill}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        px: 3,
                                        py: 1,
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: 2,
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            color: 'primary.main',
                                        }
                                    }}
                                >
                                    <Typography variant="body1" fontWeight={500}>
                                        {skill}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default About;

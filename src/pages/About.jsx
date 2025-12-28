import { Typography, Container, Box, Paper, Grid, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const About = () => {
    const skills = [
        'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Vue.js', 'React.js', 'Next.js', 'Bootstrap',
        'C#', '.NET Framework', 'Node.js', 'Python', 'MSSQL Server', 'Oracle SQL', 'ETL',
        'RESTful APIs', 'Serverless Functions',
        'AKS', 'ACR', 'Azure Functions', 'Azure Static Web Apps', 'Docker', 'Kubernetes',
        'Azure DevOps', 'GitHub Actions', 'Terraform', 'ArgoCD', 'Git', 'Google Gemini API',
        'Azure AI Agent', 'Azure App Service'
    ];

    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 8 }}>
                <Typography variant="h2" gutterBottom color="primary">
                    About Me
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', maxWidth: 800 }}>
                    I am a dedicated <strong>Full-Stack Developer</strong> with two years of experience engineering high-impact solutions for Canada's largest retailer. My expertise lies in bridging the gap between legacy infrastructure and modern technology; I specialize in migrating complex systems to cloud-native architectures using <strong>C#/.NET</strong>, <strong>Vue.js</strong>, and <strong>Azure</strong>.
                    <br /><br />
                    I don't just write code—I solve business problems. With a background in Business Administration, I bring a unique perspective to development, ensuring that every application I build—from payroll processing for 30,000 drivers to real-time logistics tracking—directly drives operational efficiency. Whether I am automating manual workflows to save hundreds of staff hours, I am passionate about building software that is scalable, resilient, and user-centric.
                </Typography>

                <Box sx={{ mt: 3, mb: 6 }}>
                    <Button
                        variant="outlined"
                        size="large"
                        startIcon={<DownloadIcon />}
                        href="/Michaela_Lee_Resume_v3.pdf"
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

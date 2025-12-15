import { Typography, Container, Grid, Card, CardContent, CardActions, Button, CardMedia, Chip, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
    {
        title: 'Portfolio Website',
        description: 'A responsive static portfolio built with React and Material UI. Showcases my work and skills with a modern dark theme.',
        image: 'https://source.unsplash.com/random/800x600/?code,laptop',
        tags: ['React', 'MUI', 'Vite', 'CI/CD'],
        repo: 'https://github.com/soyon/portfolio',
        demo: 'https://soyon.dev',
    },
    {
        title: 'E-Commerce Dashboard',
        description: 'A comprehensive dashboard for managing products, orders, and users. Features real-time data visualization and dark mode.',
        image: 'https://source.unsplash.com/random/800x600/?dashboard,tech',
        tags: ['Next.js', 'Typescript', 'Tailwind', 'Supabase'],
        repo: '#',
        demo: '#',
    },
    {
        title: 'Task Management API',
        description: 'RESTful API for task management with authentication, rate limiting, and comprehensive test coverage.',
        image: 'https://source.unsplash.com/random/800x600/?server,cloud',
        tags: ['Node.js', 'Express', 'PostgreSQL', 'Jest'],
        repo: '#',
        demo: '#',
    },
];

const Projects = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 8 }}>
                <Typography variant="h2" gutterBottom color="primary">
                    Projects
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" paragraph sx={{ mb: 6 }}>
                    Here are some of the projects I've worked on.
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project) => (
                        <Grid item key={project.title} xs={12} md={4}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                    }
                                }}
                            >
                                <CardMedia
                                    component="div" // utilizing div for pattern if image fails, or use 'img' if real images
                                    sx={{
                                        height: 200,
                                        backgroundColor: 'rgba(255,255,255,0.05)', // Fallback
                                        backgroundImage: `url(${project.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2" fontWeight={600}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {project.tags.map((tag) => (
                                            <Chip key={tag} label={tag} size="small" variant="outlined" />
                                        ))}
                                    </Box>
                                </CardContent>
                                <CardActions sx={{ p: 2, pt: 0 }}>
                                    <Button size="small" startIcon={<GitHubIcon />} href={project.repo} target="_blank">
                                        Code
                                    </Button>
                                    <Button size="small" startIcon={<LaunchIcon />} href={project.demo} target="_blank">
                                        Demo
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Projects;

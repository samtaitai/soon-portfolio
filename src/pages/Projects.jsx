import { useState } from 'react';
import { Typography, Container, Grid, Card, CardContent, CardActions, Button, CardMedia, Chip, Box, Modal, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';

const projects = [
    {
        title: 'Document Processor',
        description: 'An AI-powered cloud-based document processing system that automatically extracts, analyzes, and provides intelligent insights from uploaded documents using Google Gemini AI.',
        image: '/doc-processor-screenshot.png',
        tags: ['Azure Function', 'Vue.js', 'Node.js', 'Google Gemini AI'],
        repo: 'https://github.com/samtaitai/document_processor',
        demo: 'https://proud-wave-0731f330f.3.azurestaticapps.net',
    },
    {
        title: 'Argo CD Example Apps',
        description: 'A comprehensive demonstration repository showcasing ArgoCD functionality, including GitOps workflows, monitoring with Prometheus and Grafana, RBAC implementation, and progressive delivery strategies using Argo Rollouts.',
        image: '/argo-cd-logo.png',
        tags: ['Argo CD', 'Kubernetes', 'GitOps', 'Prometheus', 'Grafana'],
        repo: 'https://github.com/samtaitai/argocd-example-apps',
        demo: null,
    }
];

const Projects = () => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleOpen(project.image)}
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
                                    {project.demo && (
                                        <Button size="small" startIcon={<LaunchIcon />} href={project.demo} target="_blank">
                                            Demo
                                        </Button>
                                    )}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="image-modal"
                aria-describedby="full-size-project-image"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(5px)',
                }}
            >
                <Box sx={{
                    position: 'relative',
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                    outline: 'none',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 24,
                }}>
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            color: 'white',
                            bgcolor: 'rgba(0,0,0,0.5)',
                            '&:hover': {
                                bgcolor: 'rgba(0,0,0,0.7)',
                            },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <img
                        src={selectedImage}
                        alt="Project Full Size"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '90vh',
                            display: 'block',
                        }}
                    />
                </Box>
            </Modal>
        </Container>
    );
};

export default Projects;

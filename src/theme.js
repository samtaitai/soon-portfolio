import { createTheme, alpha } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#111111', // Dark Charcoal
            paper: '#141414',
        },
        primary: {
            main: '#00F0FF', // Electric Cyan
        },
        secondary: {
            main: '#FF0055', // Neon Pink
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#666666', // Dim Grey for code comments
        },
        divider: alpha('#00F0FF', 0.12),
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 900,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontWeight: 700,
            letterSpacing: '-0.01em',
        },
        h3: {
            fontWeight: 700,
        },
        h4: {
            fontWeight: 600,
        },
        h5: {
            fontWeight: 600,
        },
        h6: {
            fontWeight: 600,
        },
        fontFamilyMonospace: '"Fira Code", "Roboto Mono", monospace',
        button: {
            fontFamily: '"Fira Code", "Roboto Mono", monospace',
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'outlined',
            },
            styleOverrides: {
                root: {
                    borderRadius: 0, // Sharp edges for brutalist look
                    textTransform: 'none',
                    borderWidth: '2px',
                    borderColor: '#00F0FF',
                    color: '#00F0FF',
                    '&:hover': {
                        backgroundColor: '#00F0FF',
                        color: '#000000',
                        borderWidth: '2px',
                        borderColor: '#00F0FF',
                    },
                },
                outlined: {
                    borderWidth: '2px',
                    borderColor: '#00F0FF',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor: '#00F0FF #111111',
                    '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                        backgroundColor: '#111111',
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                        borderRadius: 0,
                        backgroundColor: '#00F0FF',
                        minHeight: 24,
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: alpha('#111111', 0.8),
                    backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid rgba(0, 240, 255, 0.1)',
                },
            },
        },
    },
});

export default theme;

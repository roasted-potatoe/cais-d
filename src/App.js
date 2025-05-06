import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Typography, Tabs, Tab, Box } from '@mui/material';
import './App.css';


// Custom dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#1a1a1a', paper: '#1a1a1a' },
    text: { primary: '#ffffff', secondary: '#b0b0b0' },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontSize: '2.5rem', fontWeight: 300, letterSpacing: '0.02em' },
    h6: { fontSize: '1.2rem', fontWeight: 300, letterSpacing: '0.01em' },
    body1: { fontSize: '1rem', fontWeight: 300, letterSpacing: '0.01em' },
  },
});


// Tab Panel Component
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function App() {
  const [tabValue, setTabValue] = useState(0);


  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Header */}
        <Typography variant="h6" align="center" sx={{ mb: 2, color: '#b0b0b0' }}>
          C AI S
        </Typography>
        <Typography variant="h1" align="center" sx={{ mb: 4 }}>
          Revolutionizing construction with bespoke artificial intelligence innovations
        </Typography>


        {/* Tabs Navigation */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            textColor="inherit"
            indicatorColor="primary"
            sx={{ '& .MuiTab-root': { color: '#b0b0b0', fontWeight: 300 } }}
          >
            <Tab label="AI Automations" />
            <Tab label="Integrations" />
            <Tab label="Custom Tools" />
          </Tabs>
        </Box>


        {/* Tab Content */}
        <TabPanel value={tabValue} index={0}>
          <Typography variant="body1" align="center">
            Streamline your construction workflows with AI-driven automations tailored to your business processes. From project management to resource allocation, we optimize efficiency with precision.
          </Typography>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Typography variant="body1" align="center">
            Seamlessly integrate our AI solutions with your existing systems—CRMs, ERPs, and more. We ensure compatibility and scalability for your construction operations.
          </Typography>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <Typography variant="body1" align="center">
            Get bespoke AI tools designed specifically for your construction needs—whether it’s predictive analytics, cost estimation, or site monitoring, we build what you envision.
          </Typography>
        </TabPanel>


        {/* Footer */}
        <Typography variant="body2" align="center" sx={{ mt: 6, color: '#b0b0b0' }}>
          © 2023 Custom AI Solutions for Construction Industry. All rights reserved.
        </Typography>
      </Container>
    </ThemeProvider>
  );
}


export default App;
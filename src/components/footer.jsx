import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#196bc7', color: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Entre em contato</Typography>
            <Typography variant="body2">(19) 99187-4342</Typography>
            <Typography variant="body2">contato@escoladnc.com.br</Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <img src="/logo.png" alt="Company Logo" style={{ width: '4rem', marginBottom: '8px' }} />
            <Typography variant="h6">Dashboard DNC</Typography>
            <Typography variant="body2">&copy; 2024 DNC Treinamentos</Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="end">
            <Typography variant="h6" mt={1}>Venha nos conhecer</Typography>
            <Typography variant="body2">R. Justino Cobra, 61</Typography>
            <Typography variant="body2">Vila Ema, São José dos Campos - SP</Typography>
            <Typography variant="body2">12243-030</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

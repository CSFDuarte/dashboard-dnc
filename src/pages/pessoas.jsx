import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const People = () => {
  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gestão de Desenvolvedores
        </Typography>
        {/* CRUD AQUI */}
      </Box>
    </Container>
  );
};

export default People;

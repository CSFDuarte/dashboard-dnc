import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CreatePerson = () => {
  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Formulário de Cadastro
        </Typography>
        {/* FORM AQUI */}
      </Box>
    </Container>
  );
};

export default CreatePerson;

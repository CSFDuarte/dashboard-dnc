import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Paper, Typography, Grid, MenuItem } from '@mui/material';
import usePeople, { possibleSpecialties } from '@/contexts/peopleContext';

const Cadastro = ({ onSubmit }) => {
  const { handleSubmit, control, reset } = useForm();
  const { people, setPeople } = usePeople();

  const handleAddDeveloper = (newDeveloper) => {
    setPeople([...people, {id: people.length + 1, ...newDeveloper}]);
    reset();
  };

  return (
    <Paper style={{ padding: '20px', maxWidth: '600px', margin: '20px auto' }}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Desenvolvedor
      </Typography>
      <form onSubmit={handleSubmit(handleAddDeveloper)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Nome" variant="outlined" fullWidth required />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="experience"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Experiência (anos)"
                  variant="outlined"
                  type="number"
                  fullWidth
                  required
                  defaultValue={0}
                  onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="specialties"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Especialidades"
                  variant="outlined"
                  select
                  fullWidth
                  required
                  SelectProps={{ multiple: true }}
                >
                  {possibleSpecialties.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} label="Cidade" variant="outlined" fullWidth required />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Cadastro;

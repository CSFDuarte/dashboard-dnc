import React, { useContext } from 'react';
import usePeople, { PeopleContext } from '../contexts/peopleContext';
import { Grid, Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import Cadastro from './cadastro';

const Pessoas = () => {
  const { people, setPeople } = usePeople();

  const handleAddDeveloper = (newDeveloper) => {
    setPeople([...people, newDeveloper]);
  };

  return (
    <Grid container spacing={2} style={{ padding: '20px' }}>
      <Grid item xs={12} md={6}>
        <Cadastro onSubmit={handleAddDeveloper} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Lista de Desenvolvedores
          </Typography>
          <List>
            {people.map((person, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText
                    primary={person.name}
                    secondary={`Experiência: ${person.experience} anos, Especialidades: ${person.specialties.join(', ')}`}
                  />
                </ListItem>
                {index < people.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Pessoas;

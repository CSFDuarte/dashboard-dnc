import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { PeopleContext } from '../contexts/peopleContext';

const InfoSection = () => {
  const { people } = useContext(PeopleContext);

  const { totalPeople, uniqueSpecialties, averageExperience, uniqueCities } = {
    totalPeople: people.length,
    uniqueSpecialties: [...new Set(people.flatMap(person => person.specialties))].length,
    averageExperience: (people.reduce((acc, person) => acc + person.experience, 0) / people.length).toFixed(1),
    uniqueCities: [...new Set(people.flatMap(person => person.city))].length,
  }

  const infoCards = [
    { title: 'Total de desenvolvedores', value: totalPeople },
    { title: 'Especialidades', value: uniqueSpecialties },
    { title: 'Experiência média (anos)', value: averageExperience },
    { title: 'Cidades', value: uniqueCities },
  ];

  return (
    <>
      {infoCards.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper elevation={3} style={styles.card}>
            <Typography variant="h6">{card.title}</Typography>
            <Typography variant="h4">{card.value}</Typography>
          </Paper>
        </Grid>
      ))}
    </>
  );
};

const styles = {
  card: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default InfoSection;

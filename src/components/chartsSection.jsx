import React, { useContext } from 'react';
import { PeopleContext } from '../contexts/peopleContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ChartsSection = () => {
  const { people } = useContext(PeopleContext);

  const experienceGroups = people.reduce((acc, person) => {
    const group = Math.floor(person.experience / 5) * 5;
    acc[group] = (acc[group] || 0) + 1;
    return acc;
  }, {});

  const experienceData = Object.keys(experienceGroups).map(group => ({
    'Nome': `${group}-${+group + 4} years`,
    'Quantidade': experienceGroups[group]
  }));

  const specialtyCounts = people.flatMap(person => person.specialties)
    .reduce((acc, specialty) => {
      acc[specialty] = (acc[specialty] || 0) + 1;
      return acc;
    }, {});

  const specialtyData = Object.keys(specialtyCounts).map(specialty => ({
    'Nome': specialty,
    'Quantidade': specialtyCounts[specialty]
  }));

  return (
    <>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={styles.card}>
          <Typography variant="h6">Desenvolvedores por experiência</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={experienceData}>
              <XAxis dataKey="Nome" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Quantidade" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper elevation={3} style={styles.card}>
          <Typography variant="h6">Especialidades</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={specialtyData} dataKey={false} >
              <XAxis dataKey="Nome" height={80} textAnchor="end" angle={-50} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Quantidade" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </>
  );
};

const styles = {
  card: {
    padding: '20px',
    textAlign: 'center'
  }
};

export default ChartsSection;

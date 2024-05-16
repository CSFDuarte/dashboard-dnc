import React, { useContext, useMemo } from 'react';
import { PeopleContext } from '../contexts/peopleContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ChartCard = ({ title, data, dataKey, fillColor, xAxisAngle }) => (
  <Paper elevation={3} style={{padding: '20px', textAlign: 'center'}}>
    <Typography noWrap variant="h6">{title}</Typography>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="Nome" height={60} textAnchor="end" angle={xAxisAngle} />
        <YAxis />
        <Tooltip />
        <Bar dataKey={dataKey} fill={fillColor} />
      </BarChart>
    </ResponsiveContainer>
  </Paper>
);

const ChartsSection = () => {
  const { people } = useContext(PeopleContext);

  const experienceData = useMemo(() => {
    const groups = people.reduce((acc, person) => {
      const group = Math.floor(person.experience / 5) * 5;
      acc[group] = (acc[group] || 0) + 1;
      return acc;
    }, {});

    return Object.keys(groups).map(group => ({
      'Nome': `${group}-${+group + 4} anos`,
      'Quantidade': groups[group]
    }));
  }, [people]);

  const specialtyData = useMemo(() => {
    const counts = people.flatMap(person => person.specialties)
      .reduce((acc, specialty) => {
        acc[specialty] = (acc[specialty] || 0) + 1;
        return acc;
      }, {});

    return Object.keys(counts).map(specialty => ({
      'Nome': specialty,
      'Quantidade': counts[specialty]
    })).sort((a, b) => b.Quantidade - a.Quantidade);
  }, [people]);

  return (
    <>
      <Grid item xs={12} md={4}>
        <ChartCard
          title="Desenvolvedores por experiência"
          data={experienceData}
          dataKey="Quantidade"
          fillColor="#8884d8"
          xAxisAngle={-40}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <ChartCard
          title="Especialidades"
          data={specialtyData}
          dataKey="Quantidade"
          fillColor="#82ca9d"
          xAxisAngle={-50}
        />
      </Grid>
    </>
  );
};

export default ChartsSection;

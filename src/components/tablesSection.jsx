import React, { useContext } from 'react';
import { PeopleContext } from '../contexts/peopleContext';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const TablesSection = () => {
  const { people } = useContext(PeopleContext);

  const topExperienced = people
    .sort((a, b) => b.experience - a.experience)
    .slice(0, 5);

  const specialtyCounts = people.flatMap(person => person.specialties)
    .reduce((acc, specialty) => {
      acc[specialty] = (acc[specialty] || 0) + 1;
      return acc;
    }, {});

  const topSpecialties = Object.entries(specialtyCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([specialty, count]) => ({ specialty, count }));

  const cityCounts = people.flatMap(person => person.city)
    .reduce((acc, city) => {
      acc[city] = (acc[city] || 0) + 1;
      return acc;
    }, {});

  const topCities = Object.entries(cityCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([city, count]) => ({ city, count }));

  return (
    <>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={styles.card}>
          <Typography variant="h6">Desenvolvedores mais experientes</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Experiência (anos)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topExperienced.map(person => (
                  <TableRow key={person.id} sx={{maxWidth: "20px"}}>
                    <TableCell>{person.name}</TableCell>
                    <TableCell>{person.experience}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={styles.card}>
          <Typography variant="h6">Principais especialidades</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Especialidade</TableCell>
                  <TableCell>Desenvolvedores</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topSpecialties.map((specialty, index) => (
                  <TableRow key={index}>
                    <TableCell>{specialty.specialty}</TableCell>
                    <TableCell>{specialty.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={styles.card}>
          <Typography variant="h6">Principais cidades</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Cidade</TableCell>
                  <TableCell>Desenvolvedores</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topCities.map((city, index) => (
                  <TableRow key={index}>
                    <TableCell>{city.city}</TableCell>
                    <TableCell>{city.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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

export default TablesSection;

import React, { useContext } from 'react';
import { PeopleContext } from '../contexts/peopleContext';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';

const TablesSection = () => {
  const { people } = useContext(PeopleContext);

  const topExperienced = [...people.sort((a, b) => b.experience - a.experience)]

  const specialtyCounts = people.flatMap(person => person.specialties).reduce((acc, specialty) => {
    acc[specialty] = (acc[specialty] || 0) + 1;
    return acc;
  }, {});
  

  const topSpecialties = [...Object.entries(specialtyCounts).sort(([, a], [, b]) => b - a)]
    .map(([specialty, count], id) => ({ id, specialty, count }));

  const cityCounts = people.flatMap(person => person.city).reduce((acc, city) => {
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {});

  const topCities = [...Object.entries(cityCounts)]
    .sort(([, a], [, b]) => b - a)
    .map(([city, count], id) => ({ id, city, count }));
  
  return (
    <>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={styles.card}>
          <Typography noWrap variant="h6">Desenvolvedores mais experientes</Typography>
          <DataGrid
            rows={topExperienced}
            columns={[
              { field: 'name', headerName: 'Nome', flex: 2 },
              { field: 'experience', headerName: 'Experiência (anos)', flex: 1, maxWidth: 150}
            ]}
            initialState={{ pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            }}}
            pageSizeOptions={[5, 10]}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={styles.card}>
          <Typography noWrap variant="h6">Principais especialidades</Typography>
          <DataGrid
            rows={topSpecialties}
            columns={[
              { field: 'specialty', headerName: 'Especialidade', flex: 2 },
              { field: 'count', headerName: 'Desenvolvedores', flex: 1, maxWidth: 150 }
            ]}
            initialState={{ pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            }}}
            pageSizeOptions={[5, 10]}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={styles.card}>
          <Typography noWrap variant="h6">Principais cidades</Typography>
          <DataGrid
            rows={topCities}
            columns={[
              { field: 'city', headerName: 'Cidade', flex: 2},
              { field: 'count', headerName: 'Desenvolvedores', flex: 1, maxWidth: 150 }
            ]}
            initialState={{ pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            }}}
            pageSizeOptions={[5, 10]}
          />
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

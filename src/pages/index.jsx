'use client';
import React from 'react';
import { PeopleProvider } from '../contexts/peopleContext';
import InfoSection from '../components/infoSection';
import ChartsSection from '../components/chartsSection';
import TablesSection from '../components/tablesSection';
import { Container, Grid } from '@mui/material';

const Dashboard = () => {
  return (
    <Grid container spacing={1} p={1}>
      <InfoSection />
      <ChartsSection />
      <TablesSection />
    </Grid>
  );
};

export default Dashboard;

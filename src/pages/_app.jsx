import '../styles/globals.css';
import { PeopleProvider } from '../contexts/peopleContext';
import Header from '../components/header';
import Footer from '../components/footer';
import { createTheme, ThemeProvider } from '@mui/material';

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#0a3c7d'
      }
    }
  });
  
  return (
    <PeopleProvider>
      <ThemeProvider theme={theme}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </PeopleProvider>
  );
}

export default MyApp;

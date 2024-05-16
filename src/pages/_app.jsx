import '../styles/globals.css';
import { PeopleProvider } from '../contexts/peopleContext';
import Header from '../components/header';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <PeopleProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </PeopleProvider>
  );
}

export default MyApp;

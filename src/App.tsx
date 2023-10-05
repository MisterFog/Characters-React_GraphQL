import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/error-boundary/ErrorBoundary';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Routes from './Routes';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;

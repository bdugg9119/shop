import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import {Store} from './pages';
import {Navbar} from './components';
import { CatalogProvider, ShoppingCartProvider } from './context';

function App() {
  return (
    <CatalogProvider>
    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Store />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
    </CatalogProvider>
  );
};

export default App;

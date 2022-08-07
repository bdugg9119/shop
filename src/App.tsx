import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import {About, Home, Store} from './pages';
import {Navbar} from './components';
import { CatalogProvider, ShoppingCartProvider } from './context';

function App() {
  return (
    <CatalogProvider>
    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
    </CatalogProvider>
  );
};

export default App;

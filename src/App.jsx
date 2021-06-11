import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ChakraProvider, theme, Center } from '@chakra-ui/react';
import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail';

import './App.css';
import { Footer } from './components/Footer/Footer';

function App() {  
  return (
    <div className="App">      
        <ChakraProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />              
              <Route path="/list" component={List} />
              <Route path="/detail/:id" component={Detail} />
              {/* <Route path={`${match.path}/:pokemonId`}  component={Detail} /> */}
              {/* <Route path="/detail" component={Detail} /> */}
            </Switch>
          </Router>
          <Center>
            <Footer />
          </Center>
        </ChakraProvider>
    </div>
  );
}

export default App;

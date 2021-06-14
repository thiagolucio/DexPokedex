import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ChakraProvider, theme, Center } from '@chakra-ui/react';
import Home from './pages/Home';
import List from './pages/List';
import Pokemon from './pages/Pokemon';
import Login from './components/Login/Login';

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
              <Route path='/pokemon/:id' component={Pokemon} />
              <Route path="/login" component={Login} />
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

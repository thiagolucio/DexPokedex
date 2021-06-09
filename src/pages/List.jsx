import React from 'react';
import { Box, Button, Grid, Container, SimpleGrid } from '@chakra-ui/react';
import { Bar } from '../components/Bar/Bar';
import Search from '../components/Search/Search';
import Card from '../components/Card/Card';
import { Footer } from '../components/Footer/Footer';
import Pokedex from '../components/Pokedex/Pokedex';

const List = () => {
  return (
    <>
      <Bar />
      <Pokedex/>      
      <Search />
      <SimpleGrid  columns={[1, null, 4]} spacingX="40px" spacingY="20px" p={4}>        
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
      </SimpleGrid>
      <Footer />
    </>
  );
};

export default List;

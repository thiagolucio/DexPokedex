import { Container, Text } from '@chakra-ui/layout';
import React from 'react';

const Pokedex = () => {
  return (
    <Container maxW="container.xl" centerContent h="250" bg="gray.100" p={4}>
      <Text fontSize="20px" color="tomato">
        Pokedex
      </Text>
      
    </Container>
  );
};

export default Pokedex;

import React from 'react';
import { Container, Grid, Box } from '@chakra-ui/react';

const Detail = () => {
  <Container>
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <Box w="100%" h="10" bg="blue.500" />
      <Box w="100%" h="10" bg="blue.500" />
      <Box w="100%" h="10" bg="blue.500" />
      <Box w="100%" h="10" bg="blue.500" />
      <Box w="100%" h="10" bg="blue.500" />
    </Grid>
  </Container>
};

export default Detail;

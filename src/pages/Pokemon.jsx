import React, { useState, useEffect } from 'react';
import { getPokemon } from '../services/api';
import { useLocation } from 'react-router-dom';
import { Bar } from '../components/Bar/Bar';
import {
  Box,
  Center,
  Circle,
  Heading,
  Badge,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Container
} from '@chakra-ui/react';

// import { GiLifeBar } from 'react-icons/gi';

const Pokemon = () => {
  const location = useLocation();

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon(location.pathname).then((data) => {
      setPokemon(data);
      console.log(data);
    });
  }, [location.pathname]);

  const { id, name, height, weight, base_experience } = pokemon;

  return (
    <>
    <Bar/>
    <SimpleGrid
      columns={1}
      spacing={4}
      p={5}
      
      minChildWidth="370"
      width="100%"
    >
      <Box height="40px" mt={5}>
        <Heading className="captionLetter text-center">{name}</Heading>
      </Box>
      <Box>
        <Center>
          <Image
            className="flip-in-ver-left"
            boxShadow="md"
            borderRadius="full"
            boxSize="300px"
            bg="white"
            m={5}
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            alt="Pokemon Image"
          />
        </Center>
      </Box>
      <Box>
        <Center>
          <Stack direction={['column', 'row']} spacing="24px">
            {pokemon.stats &&
              pokemon.stats.map((stat, index) => {
                return (
                  <Box height="80px" key={index} p={5}>
                    <Center>
                      <VStack>
                        <Badge ml="1" fontSize="0.8em" variant="subtle" colorScheme="pink">
                          <Text fontSize="md" fontWeight="bold">
                            {stat['stat']['name']}
                          </Text>
                        </Badge>
                        <Circle size="60px" bgGradient="linear(to-l, #7928CA,#FF0080)" color="gray.50">
                          <Text fontSize="xl">
                            <b>{stat.base_stat}</b>
                          </Text>
                        </Circle>
                      </VStack>
                    </Center>
                  </Box>
                );
              })}
          </Stack>
        </Center>
        <Container mt={100} maxW="container.lg">
          <Tabs isFitted variant="unstyled" bgGradient="linear(to-l, #7928CA,#FF0080)" >
            <TabList mb="1em" bgGradient="linear(to-l, #7928CA,#FF0080)" >
              <Tab m={1}>Informations</Tab>
              <Tab>Abilities</Tab>
              <Tab>Pokecard</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SimpleGrid columns={[2, null, 3]} spacing={10} minChildWidth="300px" className="text-center">
                  <Box bg="white" color="pink.800" height="60px">   
                    <Text fontSize="xl" fontWeight="bold">Number</Text>
                    <Text fontSize="xl" fontWeight="bold">
                      {id}
                    </Text>
                  </Box>
                  <Box bg="white" color="pink.800" height="60px">                    
                    <Text fontSize="xl" fontWeight="bold">Weight</Text>
                    <Text fontSize="xl" fontWeight="bold">
                      {weight}
                    </Text>
                  </Box>
                  <Box bg="white" color="pink.800" height="60px">
                    <Text fontSize="xl" fontWeight="bold">Height</Text>
                    <Text fontSize="xl" fontWeight="bold">
                      {height}
                    </Text>                    
                  </Box>
                  <Box bg="white" color="pink.800" height="60px">
                      <Text fontSize="xl" fontWeight="bold">Base XP</Text>
                    <Text fontSize="xl" fontWeight="bold">
                      {base_experience}
                    </Text>
                  </Box>
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid columns={[2, null, 3]} spacing={10} minChildWidth="300px" className="text-center">
                  {pokemon.abilities &&
                    pokemon.abilities.map((ability, index) => {
                      return (
                        <Box bg="purple" height="40px" key={index}>
                          <Heading as="h2" fontSize="xl" fontWeight="bold" mt={2}>
                            {ability['ability']['name']}
                          </Heading>
                        </Box>
                      );
                    })}
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid columns={[2, null, 3]} spacing={10} minChildWidth="300px" className="text-center">
                    {pokemon.types && pokemon.types.map((type, index) => {
                      return (
                        <Box bg="purple" height="40px" key={index}>
                          <Heading as="h2" fontSize="xl" fontWeight="bold" mt={2}>
                            {type['type']['name']}
                          </Heading>
                        </Box>
                      );
                    })}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
      <Box height="80px"></Box>
      <Box height="80px"></Box>
    </SimpleGrid>
    </>
  );
};

export default Pokemon;

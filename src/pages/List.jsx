import React, { useEffect, useState } from 'react';
import { Center, Container, IconButton, Input, InputGroup, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { Bar } from '../components/Bar/Bar';

import Card from '../components/Card/Card';
import Pokedex from '../components/Pokedex/Pokedex';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

import '../App.css';

import { getPokemons, getMorePokemons } from '../services/apipokemons';

const List = () => {
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(1);

  // @TODO passar paginacao para https://chakra-ui.com/docs/hooks/use-controllable
  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  const prevButton = () => {
    getMorePokemons(count - 11).then((data) => {
      setPokemons(data);
      setCount((prevCount) => {
        return prevCount - 11;
      });
    });
  };

  const nextButton = () => {
    getMorePokemons(count + 9).then((data) => {
      setPokemons(data);
      setCount((prevCount) => {
        return prevCount + 10;
      });
    });
  };


const[searchPokemon, setSearchPokemon] = useState('');


  return (
    <>
      <Bar />
      <Pokedex />     
      <Container maxW="container.lg" mt={6} mb={5}>
        <Text fontSize="30px" color="gray.600">Pesquisar Pokemon</Text>
        <Center>
          <InputGroup size="lg">
            <Input
              pr="4.5rem"
              borderColor="pink.500"
              focusBorderColor="pink.500"
              type="text"
              border="2px"
              placeholder="Digite o nome do Pokemon"                           
              onChange={event => {setSearchPokemon(event.target.value)}}
            />
          </InputGroup>
        </Center>
      </Container>
      <Center>
        {!pokemons['results'] ? (
          <Spinner size="xl" color="pink.500" />
        ) : (
          <SimpleGrid columns={[1, null, 4]} spacingX="40px" spacingY="20px" p={4}>
            {pokemons['results'] &&
              // eslint-disable-next-line array-callback-return
              pokemons['results'].filter((val) => {
                if (searchPokemon === "") {
                  return val
                } else if (val.name.toLowerCase().includes(searchPokemon.toLocaleLowerCase())) {
                  return val
                } 
              }).map((pokemon, index) => {
                return <Card key={index} {...pokemon} id={count + index} />;
              })}
          </SimpleGrid>
        )}
      </Center>
      <Center m={8}>
        <SimpleGrid columns={2} spacing={10}>
          <IconButton
            bg="#FF0080"
            w="200px"
            isRound="true"
            aria-label="Página Anterior"
            size="lg"
            icon={<GrLinkPrevious size="24px" />}
            onClick={prevButton}
          />
          <IconButton
            bg="#FF0080"
            w="200px"
            isRound="true"
            aria-label="Próxima Página"
            size="lg"
            icon={<GrLinkNext size="24px" />}
            onClick={nextButton}
          />
        </SimpleGrid>
      </Center>
    </>
  );
};

export default List;

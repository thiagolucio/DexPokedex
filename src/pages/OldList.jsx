import React, { useEffect, useState } from 'react';
import { Center, IconButton, SimpleGrid, Spinner } from '@chakra-ui/react';
import { Bar } from '../components/Bar/Bar';
import Search from '../components/Search/Search';
import Card from '../components/Card/Card';
import Pokedex from '../components/Pokedex/Pokedex';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

import '../App.css';

import { getPokemons, getMorePokemons } from '../services/apipokemons';

const List = () => {
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(1);

  // @TODO passar paginacao para https://chakra-ui.com/docs/hooks/use-controllable

  /* Use effect to get data wainting */
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

  return (
    <>
      <Bar />
      <Pokedex />
      <Search />
      <Center>
        {!pokemons['results'] ? (
          <Spinner size="xl" color="pink.500" />
        ) : (
          <SimpleGrid columns={[1, null, 4]} spacingX="40px" spacingY="20px" p={4}>
            {pokemons['results'] &&
              pokemons['results'].map((pokemon, index) => {
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

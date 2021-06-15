import React, { useEffect, useState } from 'react';
import { Center, IconButton, SimpleGrid, Spinner } from '@chakra-ui/react';
import { Bar } from '../components/Bar/Bar';
import Search from '../components/Search/Search';
import Card from '../components/Card/Card';
import Pokedex from '../components/Pokedex/Pokedex';
import Confirmation from '../components/Confirmation/Confirmation'
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

import '../App.css';

import { getPokemons, getMorePokemons } from '../services/apipokemons';

const List = ({pokemonSearch}) => {
  const [pokemons, setPokemons] = useState([]);
  // const [count, setCount] = useState(1);
  const [showModalState, setShowModalState] = useState(false); 
  const [pokemonArray, setPokemonArray] = useState([]);
  const [pokemonCart, setPokemonCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [offset, setOffset] = useState(0);
  const limit = 10;  

  // @TODO passar paginacao para https://chakra-ui.com/docs/hooks/use-controllable  
  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
      // loadPokemon(limit, offset);
    });
  }, []);


  async function prevButton(limit, offset) {
    setOffset(offset - 10);
    let response = await getMorePokemons(limit, offset).then(
      (result) => result.results
    );
    setPokemonArray(pokemonArray.concat(response));
  };

  
  // const prevButton = () => {
  //   getMorePokemons(count - 11).then((data) => {
  //     setPokemons(data);
  //     setCount((prevCount) => {
  //       return prevCount - 11;
  //     });
  //   });
  // };

  // const nextButton = (limit, offset) => {
  //   getMorePokemons(count + 9).then((data) => {
  //     setPokemons(data);
  //     setCount((prevCount) => {
  //       return prevCount + 10;
  //     });
  //   });
  // };
  async function nextButton(limit, offset) {
    setOffset(offset + 10);
    let response = await getMorePokemons(limit, offset).then(
      (result) => result.results
    );
    setPokemonArray(pokemonArray.concat(response));
  };

  return (
    <>
      <Bar />
      <Pokedex
        removeStatePokemon={(pokemon, price) => removeStatePokemon(pokemon, price)}
        pokemonCart={savedPokemonCart()}
        endShop={() => endShop()}
        totalPrice={savedTotalPrice()}
      >
        {renderCards(pokemonArray)}
      </Pokedex>

      <Search
        pokemonSearch={(pokemons) => {
          setOffset(0);
          setPokemonArray([pokemons]);
        }}
      />

      <Center>
        {!pokemons['results'] ? (
          <Spinner size="xl" color="pink.500" />
        ) : (
          <SimpleGrid columns={[1, null, 4]} spacingX="40px" spacingY="20px" p={4}>
            {pokemons['results'] &&
              pokemons['results'].map((pokemon, index) => {
                return <Card key={index} {...pokemon} id={\ index} />;
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
            onClick={() => prevButton(limit, offset)}
          />
          <IconButton
            bg="#FF0080"
            w="200px"
            isRound="true"
            aria-label="Próxima Página"
            size="lg"
            icon={<GrLinkNext size="24px" />}
            onClick={() => nextButton(limit, offset)}
          />
        </SimpleGrid>
        {isShowModal()}
      </Center>
    </>
  );

  function renderCards(pokemon) {
    return pokemon.map((pokemonCurrent, index) => {
      return <Card pokemonCart={(pokemons) => { 
        sumPriceTotal(pokemon.order)
        savePokemon(pokemon)    
    }} 
        pokemon={pokemonCurrent} key={index} />;
    });
  }

  function isShowModal() {
    if (showModalState === true)
      return (<Confirmation hideModal={() => {setShowModalState(false)}}/>);
  }

  function endShop() {
    localStorage.clear()
    setPokemonCart([])
    setTotalPrice(0);
    
    setShowModalState(true)
  }

  function sumPriceTotal(value){
    localStorage.setItem('totalPrice', (parseInt(totalPrice) + value))
    setTotalPrice(savedTotalPrice())
  }

  function subTotalPrice(value){
    localStorage.setItem('totalPrice', savedTotalPrice() - value)
    setTotalPrice(savedTotalPrice())
  }

  function savedTotalPrice(){
    return localStorage.getItem('totalPrice') 

  }

  function savePokemon(pokemon){
    const savedLocalPokemon = savedPokemonCart() || []
    localStorage.setItem('pokemons', JSON.stringify(savedLocalPokemon.concat(pokemon)))
    setPokemonCart(savedPokemonCart())
  }

  function savedPokemonCart(){
    return  JSON.parse(localStorage.getItem('pokemons'))
  }

  function removeStatePokemon(pokemon, price){
    
    localStorage.setItem('pokemons', JSON.stringify(pokemon))
    subTotalPrice(price)
  }

};

export default List;

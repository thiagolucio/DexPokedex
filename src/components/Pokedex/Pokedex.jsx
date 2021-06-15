import { Container, Text } from '@chakra-ui/layout';
import { Badge, Button } from '@chakra-ui/react';
import React from 'react';

const Pokedex = ({removeStatePokemon, pokemonCart, totalPrice, endShop }) => {
  return (
    <Container maxW="container.xl" centerContent h="250" bg="gray.100" p={4}>
      <Text fontSize="20px" color="tomato">
        Pokedex
      </Text>
      <div>
        {pokemonCart ? pokemonCart.map((pokemonCurrent, index) => {
          return (
            <div
              key={index}>
                <div>
                    <div img src={pokemonCurrent.image} alt="Imagem do Pokemon" />
                    <p>{pokemonCurrent.name}</p>
                    
                </div>
                <div>
                  <strong>R${pokemonCurrent.order}</strong>
                  <div onClick={() => removePokemon(pokemonCurrent)}>X</div>
                </div>
            </div>
          );
        }): <Badge variant="solid" colorScheme="purple">Carrinho vazio...</Badge>}
      </div>
      <div>
            <h2>Total:</h2>
            <strong>R${totalPrice? totalPrice : 0}</strong>
      </div>
      <Button  bg="#FF0080" onClick={() => endShop()}>REALIZAR COMPRA</Button>
    </Container>
  );
  function removePokemon(pokemon){
    pokemonCart.splice(pokemonCart.indexOf(pokemon),1)
    removeStatePokemon(pokemonCart, pokemon.order)
  }
};

export default Pokedex;

import React from 'react';
// import { MatchPokemon } from '../../services/api'
import { Button, Container, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { CgSearch, CgSearchLoading } from 'react-icons/cg';

const Search = () => {
  const [filter, setFilter] = React.useState(false);
  const handleClick = () => setFilter(!filter);

  return (
    <Container maxW="container.lg" mt={6} mb={6}>
      <Text fontSize="30px">Pesquisar Pokemon</Text>
      <InputGroup size="lg">
        <Input
          pr="4.5rem"
          borderColor="pink.500"
          focusBorderColor="pink.500"
          type="text"
          border="2px"
          placeholder="Nome/ Número"
        />
        <InputRightElement width="6rem">
          <Button 
            size="md" 
            height="48px" 
            width="100px"            
            borderTopLeftRadius="0"
            borderBottomLeftRadius="0"
            bgGradient="linear(to-l, #7928CA,#FF0080)" 
            onClick={handleClick}
            >
          {filter ? <CgSearchLoading size={24} /> : <CgSearch size={24} />}
          </Button>          
        </InputRightElement>
      </InputGroup>
    </Container>
  );
};
export default Search;

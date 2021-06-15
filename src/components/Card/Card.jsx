import React, {useEffect} from 'react';
import { Box, Image, Badge, SkeletonCircle, SkeletonText, Center, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { getPokemon } from '../services/api';

import './Card.css';

const Card = (props) => {
  const [currentPokemon, setCurrentPokemon] = useState([])

  
  useEffect(() => {
    async function loadPokemon() {
            const {id, name, order} =  await getPokemon(props.name).then(result => result)
            setCurrentPokemon({id,
                name,
                order, 
                image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`})
    }
        loadPokemon()
}, [props])


  const Img = `https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`;
  return (
    <Link to={{ pathname: `/pokemon/${props.name}` }}>
      <Box
        bgGradient={[
          'linear(to-b, #FF0080,red.900)',
          'linear(to-b, #FF0080, gray.900)',
          'linear(to-b, #FF0080, purple.900)'
        ]}
        w="100%"
        h="300"
        p={4}
        borderRadius="6"
        variant="with-shadow"
        className="cardPokemon"
      >
        <Center>
          <Box padding={6}>
            {!Img ? (
              <Box padding="4" centerContent>
                <SkeletonCircle h={128} w={128} startColor="gray.50" endColor="gray.900" />
              </Box>
            ):(
              <Image
                src={Img}
                alt="Imagem do Pokemon"
                maxW={128}
                borderRadius="full"
                p={4}
                bgColor="gray.50"
                m={4}
                offset={10}
              />
            )}
            {!props ? (
              <Box padding="4" centerContent>
                <SkeletonText mt-3 spacing="3" startColor="gray.900" endColor="gray.50" />
              </Box>
             ):(
              <>
                <Text fontSize="xl" textAlign="center">
                  {props.id}
                </Text>
                <Badge borderRadius="full" px="6" colorScheme="gray" m={4}>
                  <Text fontSize="sm" textAlign="center">
                    {props.name}
                  </Text>
                </Badge>
              </>
             )}
          </Box>
        </Center>
      </Box>
    </Link>
  );
};

export default Card;

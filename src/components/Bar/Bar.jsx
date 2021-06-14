import React from 'react';
import { Box, Flex, HStack, Image, Spacer, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher/ColorModeSwitcher';
import { SiPokemon } from 'react-icons/si';
import Logo from './ball.gif';

export const Bar = () => {
  return (
    <Flex>
      <Box bgGradient="linear(to-l, #7928CA,#FF0080)" p={0} shadow="md" flex="1" variant="with-shadow">
        <HStack spacing="24px">
          <Box ml={3}>
            <Link to="/">
              <Image src={Logo} alt="Logo Pokedex Dextra" boxSize="60px" className="boxLogo" />
            </Link>
          </Box>
          <Box>
            <SiPokemon size={80} />
          </Box>
          <Spacer />
          <Box>
            <Link to="/login">
              <Button colorScheme="whiteAlpha" variant="solid" justifySelf="flex-end" >
                Login
              </Button>
            </Link>
          </Box>
          <Box pr={5}>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
};

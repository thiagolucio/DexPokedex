import React from 'react';
import { Box, Flex, HStack, Spacer } from '@chakra-ui/react';
import { Logo } from '../Logo/Logo';
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from '../ColorModeSwitcher/ColorModeSwitcher';
import { SiPokemon } from 'react-icons/si';

export const Bar = () => {
  return (
    <Flex>
      <Box bgGradient="linear(to-l, #7928CA,#FF0080)" p={0} shadow="md" flex="1" variant="with-shadow">
        <HStack spacing="24px">
          <Box p="4">
              <Link to="/">
                <Logo h="5vmin" pointerEvents="none" />                  
              </Link>
          </Box>
          <Box>
            <SiPokemon size={80} />
          </Box>
          <Spacer />
          <Box p="4">
            <ColorModeSwitcher justifySelf="flex-end" />
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
};

import React from 'react';
import { Button } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher/ColorModeSwitcher';

import {
  Box,
  VStack,
  Grid,
} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { SiPokemon } from 'react-icons/si';
import { Logo } from '../components/Logo/Logo';
import { Footer } from '../components/Footer/Footer';

const Home = () => {
  return (
    <Box textAlign="center" fontSize="xl" >
      <ColorModeSwitcher justifySelf="flex-end" mt="4" />
      <Grid minH="100vh" p={2}>
        <VStack spacing={2}>
          <SiPokemon size={180} />
          <div className="bounce-in-top">
            <Logo h="40vmin" pointerEvents="none" />
          </div>
          <Link to="/list">
            <Button
              size="md"
              m="4"
              height="48px"
              width="200px"
              border="1px"
              borderColor="purple.500"
              bgGradient="linear(to-l, #7928CA,#FF0080)"
            >ENTRAR
            </Button>
          </Link>
        </VStack>
        <VStack spacing={1}>
            <Footer/>
        </VStack>
      </Grid>
    </Box>
  )
}

export default Home
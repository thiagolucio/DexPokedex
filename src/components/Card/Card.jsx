import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import logo from '../Logo/logo.svg';

const Card = () => {
  return (    
        <Box  
        bgGradient={[
          "linear(to-b, #FF0080,red.900)",
          "linear(to-b, #FF0080, gray.900)",
          "linear(to-b, #FF0080, purple.900)",
        ]}
         w="100%"
         h="300" 
         p={4}         
         borderRadius="6"
         variant="with-shadow"        
         >
            <Image src={logo} alt="Logo do pokemon" w="100px"/>
            Card do Pokedex

         </Box>
  );
};

export default Card;

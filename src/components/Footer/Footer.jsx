import React from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import LogoDextra from './logodextra.png'
export const Footer = () => {
    return (
        <Flex>
            <Box w="100%">                                    
                <Image src={LogoDextra} alt="Logo Dextra" h="160px"/>                    
            </Box>
        </Flex>
    )
}

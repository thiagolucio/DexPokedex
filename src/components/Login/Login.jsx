import React, { useState } from 'react';
import {
  Image,
  Box,
  Container,
  HStack,
  Circle,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Button,
  InputLeftElement,
  Center
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { login } from '../../services/apiuser';
import AnimeLogin from './tenor.gif';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { CgPassword } from 'react-icons/cg';
import { RiLoginCircleLine } from 'react-icons/ri';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    name === 'username' ? setUsername(value) : setPassword(value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let credentials = { username: username, password: password };
    login(credentials)
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          alert('Logado!');
          // history.push('/')
        }
      })
      .catch(console.log);
    setUsername('');
    setPassword('');
  };

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Container centerContent mt={100}>
      <Center>
        <Box
          p={10}
          borderRadius="lg"
          overflow="hidden"
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          className="bg-pan-left"
        >
          <Center>
            <Box>
              <HStack>
                <Circle size="180px" bg="white" color="white">
                  <Image src={AnimeLogin} alt="login Pokedex Image" w={160} className="scale-in-right" />
                </Circle>
              </HStack>
            </Box>
          </Center>
          <Box mt={10}>
            <Stack spacing={5}>
              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                  <HiOutlineUserCircle size={20} />
                </InputLeftElement>
                <Input
                  focusBorderColor="lime"
                  type="text"
                  variant="filled"
                  onChange={onChangeHandler}
                  name="username"
                  value={username}
                  placeholder="Usuário"
                  size="lg"
                />
              </InputGroup>

              <InputGroup size="md">
                <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                  <CgPassword size={20} />
                </InputLeftElement>
                <Input
                  focusBorderColor="lime"
                  variant="filled"
                  type={show ? 'text' : 'password'}
                  onChange={onChangeHandler}
                  name="password"
                  value={password}
                  placeholder="Senha"
                  size="lg"
                />
                <InputRightElement width="4.5rem">
                  <Button h="2.0rem" mt={2} mr={1} size="md" onClick={handleClick}>
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Stack>
            <Stack  mt={4}>
            <Link to="/list">
              {/* <Button leftIcon={<RiLoginCircleLine />} isFullWidth colorScheme="teal" variant="solid" onClick={onSubmitHandler}> */}
              <Button leftIcon={<RiLoginCircleLine />} isFullWidth colorScheme="teal" variant="solid">
                Entrar
              </Button>
            </Link>
            </Stack>
          </Box>
        </Box>
      </Center>
    </Container>
  );
};

export default Login;

import { Box, Button, FormControl, FormLabel, Grid, GridItem, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import api from "../../services/api"

const Home = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await api.post('/user', {
      name, username, email, password
    })
    console.log(data)
    if (data) {
      return navigate('/')
    }
  }

  return <>
    <Box
      maxW="100vw"
      w="100%"
      h="100vh"
      bgRepeat="no-repeat"
      bgSize="cover"
      backgroundPosition="center"
      position="fixed"
      top="0"
      left="0"
    />

    <Grid
      top="0"
      left="0"
      placeItems="center"
      position="absolute"
      h="100vh"
      w="100%"
    >
      <GridItem bg="#fafafa" p="2rem" boxShadow="-4px 5px 5px 0px rgba(0,0,0,0.22);">
        <Text fontSize="24px">Cadastro</Text>
        <FormControl as="form" onSubmit={handleSubmit}>
          <FormLabel>Nome </FormLabel>
          <Input type='text' onChange={(e) => setName(e.target.value)} />
          <FormLabel>Usuário </FormLabel>
          <Input type='text' onChange={(e) => setUsername(e.target.value)} />
          <FormLabel>Email </FormLabel>
          <Input type='email' onChange={(e) => setEmail(e.target.value)} />
          <FormLabel mt="8px">Senha</FormLabel>
          <Input type='password' onChange={(e) => setPassword(e.target.value)} />
          <Button mt="8px" type="submit">Cadastrar</Button>
        </FormControl>

      </GridItem>
    </Grid>
  </>
}

export default Home
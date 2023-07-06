import { useEffect, useState } from "react"
import api from "../../services/api"
import { Box, Button, Divider, Flex, FormControl, FormLabel, Input, Select, Table, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Pedidos = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [inStock, setInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')


  const navigate = useNavigate();


  const handleAddItem = async (e) => {
    e.preventDefault()

    const post = {
      title,
      price,
      inStock,
      description,
      type
    }

    const res = await api.post(`/item`, post)
    console.log(res);
    return navigate('/itens/all')
  }


  return <Box p="24px">
    <Box maxW="500px">
      <Text fontSize="24px">Novo item</Text>
      <FormControl as="form" maxW="500px" onSubmit={handleAddItem}>
        <FormLabel>Nome</FormLabel>
        <Input onChange={(e) => setTitle(e.target.value)} flex="1" type="text" placeholder="Nome" />
        <FormLabel>Descrição</FormLabel>
        <Input onChange={(e) => setDescription(e.target.value)} flex="1" type="text" placeholder="Descrição" />
        <FormLabel>Categoria</FormLabel>
        <Input onChange={(e) => setType(e.target.value)} flex="1" type="text" placeholder="Categoria" />
        <FormLabel>Preço</FormLabel>
        <Input onChange={(e) => setPrice(Number(e.target.value))} flex="1" type="number" placeholder="Preço" />
        <FormLabel>Quantidade em estoque</FormLabel>
        <Input onChange={(e) => setInStock(Number(e.target.value))} flex="1" type="number" placeholder="Quantidade em estoque" />
        <Button bg="#00718A" color="white" _hover={{
          filter: 'brightness(.8)'
        }} mt="8px" type="submit" isDisabled={!title || !price || !inStock || !description || !type}>Adicionar</Button>

      </FormControl>

    </Box>


  </Box>
}

export default Pedidos
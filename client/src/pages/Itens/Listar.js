import { useEffect, useState } from "react"
import api from "../../services/api"
import { Box, Button, Flex, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Listar = () => {
  const [items, setItems] = useState([])

  async function handleDeleteItem(id) {
    await api.delete(`/item/${id}`)
    setItems(prev => prev.filter(pac => pac._id !== id))
  }

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/item')
      setItems(data)
    })()
  }, [])

  return <Box p="24px">
    <Flex w="425px" alignItems="center" justifyContent="space-between">
      <Text as="p" font>Inventário</Text>
      <Button>
        <Link to="/itens/add">Novo Item</Link>
      </Button>
    </Flex>

    <Box maxW="425px">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Preço</Th>
            <Th>Qtd. em estoque</Th>
            <Th>Descrição</Th>
            <Th>Tipo</Th>
            <Th>Remover</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.length > 0 && items.map(item => <Tr key={item._id}>
            <Td>{item.title}</Td>
            <Td>{item.price}</Td>
            <Td>{item.inStock}</Td>
            <Td>{item.description}</Td>
            <Td>{item.type}</Td>
            <Td><Button onClick={() => handleDeleteItem(item._id)}>Remover</Button></Td>
          </Tr>)}
        </Tbody>
      </Table>
    </Box>
  </ Box>
}

export default Listar
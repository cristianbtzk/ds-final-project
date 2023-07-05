import { useEffect, useState } from "react"
import api from "../../services/api"
import { Box, Button, Container, Flex, Tab, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Listar = () => {
  const [orders, setOrders] = useState([])

  async function handleDeleteMedicacao(id) {
    await api.delete(`/medicacao/${id}`)
    setOrders(prev => prev.filter(med => med.id !== id))
  }

  useEffect(() => {
    (async () => {
      const user = JSON.parse(localStorage.getItem('user'))
      const { data } = await api.get(`/order/user/${user._id}`)
      console.log(data)
      setOrders(data)
    })()
  }, [])

  return <>
    <Flex w="425px" alignItems="center" justifyContent="space-between">
      <Text as="p" font>Meus pedidos</Text>
      <Button>
        <Link to="/orders/add">Novo Pedido</Link>
      </Button>
    </Flex>

    <Box maxW="425px">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Data</Th>
            <Th>Valor Total</Th>
            <Th>Teste2</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.length && orders.map(order => <Tr key={order._id}>
            <Td>{new Date(order.createdAt).toLocaleDateString()}</Td>
            <Td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
              order.items.reduce((accum, item) => accum += item.price * item.amount, 0))}</Td>
            <Td>25.4</Td>
          </Tr>)}
        </Tbody>
      </Table>
    </Box>
  </>
}

export default Listar
import { useEffect, useState } from "react"
import api from "../../services/api"
import { Box, Button, Divider, Flex, FormControl, Input, Select, Table, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Pedidos = () => {
  const [cart, setCart] = useState([])
  const [items, setItems] = useState([])

  const [selectedItem, setSelectedItem] = useState(null)
  const [amount, setAmount] = useState(0)
  const navigate = useNavigate();

  const filteredItems = items.filter(item => !cart.some(cartItem => cartItem.itemId === item._id))

  async function handleFinishOrder() {
    const user = JSON.parse(localStorage.getItem('user'))

    await api.post(`/order`, {
      userId: user._id,
      items: cart
    })
    return navigate('/orders/all')
  }

  const handleAddItemToCart = async (e) => {
    e.preventDefault()
    setCart(v => [
      ...v,
      {
        title: selectedItem.title,
        price: selectedItem.price,
        amount,
        itemId: selectedItem._id
      }
    ])

    setSelectedItem(null)
    setAmount(0)
  }

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/item')
      setItems(data)
    })()
  }, [])

  return <>
    <Box maxW="500px">
      <Text fontSize="24px">Carrinho</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Item</Th>
            <Th>Quantidade</Th>
            <Th>Preço unitário</Th>
            <Th>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cart.length > 0 && cart.map(item =>
            <Tr key={item.itemId}>
              <Td>{item.title}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.price}</Td>
              <Td>{item.price * item.amount}</Td>
            </Tr>)}
        </Tbody>
      </Table>
      <Flex justifyContent="space-between" w="500px">
        <Text mt="8px">Total: R$ {cart.reduce((accum, item) => accum += item.price * item.amount, 0)}</Text>
        <Button bg="#00718A" color="white" _hover={{
          filter: 'brightness(.8)'
        }} mt="8px" onClick={handleFinishOrder} type="button" isDisabled={cart.length === 0}>Finalizar</Button>
      </Flex>
    </Box>
    <Divider my="24px" />
    <Text fontSize="24px">Novo item</Text>
    <FormControl as="form" maxW="500px" onSubmit={handleAddItemToCart}>
      <Flex>
        <Select onChange={(e) => {
          setSelectedItem(filteredItems.find(i => i._id === e.target.value))
          setAmount(0)
        }} value={selectedItem?._id} variant="flushed" outline="none" maxW="425px" placeholder="Selecione um item">
          {filteredItems.length && filteredItems.map(item => <option key={item._id} value={item._id}>{item.title}</option>)}
        </Select>
        <Input onChange={(e) => setAmount(Number(e.target.value))} flex="1" value={amount} type="number" placeholder="quantidade" />
      </Flex>
      <Button bg="#00718A" color="white" _hover={{
        filter: 'brightness(.8)'
      }} mt="8px" type="submit" isDisabled={amount === 0 || !selectedItem}>Adicionar</Button>

    </FormControl>
  </>
}

export default Pedidos
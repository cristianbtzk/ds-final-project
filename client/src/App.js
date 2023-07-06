import Routes from './routes/router';
import { ChakraProvider, Container } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Container minHeight="100vh" minWidth="100vw">
        <Routes />
      </Container>
    </ChakraProvider>
  );
}

export default App;

import Calandre from "./components/calandre/index";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <Calandre rowNumber="1" />
    </ChakraProvider>
  );
}

export default App;

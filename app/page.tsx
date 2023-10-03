import { Flex, VStack } from "@chakra-ui/react";
import MainContainer from "./components/main";
import Cart from "./components/Cart";
import Details from "./components/Details";

export default function Home() {
  return (
    <MainContainer>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Cart />
      </Flex>
    </MainContainer>
  );
}

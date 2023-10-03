import { Container } from "@chakra-ui/react";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxW="container.xl" p={0}>
      {children}
    </Container>
  );
};

export default MainContainer;

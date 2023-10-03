import {
  AspectRatio,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import VStackThemed from "./commonComponents/VStackThemed";
import TextThemed from "./commonComponents/TextThemed";

const Cart = () => {
  return (
    <VStackThemed w="full" h="full" p={10} spacing={6} alignItems="flex-start">
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Your Cart</Heading>
        <Text>
          If the price is too hard on your eyes,
          <ThemeToggleBtn />
        </Text>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src="/images/skateboard.jpg" alt="skateboard" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="center">
            <Heading size="md">Penny board</Heading>
            <TextThemed>PNYCOMP27541</TextThemed>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <TextThemed>Subtotal</TextThemed>
          <Heading size="sm">$119.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <TextThemed>Shipping</TextThemed>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <TextThemed>Taxes (estimated)</TextThemed>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <TextThemed>Total</TextThemed>
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStackThemed>
  );
};

export default Cart;

"use client";

import { useColorMode } from "@chakra-ui/react";
import Button from "./commonComponents/Button";

const ThemeToggleBtn = ({ ...props }: any) => {
  const { toggleColorMode } = useColorMode();
  return (
    <Button
      variant="link"
      colorScheme="black"
      onClick={toggleColorMode}
      {...props}
    >
      ThemeToggleBtn
    </Button>
  );
};

export default ThemeToggleBtn;

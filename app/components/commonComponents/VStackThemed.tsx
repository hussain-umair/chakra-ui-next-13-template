"use client";
import { VStack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const VStackThemed = ({
  children,
  defaultBackground = "gray.50",
  ...restProps
}: {
  children: React.ReactNode;
  w: string;
  h: string;
  p: number | string;
  spacing: number;
  alignItems: string;
  defaultBackground?: string;
}) => {
  const bgColor = useColorModeValue(defaultBackground, "whiteAlpha.50");

  return (
    <VStack bg={bgColor} {...restProps}>
      {children}
    </VStack>
  );
};

export default VStackThemed;

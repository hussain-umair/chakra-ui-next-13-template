"use client";
import { Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const TextThemed = ({
  children,
  defaultColor = "gray.600",
}: {
  children: React.ReactNode;
  defaultColor?: string;
}) => {
  const textColor = useColorModeValue(defaultColor, "gray.400");
  return <Text color={textColor}>{children}</Text>;
};

export default TextThemed;

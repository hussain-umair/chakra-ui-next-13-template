import { Button as CharkraButton } from "@chakra-ui/react";

const Button = ({ children, ...props }: any) => {
  return <CharkraButton {...props}>{children}</CharkraButton>;
};

export default Button;

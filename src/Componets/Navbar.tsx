import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <div>
      <HStack justifyContent="space-between" padding="10px 20px">
        <Image src={logo} boxSize="60px" />

        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default Navbar;

import { Flex } from "@chakra-ui/react";
import React from "react";
import LeftHandContent from "./LeftHandContent";
import RightHandContent from "./RightHandContent";

type NavbarBodyProps = {};

const NavbarBody: React.FC<NavbarBodyProps> = () => {
  return (
    <Flex
      display="flex"
      flexDirection="row"
      paddingY={2}
      paddingX={2}
      backgroundColor="#208AAE"
    >
      <Flex
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        width="50%"
      >
        <LeftHandContent />
      </Flex>
      <Flex
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        width="50%"
      >
        <RightHandContent />
      </Flex>
    </Flex>
  );
};
export default NavbarBody;

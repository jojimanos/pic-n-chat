import NavbarBody from "@/components/navbar/NavbarBody";
import { Flex } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Flex display="flex" flexDirection="column" >
      <NavbarBody />
      <Flex
        display="flex"
        flex={1}
        backgroundColor="#F9EBE0"
      >
        {"content"}
      </Flex>
    </Flex>
  );
}

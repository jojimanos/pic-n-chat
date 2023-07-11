import NavbarBody from "@/components/navbar/NavbarBody";
import { Flex } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Flex display="flex" flexDirection="column" >
      <NavbarBody />
      <Flex
        display="flex"
        flexDirection="column"
        backgroundColor="#F9EBE0"
        width="auto"
        height="full"
      >
        {"content"}
      </Flex>
    </Flex>
  );
}

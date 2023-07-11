import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaForumbee } from "react-icons/fa";

type LeftHandContentProps = {
  children?: any;
};

const LeftHandContent: React.FC<LeftHandContentProps> = () => {
  return (
    <Flex display="flex" flexDirection="row" justifyContent="center" alignItems="center">
      <FaForumbee />
      <Text paddingLeft={3}>Pic'N'Chat</Text>
    </Flex>
  );
};

export default LeftHandContent;

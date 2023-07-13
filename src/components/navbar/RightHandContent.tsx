import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import AuthButton from "../generalComponents/AuthButton";
import AuthModal from "../authentication/AuthModal";

type RightHandContentProps = {
  children?: any;
};

const RightHandContent: React.FC<RightHandContentProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = null;

  console.log("Is Open", isOpen);

  return (
    <Flex>
      {user ? (
        <Button>Logout</Button>
      ) : (
        <>
          <Button colorScheme="cyan" variant="solid" onClick={onOpen}>
            Join Our Community
          </Button>
          <AuthModal isOpen={isOpen} onClose={onClose} />
        </>
      )}
    </Flex>
  );
};

export default RightHandContent;

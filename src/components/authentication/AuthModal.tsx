import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import InputField from "./InputField";
import AuthButton from "../generalComponents/AuthButton";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputField placeholder="email" type="email"/>
            <InputField placeholder="password" type="password"/>
            <InputField placeholder="confirm password" type="password"/>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Flex mr={2}>
              <AuthButton color="cyan" text={"Already a member"} onClick={undefined} />
            </Flex>
            <Flex mr={2}>
              <AuthButton color="cyan" text={"Login Sign Up"} onClick={undefined} />
            </Flex>
            <Button mr={2} colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
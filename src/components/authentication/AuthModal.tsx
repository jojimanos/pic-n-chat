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
import React, { useState } from "react";
import InputField from "./InputField";
import AuthButton from "../generalComponents/AuthButton";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authMode, authModeType } from "@/atoms/authStateAtom";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {

  const [auth, setAuth] = useState()
  
 const setCurrentAuthState = useRecoilState(authMode)

  console.log("This is the current auth state", authMode)

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
              <AuthButton color="cyan" text={"Already a member"} onClick={() => useRecoilState(authMode === "login" ? "signup" : "login")} />
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
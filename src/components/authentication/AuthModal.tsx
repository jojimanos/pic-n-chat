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
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import AuthButton from "../generalComponents/AuthButton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authMode } from "@/atoms/authStateAtom";
import { loginData, signupData } from "./Constants";
import { auth } from "../../../firebaseConfig";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import {
  schemaValidationForLogin,
  schemaValidationForSignup,
} from "./SchemaValidation";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const currentAuthState = useRecoilValue(authMode);

  const setCurrentAuthState = useSetRecoilState(authMode);

  console.log("This is the current auth state", currentAuthState);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPasswordError, setConfirmPasswordError] =
    useState<boolean>(false);

  const authData = currentAuthState === "login" ? loginData : signupData;

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const [SignInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const login = async (e: any) => {
    e.preventDefault();

    let validSchema = schemaValidationForLogin(
      email,
      password,
      setEmailError,
      setPasswordError
    );

    if (validSchema.validSchema)
      try {
        const user = await SignInWithEmailAndPassword(email, password);
      } catch (error) {
        console.log("Create user error", error);
      }
  };

  const signup = async (e: any) => {
    e.preventDefault();

    let validSchema = schemaValidationForSignup(
      email,
      password,
      confirmPassword,
      setEmailError,
      setPasswordError,
      setConfirmPasswordError
    );

    if (validSchema.validSchema)
      try {
        const user = await createUserWithEmailAndPassword(email, password);
      } catch (error) {
        console.log("Create user error", error);
      }
  };

  useEffect(() => {
    setEmailError(false);
    setEmail("")
    setPasswordError(false);
    setPassword("")
    setConfirmPasswordError(false);
    setConfirmPassword("")
  }, [authData.mode]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{authData.mode}</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={currentAuthState === "login" ? login : signup}>
            <ModalBody>
              <InputField
                placeholder="email"
                type="email"
                setValue={setEmail}
                value={email}
              />
              {emailError ? <Text>Not a valid email address</Text> : null}
              <InputField
                placeholder="password"
                type="password"
                setValue={setPassword}
                value={password}
              />
              {passwordError ? <Text>Not a valid password</Text> : null}
              {currentAuthState === "signup" ? (
                <>
                  <InputField
                    placeholder="confirm password"
                    type="password"
                    setValue={setPassword}
                value={confirmPassword}
                  />
                  {confirmPasswordError ? (
                    <Text>Not a valid email address</Text>
                  ) : null}
                </>
              ) : null}
            </ModalBody>
            <ModalFooter justifyContent="center">
              <Flex mr={2}>
                <Button
                  colorScheme="cyan"
                  onClick={() => {
                    setCurrentAuthState((prev) =>
                      prev === "login" ? (prev = "signup") : (prev = "login")
                    );
                  }}
                >
                  {currentAuthState}
                </Button>
              </Flex>
              <Flex mr={2}>
                <AuthButton
                  color="cyan"
                  text={authData.mode}
                  email={email}
                  password={password}
                  // onClick={createUserWithEmailAndPassword}
                />
              </Flex>
              <Button mr={2} colorScheme="blue" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;

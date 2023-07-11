import { Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import AuthButton from "../generalComponents/AuthButton";
import AuthModal from "../authentication/AuthModal";

type RightHandContentProps = {
    children?: any
}

const RightHandContent: React.FC<RightHandContentProps> = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex>
            <AuthButton color="cyan" theme="solid" text="Join Our Community" onClick={onOpen}/>
            <AuthModal isOpen={isOpen} onClose={onClose}/>
        </Flex>
    )
}

export default RightHandContent
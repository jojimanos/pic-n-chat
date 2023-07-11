import { Flex, Input } from "@chakra-ui/react";
import React from "react";

type InputFieldProps = {
placeholder: string
type: string
}

const InputField: React.FC<InputFieldProps> = ({placeholder, type}) => {
    return (
        <Flex paddingY={2}>
           <Input type={type} placeholder={placeholder} /> 
        </Flex>
    )
}

export default InputField
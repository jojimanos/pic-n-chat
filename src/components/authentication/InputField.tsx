import { Flex, Input } from "@chakra-ui/react";
import React from "react";

type InputFieldProps = {
placeholder: string
type: string
setValue: React.Dispatch<React.SetStateAction<string>>
value: string
}

const InputField: React.FC<InputFieldProps> = ({placeholder, type, setValue, value}) => {
  
    return (
        <Flex paddingY={2}>
           <Input value={value} type={type} placeholder={placeholder} onChange={(e: any) => setValue(e.target.value)}/> 
        </Flex>
    )
}

export default InputField
import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";

type ButtonProps = {
  text: string;
  disabled?: boolean;
  onClick: any;
  theme?: string;
  color?: string;
};

const AuthButton: React.FC<ButtonProps> = ({
  text,
  disabled,
  onClick,
  theme,
  color,
}) => {
  return (
    <Button
      spinner={<BeatLoader size={8} color="white" />}
      colorScheme={color}
      variant={theme}
      onClick={() => onClick()}
    >
      {text}
    </Button>
  );
};
export default AuthButton;

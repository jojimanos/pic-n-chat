export const schemaValidationForLogin = (
  email: string,
  password: string,
  setEmailError: any,
  setPasswordError: any
) => {
  setEmailError(false);
  setPasswordError(false);

  let validSchema = true;
  if (email === "") {
    setEmailError(true);
    validSchema = false;
  }
  if (password.length < 8) {
    setPasswordError(true);
    validSchema = false;
  }

  return {
    validSchema,
  };
};

export const schemaValidationForSignup = (
  email: string,
  password: string,
  confirmPassword: string,
  setEmailError: any,
  setPasswordError: any,
  setConfirmPasswordError: any
) => {
  setEmailError(false);
  setPasswordError(false);
  setConfirmPasswordError(false);

  let validSchema = true;
  if (email === "") {
    validSchema = false;
    setEmailError(true);
  }
  if (password.length < 8) {
    validSchema = false;
    setPasswordError(true);
  }
  if (password != confirmPassword) {
    validSchema = false;
    setConfirmPasswordError(true);
  }

  return {
    validSchema,
  };
};

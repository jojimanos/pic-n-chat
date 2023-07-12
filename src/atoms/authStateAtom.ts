import { atom } from "recoil"

export type authModeType = "login" | "signup"

const authModeDefault: authModeType = "login"

export const authMode = atom<authModeType>({
key: "authMode",
default: authModeDefault
}) 
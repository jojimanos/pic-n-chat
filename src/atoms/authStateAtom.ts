import { atom } from "recoil"

export type authModeType = "login" | "signup"

export const authModeDefault: authModeType = "login"

export const authMode = atom<string>({
key: "authMode",
default: authModeDefault
}) 
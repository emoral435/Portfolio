import { CSSProperties } from "react";

export default interface AppTheme {
    dark: CSSProperties,
    light: CSSProperties,
    common?: CSSProperties
}
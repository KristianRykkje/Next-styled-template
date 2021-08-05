import { useTheme } from "@/styles/Theme/ThemeProvider";
import * as st from "./ThemeButton.styles";

export const ThemeButton = () => {
  const { toggle, mode } = useTheme();
  const text =
    mode === "light" ? "stop hurting my eyes!" : "where did the lights go?";

  return <st.Button onClick={toggle}>{text}</st.Button>;
};

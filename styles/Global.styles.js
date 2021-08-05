import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import { nprogressStyles } from "./nprogress.styles";
import { themeColors } from "./Theme/Theme.colors";

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}
        ${themeColors}
        [data-color-scheme="dark"] {
          color-scheme: dark;
        }

        [data-color-scheme="light"] {
          color-scheme: light;
        }

        body {
          background-color: var(--bg);
          color: var(--fc);
          transition: background-color 1s;

          direction: ltr;
          line-height: 1.34;
          unicode-bidi: embed;
          margin: 0;
          min-height: 100vh;

          * {
            box-sizing: border-box;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          button {
            color: inherit;
            border: none;
            cursor: pointer;
          }

          b {
            font-weight: 700;
          }
        }

        ${nprogressStyles}
      `}
    />
  );
};

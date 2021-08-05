import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}

        body {
          direction: ltr;
          line-height: 1.34;
          unicode-bidi: embed;
          margin: 0;

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
      `}
    />
  );
};

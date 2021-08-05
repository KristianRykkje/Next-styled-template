import { css } from "@emotion/react";

// the vars must be overwritten in the script pre body, therefore no common colors.
// bg == background
// fc = font color
export const themeColors = css`
  .theme-light {
    --bg: #fff;
    --fc: #333;
  }
  .theme-dark {
    --bg: #111;
    --fc: #fafafa;
  }
`;

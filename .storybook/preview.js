import GlobalStyles from "../src/globals/globalStyles"
import { ThemeProvider } from "styled-components";
import theme from "../src/globals/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme.dark}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
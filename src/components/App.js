import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Logo } from './Header/component/Logo/Logo';

export const App = () => {
  return (
    <>
      <Box as="header">
        <Logo />
      </Box>
      <GlobalStyle />
    </>
  );
};

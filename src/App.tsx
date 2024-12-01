import { ThemeProvider } from 'styled-components';
import { GlobalStyle, THEME } from './styles';
import { A4Page, Content, Headline, Sidebar, Body } from './components';

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />

      <A4Page>
        <Headline />

        <Content sidebar={<Sidebar />} body={<Body />} />
      </A4Page>
    </ThemeProvider>
  );
};

export default App;

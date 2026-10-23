import { ThemeProvider } from 'styled-components';
import { GlobalStyle, THEME } from './styles';
import {
  A4Page,
  Content,
  Headline,
  Sidebar,
  Body,
  DownloadLink,
} from './components';
import { resume } from './data';

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />

      <DownloadLink />

      <A4Page>
        <Headline {...resume.name} />

        <Content
          sidebar={<Sidebar {...resume} />}
          body={<Body {...resume} />}
        />
      </A4Page>
    </ThemeProvider>
  );
};

export default App;

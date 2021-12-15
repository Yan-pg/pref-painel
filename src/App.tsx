import { ThemeProvider } from "styled-components";
import AppProvider from "./hooks";
import RoutesApp from "./routes";

import GlobalStyle from "./styles/global";
import theme from "./styles/themes";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppProvider>
          <RoutesApp />
        </AppProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

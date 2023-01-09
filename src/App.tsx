import { MantineProvider } from "@mantine/core";
import Form from "./Form";

function App() {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Form />
    </MantineProvider>
  );
}

export default App;

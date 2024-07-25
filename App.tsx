import {SafeAreaView} from "react-native";
import {StatusBar} from "expo-status-bar";
import {PaperProvider} from "react-native-paper";
import {ThemeProvider} from "@shopify/restyle";
import {FLEX} from "./src/utils/constants";
import theme from "./src/design-system/theme/theme";
import {Providers} from "./src/utils/redux/providers";
import {PersistGate} from "redux-persist/integration/react";
import {persistor} from "./src/utils/redux/store";
import Router from "./src/routes/Router";

export default function App() {
  return (
    <SafeAreaView style={FLEX}>
      <StatusBar style="dark" />
      <Providers>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <PaperProvider>
              <Router />
            </PaperProvider>
          </ThemeProvider>
        </PersistGate>
      </Providers>
    </SafeAreaView>
  );
}

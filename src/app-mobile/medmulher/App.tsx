import React, { useCallback, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "../medmulher/routes/app.routes";
import theme from "../medmulher/ui/style/theme";
import * as Font from "expo-font";
import { UserProvider } from "../medmulher/context/userContext";

let customFonts = {
  Mulish: require("../medmulher/assets/fonts/Mulish-Regular.ttf"),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <ThemeProvider theme={theme}>
          <UserProvider>
            <NavigationContainer>
              <AppRoutes />
            </NavigationContainer>
          </UserProvider>
      </ThemeProvider>
    );
  }
}

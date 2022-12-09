import * as React from "react";
import AppContainer from "./src/AppContainer";
import "expo-dev-menu";
import { Provider } from "react-redux";
import store from "./src/redux/Store";

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;

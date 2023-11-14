/* eslint-disable import/order */
// App.tsx or index.tsx
import React from "react";
import { ToastProvider } from "react-native-toast-notifications";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store/store";
import MainNavigator from "./src/screens/MainNavigator";

const App = () => {
  return (
    <ToastProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ToastProvider>
  );
};

export default App;

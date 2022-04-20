import React, { useEffect } from "react";
import { StatusBar } from "react-native";

import Navigator from "~/screens/Navigator";
import { UserContextProvider } from "~/Context/User"; 
import { RandomUserDataProvider } from "~/Context/RandomUserData";
//import SplashScreen from "react-native-splash-screen";

interface Props {}

//const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const App = ({}: Props) => {

  // useEffect(() => {
  //   try {
  //     setTimeout(() => {
  //       SplashScreen.hide();
  //     }, 2000); //스플래시 활성화 시간 2초
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // });

  return (
    <RandomUserDataProvider cache={true}>    
      <UserContextProvider>
        <StatusBar barStyle="default" />
        <Navigator />
      </UserContextProvider>
    </RandomUserDataProvider>
  );
};
export default App;

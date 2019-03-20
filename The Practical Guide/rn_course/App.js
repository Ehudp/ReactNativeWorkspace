import { Navigation } from "react-native-navigation";
import Provider from "react-redux";
import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import {
  AuthConst,
  ShareConst,
  FindConst
} from "./src/screens/ScreenConst/Const";
import configureStore from "./src/store/configureStore";

const store = configureStore();

Navigation.registerComponent(
  AuthConst.screen,
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  ShareConst.screen,
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  FindConst.screen,
  () => FindPlaceScreen,
  store,
  Provider
);

Navigation.startSingleScreenApp({
  screen: {
    screen: AuthConst.screen,
    title: AuthConst.title
  }
});

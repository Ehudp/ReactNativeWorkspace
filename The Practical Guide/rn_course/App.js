import { Navigation } from "react-native-navigation";
import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import {
  AuthConst,
  ShareConst,
  FindConst
} from "./src/screens/ScreenConst/Const";

Navigation.registerComponent(AuthConst.screen, () => AuthScreen);
Navigation.registerComponent(ShareConst.screen, () => SharePlaceScreen);
Navigation.registerComponent(FindConst.screen, () => FindPlaceScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: AuthConst.screen,
    title: AuthConst.title
  }
});

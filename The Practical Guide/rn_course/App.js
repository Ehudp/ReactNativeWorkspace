import { Navigation } from "react-native-navigation";
import AuthScreen from "./src/screens/Auth/Auth";

Navigation.registerComponent("awesome-place.AuthScreen", () => AuthScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-place.AuthScreen",
    title: "Login"
  }
});

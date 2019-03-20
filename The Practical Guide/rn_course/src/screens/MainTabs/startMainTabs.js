import { Navigation } from "react-native-navigation";
import { ShareConst, FindConst } from "../ScreenConst/Const";

const startTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: FindConst.screen,
        label: FindConst.label,
        title: FindConst.title
      },
      {
        screen: ShareConst.screen,
        label: ShareConst.label,
        title: ShareConst.title
      }
    ]
  });
};

export default startTabs;

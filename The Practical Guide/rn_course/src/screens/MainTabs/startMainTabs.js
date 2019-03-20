import { Navigation } from "react-native-navigation";
import { ShareConst, FindConst } from "../ScreenConst/Const";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: FindConst.screen,
          label: FindConst.label,
          title: FindConst.title,
          icon: sources[0]
        },
        {
          screen: ShareConst.screen,
          label: ShareConst.label,
          title: ShareConst.title,
          icon: sources[1]
        }
      ]
    });
  });
};

export default startTabs;

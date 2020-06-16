import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile67415Navigator from '../features/UserProfile67415/navigator';
import Maps67396Navigator from '../features/Maps67396/navigator';
import Settings67374Navigator from '../features/Settings67374/navigator';
import Settings67359Navigator from '../features/Settings67359/navigator';
import NotificationList67358Navigator from '../features/NotificationList67358/navigator';
import Maps67357Navigator from '../features/Maps67357/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile67415: { screen: UserProfile67415Navigator },
Maps67396: { screen: Maps67396Navigator },
Settings67374: { screen: Settings67374Navigator },
Settings67359: { screen: Settings67359Navigator },
NotificationList67358: { screen: NotificationList67358Navigator },
Maps67357: { screen: Maps67357Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

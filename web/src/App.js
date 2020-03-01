import {
  createNavigator,
  SwitchRouter,
} from "@react-navigation/core";

import ChatMessage from './screens/ChatMessage';
import LoginScreen from './screens/LoginScreen';
import AppView from "./AppView";


const AppNavigator = createNavigator(
  AppView,
  SwitchRouter({
    Login: LoginScreen,
    ChatMessage,
  }),
  {}
);

export default AppNavigator;

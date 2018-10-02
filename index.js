/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CalculatorScreen from "./app/src/screen/CalculatorScreen";
import PrimeNumberScreen from "./app/src/screen/PrimeNumberScreen";
import TimerScreen from "./app/src/screen/TimerScreen";
import NewsScreen from "./app/src/screen/NewsScreen";
import MarketScreen from "./app/src/screen/MarketScreen";

AppRegistry.registerComponent(appName, () => TimerScreen);

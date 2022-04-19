import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from './Screens/MainScreen';
import ProfilePage from './Screens/ProfilePage';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <ProfilePage></ProfilePage>
      </View>  
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Main:{
    screen: MainScreen
  },
  Profile:{
    screen: ProfilePage
  }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, ScrollView} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Post from './src/components/Post';
import feed from './assets/data/feed';

import SearchResults from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <GuestsScreen />
    </SafeAreaView>
  );
};

export default App;

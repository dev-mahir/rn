import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BannerAd, TestIds, BannerAdSize} from 'react-native-google-mobile-ads';

const App = () => {
  return (
    <>
      <BannerAd size={BannerAdSize.BANNER} unitId={TestIds.BANNER} />
      <View>
        <Text>App</Text>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function App() {
  return (
    <View style={tw`p-4 android:pt-2 bg-blue-700 flex-row max-w-7xl mx-auto w-full`}>
      <Text style={tw`text-center text-white font-bold text-2xl w-full`}>Administrador de citas</Text>
    </View>
  );
}
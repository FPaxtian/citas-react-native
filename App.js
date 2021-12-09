import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function App() {

  const [state, setState] = useState([
    { id: 1, name: 'Francisco' },
    { id: 1, name: 'Javier' },
    { id: 1, name: 'Jr' }
  ])

  return (
    <View style={tw`max-w-7xl mx-auto w-full`}>

      <Text style={tw`android:pt-2 text-center bg-blue-700 p-4 text-white font-bold text-2xl w-full`}>Administrador de citas</Text>

      <FlatList
        data={state}
        renderItem={({ item }) => (
          <View>{item.name}</View>
        )}
        keyExtractor={state => state.id}
      />

    </View>
  );
}
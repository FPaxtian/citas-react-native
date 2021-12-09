import React, { useState } from 'react';
import { Text, View, FlatList, ScrollView, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Quotes from './src/components/Quotes';
import Form from './src/components/Form';

export default function App() {

  const [state, setState] = useState([])

  const deleteQuote = id => {
    setState((quoteAux) => {
      return quoteAux.filter(quote => quote.id !== id)
    })
  }
  return (
    <ScrollView style={tw`max-w-7xl mx-auto mt-10 w-full`}>

      <Text style={tw`android:pt-2 text-center bg-blue-700 p-4 text-white font-bold text-2xl w-full`}>Administrador de citas</Text>

      <Form state={state} setState={setState} />
      {
        state.map(state => (
          <Quotes key={state.id} item={state} deleteQuote={deleteQuote} />
        ))
      }

    </ScrollView>
  );
}
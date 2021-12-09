import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Quotes = ({ item, deleteQuote }) => {

    const modelDeleteQuote = id => {
        deleteQuote(id)
    }

    return (
        <View style={tw`mt-4 mx-2 rounded-sm p-2 py-4 bg-gray-50 shadow-md`}>
            {console.log(item.isTime)}
            <Text>{item.isPatient} </Text>
            <Text>{item.isTelephone} </Text>
            <Text>{item.isSymptoms} </Text>
            <Text>{item.isDate} </Text>
            <Text>{item.isTime} </Text>

            <View style={tw`mt-4`}>
                <TouchableHighlight onPress={() => modelDeleteQuote(item.id)}
                    style={tw`py-2 px-4 bg-red-500 text-center rounded-sm m-auto `}>
                    <Text style={tw`text-white`}>Eliminar cita</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Quotes
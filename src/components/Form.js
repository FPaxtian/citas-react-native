import React, { useState } from 'react';
import { Text, View, TextInput, TouchableHighlight, Alert, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';

const Form = ({ state, setState }) => {

    const [isPatient, setPatient] = useState('');
    const [isTelephone, setTelephone] = useState('');
    const [isSymptoms, setSymptoms] = useState('');
    const [isDate, setDate] = useState('');
    const [isTime, setTime] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirmDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setDate(date.toDateString("es-ES"), options)
        hideDatePicker();
    };

    const handleConfirmTime = (time) => {
        setTime(time.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3"))
        hideTimePicker();
    };

    const submitQuote = () => {
        if (
            isPatient.trim() === '' ||
            isTelephone.trim() === '' ||
            isSymptoms.trim() === '' ||
            isDate.trim() === '' ||
            isTime.trim() === ''
        ) {
            erroAlert()
            return
        }

        const quote = {
            isPatient,
            isTelephone,
            isSymptoms,
            isDate,
            isTime
        }

        quote.id = shortid.generate()

        const auxQuotes = [...state, quote]

        setState(auxQuotes)
    }

    const erroAlert = () => {
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
            [{
                text: 'OK'
            }]
        )
    }


    return (
        <ScrollView style={tw`my-4`}>
            <Text style={tw`text-center font-semibold text-xl`}>Crea tu cita ahora!!</Text>

            <View style={tw`mt-4 mx-2 `}>
                <Text style={tw`text-left font-medium text-xs text-gray-500`}>Nombre del paciente</Text>
                <TextInput
                    onChangeText={(patient) => setPatient(patient)}
                    style={tw`px-3 py-2 bg-gray-200 text-black border border-gray-200 rounded mb-3`}
                />
            </View>
            <View style={tw`mx-2 `}>
                <Text style={tw`text-left font-medium text-xs text-gray-500`}>No de Telefono</Text>
                <TextInput
                    onChangeText={(telephone) => setTelephone(telephone)}
                    keyboardType='numeric'
                    style={tw`px-3 py-2 bg-gray-200 text-black border border-gray-200 rounded mb-3`}
                />
            </View>
            <View style={tw`mx-2 `}>
                <Text style={tw`text-left font-medium text-xs text-gray-500`}>Sintomas</Text>
                <TextInput
                    multiline
                    onChangeText={(symptoms) => setSymptoms(symptoms)}
                    style={tw`px-3 py-2 bg-gray-200 text-black border border-gray-200 rounded mb-3 h-20`}
                />
            </View>
            <View style={tw`mt-4 `}>
                <Text style={tw`font-medium text-base text-gray-900 text-center mb-2`}>La fecha es: {isDate}</Text>
                <TouchableHighlight onPress={showDatePicker}
                    style={tw`py-3 bg-green-500 rounded-sm mx-2`}>
                    <Text style={tw`text-white text-center`}>Fecha de la cita</Text>
                </TouchableHighlight>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirmDate}
                    onCancel={hideDatePicker}
                />
            </View>
            <View style={tw`mt-4 `}>
                <Text style={tw`font-medium text-base text-gray-900 text-center mb-2`}>La hora de la cita es: {isTime}</Text>
                <TouchableHighlight onPress={showTimePicker}
                    style={tw`py-3 bg-green-500 rounded-sm mx-2`}>
                    <Text style={tw`text-white text-center`}>Hora de la cita</Text>
                </TouchableHighlight>
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={handleConfirmTime}
                    onCancel={hideTimePicker}
                />
            </View>

            <View style={tw`mt-10 `}>
                <TouchableHighlight onPress={submitQuote}
                    style={tw`py-4 bg-blue-500 rounded-sm mx-2`}>
                    <Text style={tw`text-white text-center`}>Enviar</Text>
                </TouchableHighlight></View>
        </ScrollView>
    )

}

export default Form
import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native'
import firebase from '../database/firebaseDb'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

class AddUserScreen extends Compoenent {
    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <Text>Hello From AddUserScreen</Text>
             </View>   
        )
    }
}

export default AddUserScreen;
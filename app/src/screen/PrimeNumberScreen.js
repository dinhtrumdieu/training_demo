import React, {Component} from 'react';
import {
    StyleSheet, View, Text, TextInput, TouchableOpacity
} from 'react-native';
import {sizeFont, sizeHeight, sizeWidth} from "../utils/Size";

export default class PrimeNumberScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: null,
            number: 0,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: sizeFont(7)}}>Enter Input</Text>
                <TextInput
                    style={styles.Input}
                    onChangeText={(number) => {
                        this.setState({number})
                    }}
                    keyboardType={"numeric"}
                />
                <TouchableOpacity
                    onPress={() => {
                        this.isPrimeNumber()
                    }}
                    style={styles.Button}>
                    <Text style={{color: "#fff", fontSize: sizeFont(5)}}>Check</Text>
                </TouchableOpacity>
                {this.state.message && <Text style={styles.MessageText}>This is prime number</Text>}
            </View>
        )
    }

    isPrimeNumber = () => {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Input: {
        width: sizeWidth(60),
        height: sizeHeight(7),
        borderWidth: 2,
        borderColor: "#d4d4d4",
        borderRadius: sizeWidth(2),
        marginVertical: sizeWidth(3),
        textAlign: 'center',
        fontSize: sizeFont(4.2)
    },
    Button: {
        width: sizeWidth(70),
        height: sizeHeight(8),
        backgroundColor: "#48535E",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sizeWidth(3)
    },
    MessageText: {
        fontSize: sizeFont(7),
        alignSelf: 'center',
        marginTop: sizeWidth(5)
    }
});
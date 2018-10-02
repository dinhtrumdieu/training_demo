import React, {Component} from 'react';
import {
    StyleSheet, View, Text, TouchableOpacity
} from 'react-native';
import {sizeFont, sizeWidth} from "../utils/Size";

export default class TimerScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    <Text style={{fontSize: sizeWidth(25)}}>09</Text>
                    <Text style={{fontSize: sizeWidth(25)}}>:</Text>
                    <Text style={{fontSize: sizeWidth(25)}}>00</Text>
                </Text>
                <View style={{
                    borderWidth: 2,
                    borderColor: "#aaa",
                    flexDirection: 'row',
                    width: sizeWidth(50),
                    borderRadius: sizeWidth(2),
                    marginVertical: sizeWidth(4)
                }}>
                    <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{fontSize: sizeWidth(12), color: "#aaa"}}> - </Text>
                    </TouchableOpacity>
                    <View style={{width: 2, backgroundColor: "#aaa"}}/>
                    <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{fontSize: sizeWidth(12), color: "#aaa"}}> + </Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginTop: sizeWidth(7)}}>
                    <TouchableOpacity style={[styles.Button, {marginRight: sizeWidth(10)}]}>
                        <Text style={styles.ButtonText}>RESET</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.ButtonText}>START</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Button: {
        width: sizeWidth(35),
        paddingVertical: sizeWidth(4),
        backgroundColor: "#48535E",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sizeWidth(3)
    },
    ButtonText: {
        color: "#fff",
        fontSize: sizeFont(5)
    }
});
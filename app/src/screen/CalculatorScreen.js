import React, {Component} from 'react';
import {
    StyleSheet, TextInput, View, StatusBar, Text, TouchableOpacity
} from 'react-native';
import {sizeFont, sizeWidth} from "../utils/Size";

export default class CalculatorScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: "0"
        }
    }

    render() {
        return (
            <View style={styles.Container}>
                <StatusBar hidden={true}/>
                <View style={{flex: 2, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                    <Text style={styles.Number}>0</Text>
                </View>
                <View style={styles.RowView}>
                    {this.renderOperation("AC")}
                    {this.renderColumnSeparator()}
                    {this.renderOperation("+/-")}
                    {this.renderColumnSeparator()}
                    {this.renderOperation("%")}
                    {this.renderColumnSeparator()}
                    {this.renderOperation("÷", {backgroundColor: '#F5923E'}, {color: '#fff', fontSize: sizeWidth(13)})}
                </View>
                {this.renderRowSeparator()}
                <View style={styles.RowView}>
                    {this.renderOperation("7")}
                    {this.renderColumnSeparator()}
                    {this.renderOperation("8")}
                    {this.renderColumnSeparator()}
                    {this.renderOperation("9")}
                    {this.renderColumnSeparator()}
                    {this.renderOperation("×", {backgroundColor: '#F5923E'}, {color: '#fff', fontSize: sizeWidth(13)})}
                </View>
                {this.renderRowSeparator()}
                <View style={styles.RowView}>
                    {this.renderOperation("4")}
                    {this.renderColumnSeparator()}
                    {this.renderOperation("5")}
                    {this.renderColumnSeparator()}
                    {this.renderOperation("6")}
                    {this.renderColumnSeparator()}
                    {this.renderOperation("−", {backgroundColor: '#F5923E'}, {color: '#fff', fontSize: sizeWidth(13)})}
                </View>
                {this.renderRowSeparator()}
                <View style={styles.RowView}>
                    {this.renderOperation("1")}
                    {this.renderColumnSeparator()}
                    {this.renderOperation("2")}
                    {this.renderColumnSeparator()}
                    {this.renderOperation("3")}
                    {this.renderColumnSeparator()}
                    {this.renderOperation("+", {backgroundColor: '#F5923E'}, {color: '#fff', fontSize: sizeWidth(13)})}
                </View>
                {this.renderRowSeparator()}
                <View style={styles.RowView}>
                    {this.renderOperation("0", {flex: 2})}
                    {this.renderColumnSeparator()}
                    {this.renderOperation(".")}
                    {this.renderColumnSeparator()}
                    {this.renderOperation("=", {backgroundColor: '#F5923E'}, {color: '#fff', fontSize: sizeWidth(13)})}
                </View>
            </View>
        )
    }

    renderOperation = (symbol, viewStyle, textStyle) => {
        return (
            <TouchableOpacity
                style={[{
                    alignItems: "center",
                    justifyContent: 'center',
                    backgroundColor: '#D6D6D6',
                    flex: 1
                }, viewStyle]}>
                <Text style={[{fontSize: sizeFont(9), color: '#000'}, textStyle]}>{symbol}</Text>
            </TouchableOpacity>
        )
    };

    renderColumnSeparator = () => (
        <View style={{width: 1.5, backgroundColor: "#9b9b9b"}}/>
    );

    renderRowSeparator = () => (
        <View style={{height: 1.5, backgroundColor: "#9b9b9b"}}/>
    )

}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#3a3a3a"
    },
    TextInput: {
        backgroundColor: 'transparent',
        fontSize: sizeFont(17),
        color: '#fff',
        paddingVertical: sizeWidth(3),
        paddingHorizontal: sizeWidth(4)
    },
    RowView: {
        flex: 1,
        flexDirection: 'row'
    },
    Number: {
        fontSize: sizeFont(25),
        color: '#fff',
        margin: sizeWidth(3),
        fontFamily: 'Arial'
    }
});
import React, {Component} from 'react';
import {
    StyleSheet, View, FlatList, Text, TouchableOpacity
} from 'react-native';
import {sizeFont, sizeHeight, sizeWidth} from "../utils/Size";

const data = [
    {
        id: 1, title: "Charlie Deets", preview: "Decaffeinated Coffee Flavor Improvement!",
        detail: "Greetings. I am writing because i discovered a way to improve the taste of decaffeinate  improve the taste of decaffeinate"
    },
    {
        id: 2, title: "Charlie Deets", preview: "Decaffeinated Coffee Flavor Improvement!",
        detail: "Greetings. I am writing because i discovered a way to improve the taste of decaffeinate  improve the taste of decaffeinate"
    },
    {
        id: 3, title: "Charlie Deets", preview: "Decaffeinated Coffee Flavor Improvement!",
        detail: "Greetings. I am writing because i discovered a way to improve the taste of decaffeinate  improve the taste of decaffeinate"
    },
    {
        id: 4, title: "Charlie Deets", preview: "Decaffeinated Coffee Flavor Improvement!",
        detail: "Greetings. I am writing because i discovered a way to improve the taste of decaffeinate  improve the taste of decaffeinate"
    },
    {
        id: 5, title: "Charlie Deets", preview: "Decaffeinated Coffee Flavor Improvement!",
        detail: "Greetings. I am writing because i discovered a way to improve the taste of decaffeinate  improve the taste of decaffeinate"
    },
    {
        id: 6, title: "Charlie Deets", preview: "Decaffeinated Coffee Flavor Improvement!",
        detail: "Greetings. I am writing because i discovered a way to improve the taste of decaffeinate  improve the taste of decaffeinate"
    }
];

export default class NewsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderToolBar()}
                <FlatList data={data}
                          keyExtractor={(item, index) => item.id.toString()}
                          renderItem={this._renderItem}
                          ItemSeparatorComponent={() => (
                              <View style={{marginLeft: sizeWidth(6), height: 1, backgroundColor: "#aaa"}}/>)
                          }
                />
            </View>
        )
    }

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity style={{paddingVertical: sizeWidth(3), paddingHorizontal: sizeWidth(6)}}>
                <Text style={{fontSize: sizeFont(6), fontWeight: 'bold'}}>{item && item.title}</Text>
                <Text style={{fontSize: sizeFont(4.2)}}>{item && item.preview}</Text>
                <Text style={{fontSize: sizeFont(4.2), color: "#8a8a8a"}}
                      numberOfLines={2}>{item && item.detail}</Text>
            </TouchableOpacity>
        )
    };

    renderToolBar = () => {
        return (
            <View style={{
                height: sizeHeight(6.9),
                borderBottomWidth: 1,
                borderColor: "#e7e7e7",
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{fontSize: sizeWidth(6), fontWeight: "bold"}}>News</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
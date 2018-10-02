import React, {Component} from 'react';
import {
    StyleSheet, View, FlatList, Text, TouchableOpacity, TextInput, Image
} from 'react-native';
import {sizeFont, sizeHeight, sizeWidth} from "../utils/Size";

const data = [
    {id: 1, wallet: "BTC", price: "235", change_24h: "-0.93"},
    {id: 2, wallet: "ETH", price: "235", change_24h: "-0.93"},
    {id: 3, wallet: "EOS", price: "2352", change_24h: "-0.93"},
    {id: 4, wallet: "ADA", price: "2351", change_24h: "-0.93"},
    {id: 5, wallet: "LTC", price: "235", change_24h: "-0.93"},
    {id: 6, wallet: "USDT", price: "2135", change_24h: "-0.93"},
    {id: 7, wallet: "ADA", price: "235", change_24h: "-0.93"},
    {id: 8, wallet: "XMR", price: "25", change_24h: "-0.93"},
    {id: 9, wallet: "DASH", price: "100", change_24h: "-0.93"},
    {id: 10, wallet: "MITOA", price: "235", change_24h: "-0.93"},
    {id: 11, wallet: "XLM", price: "235", change_24h: "-0.93"},
    {id: 12, wallet: "ASFC", price: "2354", change_24h: "-0.93"},
    {id: 13, wallet: "AGV", price: "235", change_24h: "-0.93"},
    {id: 14, wallet: "ERT", price: "235", change_24h: "-0.93"},
];

export default class MarketScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderToolBar()}
                {this.renderSearch()}
                <View style={styles.Header}>
                    <Text style={{width: sizeWidth(7)}}>#</Text>
                    <Text style={{flex: 1}}>Name</Text>
                    <Text style={{width: sizeWidth(20)}}>Price</Text>
                    <Text style={{width: sizeWidth(25)}}>Change 24h</Text>
                </View>
                <FlatList data={data}
                          keyExtractor={(item, index) => item.id.toString()}
                          renderItem={this._renderItem}
                />
            </View>
        )
    }

    _renderItem = ({item, index}) => {
        const wallet = item && item.wallet;
        const price = item && item.price;
        const change_24h = item && item.change_24h;
        return (
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: sizeWidth(4),
                paddingVertical: sizeWidth(3)
            }}>
                <Text style={{width: sizeWidth(7)}}>{index + 1}</Text>
                <Text style={{flex: 1}}>{wallet}</Text>
                <Text style={{width: sizeWidth(20)}}>${price}</Text>
                <Text style={{width: sizeWidth(25)}}>{change_24h}%</Text>
            </View>
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
                <Text style={{fontSize: sizeWidth(6), fontWeight: "bold"}}>Market</Text>
            </View>
        )
    };

    renderSearch = () => {
        return (
            <View
                style={{flexDirection: 'row', padding: sizeWidth(3), margin: sizeWidth(2), backgroundColor: "#bacde2" , borderRadius:sizeWidth(3)}}>
                <TouchableOpacity>
                    <Image
                        resizeMode="contain"
                        style={{width: sizeWidth(5), height: sizeWidth(5)}}
                        source={require('../../res/images/search.png')}/>
                </TouchableOpacity>

                <TextInput
                    style={{flex: 1, marginHorizontal: sizeWidth(2), paddingLeft: sizeWidth(2)}}
                    placeholder="Search"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Header: {
        flexDirection: 'row',
        paddingHorizontal: sizeWidth(4),
        backgroundColor: "#efefef",
        paddingVertical: sizeWidth(3)
    }
});
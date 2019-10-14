import React, {Component} from 'react'
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'

export default class ProductBag extends Component {
    static navigationOptions = {
        title: 'Tas',
    };

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                {/* PRODUK FAVORIT */}
                <View style={{marginTop: 20, marginHorizontal: 16}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text style={{fontSize: 17, fontWeight: "bold"}}>Tas</Text>
                    </View>
                    <View style={{flexDirection: "row", flexWrap: "wrap", marginTop: 10}}>
                        <View style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            width: "100%",
                            marginBottom: 20
                        }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetail')}>
                                <View style={{
                                    width: 170,
                                    height: 200,
                                    borderWidth: 1,
                                    borderColor: "#EFEFEF",
                                    borderRadius: 10,
                                    backgroundColor: "white",
                                    marginRight: 15
                                }}>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: 120,
                                        width: "100%"
                                    }}>
                                        <Image source={require('../assets/product/dota-bag.png')}
                                               style={{width: 120, height: 120}}/>
                                    </View>
                                    <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>TAS DOTA
                                        2</Text>
                                    <Text style={{
                                        paddingLeft: 10,
                                        fontSize: 14,
                                        marginTop: 5,
                                        height: 25,
                                        width: "100%",
                                        textAlign: "right",
                                        paddingRight: 20,
                                        color: "#f4a51c"
                                    }}>Rp. 135.000</Text>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetail')}>
                                <View style={{
                                    width: 170,
                                    height: 200,
                                    borderWidth: 1,
                                    borderColor: "#EFEFEF",
                                    borderRadius: 10,
                                    backgroundColor: "white",
                                    marginRight: 15
                                }}>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: 120,
                                        width: "100%"
                                    }}>
                                        <Image source={require('../assets/product/csgo-bag.png')}
                                               style={{width: 120, height: 120}}/>
                                    </View>
                                    <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>TAS CS
                                        GO</Text>
                                    <Text style={{
                                        paddingLeft: 10,
                                        fontSize: 14,
                                        marginTop: 5,
                                        height: 25,
                                        width: "100%",
                                        textAlign: "right",
                                        paddingRight: 20,
                                        color: "#f4a51c"
                                    }}>Rp. 128.000</Text>

                                </View>
                            </TouchableOpacity>

                        </View>

                        <View style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            width: "100%",
                            marginBottom: 20
                        }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetail')}>
                                <View style={{
                                    width: 170,
                                    height: 200,
                                    borderWidth: 1,
                                    borderColor: "#EFEFEF",
                                    borderRadius: 10,
                                    backgroundColor: "white",
                                    marginRight: 15
                                }}>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: 120,
                                        width: "100%"
                                    }}>
                                        <Image source={require('../assets/product/pubg-bag.png')}
                                               style={{width: 120, height: 120}}/>
                                    </View>
                                    <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>TAS
                                        PUBG</Text>
                                    <Text style={{
                                        paddingLeft: 10,
                                        fontSize: 14,
                                        marginTop: 5,
                                        height: 25,
                                        width: "100%",
                                        textAlign: "right",
                                        paddingRight: 20,
                                        color: "#f4a51c"
                                    }}>Rp. 115.000</Text>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetail')}>
                                <View style={{
                                    width: 170,
                                    height: 200,
                                    borderWidth: 1,
                                    borderColor: "#EFEFEF",
                                    borderRadius: 10,
                                    backgroundColor: "white",
                                    marginRight: 15
                                }}>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: 120,
                                        width: "100%"
                                    }}>
                                        <Image source={require('../assets/product/gtav-bag.png')}
                                               style={{width: 120, height: 120}}/>
                                    </View>
                                    <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>TAS GTA
                                        V</Text>
                                    <Text style={{
                                        paddingLeft: 10,
                                        fontSize: 14,
                                        marginTop: 5,
                                        height: 25,
                                        width: "100%",
                                        textAlign: "right",
                                        paddingRight: 20,
                                        color: "#f4a51c"
                                    }}>Rp. 109.000</Text>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
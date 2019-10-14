import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

export default class Type extends Component{
    static navigationOptions = {
        title: 'Type',
      };
    render(){
        return(
            <ScrollView style={{ flex:1 }}>
                <View style={{ marginTop:15, marginHorizontal:16}}>
                    <View>
                        <Text style={{ fontSize:17, fontWeight:"bold" }}>Tipe</Text>
                    </View>
                    <View style={{ flexDirection:"row", flexWrap:"wrap", marginTop:10}}>
                        <View style={{ flexDirection:"row", justifyContent:"space-between", width:"100%", marginBottom:18 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductShirt')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../assets/type/type_shirt.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Baju</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductBag')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../assets/type/type_bag.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Tas</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductGlass')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../assets/type/type_glass.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Gelas</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductBracelet')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../assets/type/type_bracelet.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Gelang</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
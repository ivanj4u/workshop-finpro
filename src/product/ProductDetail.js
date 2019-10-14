import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'


export default class ProductDetail extends Component{
    static navigationOptions = {
        title: 'Detail Produk',
    };
    
    constructor(props) {
        super(props);
        this.state = {
            images: [
            '../assets/type/type_shirt'
            ]
        };
    }
    render(){
        return(
            // <SliderBox images={this.state.images} />
            <View style={{flex:1}}>
                <View style={{ flex:1, justifyContent:"center", alignItems:"center"}}>
                    <Image source={require('../assets/product/dota-shirt.png')} />
                    <Text style={{ fontSize:20, marginLeft:20, marginRight:30, marginBottom:5}}>BAJU DOTA 2</Text>
                    <Text style={{ fontSize:26, marginLeft:20, marginRight:30, marginBottom:5}}>Rp. 125.000</Text>
                </View>
                <View>
                    <Text style={{marginLeft:20,marginBottom:10, fontSize:18, fontWeight:"bold"}}>Size Tersedia : </Text>
                    <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginHorizontal:20, marginBottom:10}}>
                        <Text style={{fontSize:16}}>S</Text>
                        <Text style={{fontSize:16}}>M</Text>
                        <Text style={{fontSize:16}}>L</Text>
                        <Text style={{fontSize:16}}>XL</Text>
                    </View>
                </View>
                <View style={{marginTop:10, justifyContent:"space-between", marginBottom:40}}>
                    <Button icon={<Icon name="shopping-cart" size={35} />} title={' Beli Sekarang '} buttonStyle={{ justifyContent:"center" }} />
                </View>
                
            </View>
            

        )
    }
}
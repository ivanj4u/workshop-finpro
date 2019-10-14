import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Introduction extends Component{
    static navigationOptions = {
        title: 'Introduction',
      };
    render(){
        return(
            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                <Image source={require('./assets/ic_shop_logo.png')}/>
                <Button
                    icon={
                        <Icon
                          name="shopping-bag"
                          size={30}
                        />
                      }
                    title={"   Shop Now"}
                    onPress={() => this.props.navigation.navigate('Home')}
                    />
            </View>
        )
    }
}
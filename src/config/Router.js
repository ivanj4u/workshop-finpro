import {createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import React from "react"

import Introduction from '../Introduction'
import Home from '../Home'
import ProductShirt from '../product/ProductShirt'
import Type from '../product/Type'
import Akun from '../Akun'
import ProductDetail from '../product/ProductDetail'
import ProductBag from "../product/ProductBag";
import ProductGlass from "../product/ProductGlass";
import ProductBracelet from "../product/ProductBracelet";
import ProductDota from "../product/ProductDota";
import ProductCsgo from "../product/ProductCsgo";
import ProductPubg from "../product/ProductPubg";
import ProductGtav from "../product/ProductGtav";

const HomePage = createStackNavigator(
    {
        Home: Home,
        ProductShirt: ProductShirt,
        ProductBag: ProductBag,
        ProductGlass: ProductGlass,
        ProductBracelet: ProductBracelet,
        ProductDota: ProductDota,
        ProductCsgo: ProductCsgo,
        ProductPubg: ProductPubg,
        ProductGtav: ProductGtav,
        ProductDetail: ProductDetail
    },
    {
        headerMode: "none",
        initialRouteName: "Home"
    }
);

const TypePage = createStackNavigator({
    Type: Type,
    ProductDetail: ProductDetail
});

const BottomNavigation = createBottomTabNavigator(
    {
        Home: {
            screen: HomePage,
            navigationOptions: {
                tabBarIcon: ({tintColor}) =>
                    <Icon name="home" size={20} color={tintColor}/>
            }
        },
        Type: {
            screen: TypePage,
            navigationOptions: {
                tabBarIcon: ({tintColor}) =>
                    <Icon name="tags" size={20} color={tintColor}/>
            }
        },
        Akun: {
            screen: Akun,
            navigationOptions: {
                tabBarIcon: ({tintColor}) =>
                    <Icon name="user" size={20} color={tintColor}/>
            }
        }
    },
    {
        initialRouteName: "Home",
        tabBarOptions: {
            activeTintColor: '#5bb7f5',
            labelStyle: {
                fontSize: 14
            },
            style: {
                backgroundColor: '#fff',
                // height: 0
            }
        },
    }
);

export const AppNavigation = createSwitchNavigator({
    Introduction: Introduction,
    Home: BottomNavigation
});

HomePage.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible
    };
};

TypePage.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible
    };
};

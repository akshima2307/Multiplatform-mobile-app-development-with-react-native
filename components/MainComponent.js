import React , { Component} from 'react';
import { View , Platform } from 'react-native';
import {  createAppContainer  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';



const MenuNavigator = createStackNavigator({
        Menu: { screen: Menu },
        Dishdetail: { screen: Dishdetail }
    },
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);

const Main = createAppContainer(MenuNavigator);

export default Main;

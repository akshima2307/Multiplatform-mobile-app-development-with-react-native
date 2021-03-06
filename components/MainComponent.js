import React , { Component} from 'react';
import { View, Platform } from 'react-native';
import { Image, StyleSheet } from 'react-native';
import { Text, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {  createAppContainer , SafeAreaView   } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import About from './AboutUsComponent';
import Contact from './ContactUsComponent';
import Reservation from './ReservationComponent';
import Favorites from './FavoriteComponent';

import { Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import { fetchDishes, fetchPromos, fetchComments, fetchLeaders } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchComments: () => dispatch(fetchComments()),
  fetchLeaders: () => dispatch(fetchLeaders())
})


const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu,
      navigationOptions: ({ navigation }) => ({
      headerLeft: () => <Icon name="menu" size={24} color='gray' onPress={ () => navigation.toggleDrawer() } />
    })},
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

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home ,
      navigationOptions: ({ navigation }) => ({
      headerLeft: () => <Icon name="menu" size={24} color='gray' onPress={ () => navigation.toggleDrawer() } />
    })
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#512DA8'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
                color: "#fff"
            }
    })
  }
);

const AboutNavigator = createStackNavigator({
        About: { screen: About,
          navigationOptions: ({ navigation }) => ({
          headerLeft: () => <Icon name="menu" size={24} color='gray' onPress={ () => navigation.toggleDrawer() } />
        })
         },
    },
    {
        navigationOptions:({navigation}) => ({
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        })
    }
);

const ContactNavigator = createStackNavigator({
        Contact: { screen: Contact,
          navigationOptions: ({ navigation }) => ({
          headerLeft: () => <Icon name="menu" size={24} color='gray' onPress={ () => navigation.toggleDrawer() } />
        }) },
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        })
    }
);

const ReservationNavigator = createStackNavigator({
        Reserve: { screen: Reservation,
          navigationOptions: ({ navigation }) => ({
          headerLeft: () => <Icon name="menu" size={24} color='gray' onPress={ () => navigation.toggleDrawer() } />
        }) },
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        })
    }
);
const FavoriteNavigator = createStackNavigator({
        Favorites: { screen: Favorites,
          navigationOptions: ({ navigation }) => ({
          headerLeft: () => <Icon name="menu" size={24} color='gray' onPress={ () => navigation.toggleDrawer() } />
        }) },
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        })
    }
);


const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style = {styles.container}
            forceInset = {{ top: 'always', horizontal: 'never'}}>
            <View style = {styles.drawerHeader}>
                <View style = {{flex: 1}}>
                    <Image source = {require('./images/logo.png')}
                        style = {styles.drawerImage} />
                </View>
                <View style = {{flex: 2}}>
                    <Text style = {styles.drawerHeaderText}>
                        Ristorante Con Fusion
                    </Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);



  const MainNavigator = createDrawerNavigator({
    Home:
      { screen: HomeNavigator,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home',
          drawerIcon : ({ tintColor }) => (
              <Icon
                name = 'home'
                type = "font-awesome"
                size = {24}
                color = {tintColor}
                />
          )
        }
      },
      About:
      {
          screen: AboutNavigator,
          navigationOptions: {
              title: 'About',
              drawerLabel: 'About Us',
              drawerIcon : ({ tintColor }) => (
                  <Icon
                    name = 'info-circle'
                    type = "font-awesome"
                    size = {24}
                    color = {tintColor}
                    />
              )
          }
      },
    Menu:
      { screen: MenuNavigator,
        navigationOptions: {
          title: 'Menu',
          drawerLabel: 'Menu',
          drawerIcon : ({ tintColor }) => (
              <Icon
                name = 'list'
                type = "font-awesome"
                size = {24}
                color = {tintColor}
                />
          )
        },
      },
    Contact:
      {
          screen: ContactNavigator,
          navigationOptions: {
              title: 'Contact Us',
              drawerLabel: 'Contact Us',
              drawerIcon : ({ tintColor }) => (
                  <Icon
                    name = 'address-card'
                    type = "font-awesome"
                    size = {22}
                    color = {tintColor}
                    />
              )
          }
      },
      Favorites:
        {
            screen:FavoriteNavigator ,
            navigationOptions: {
                title: 'Favorites',
                drawerLabel: 'Favorites',
                drawerIcon : ({ tintColor }) => (
                    <Icon
                      name = 'heart'
                      type = "font-awesome"
                      size = {24}
                      color = {tintColor}
                      />
                )
            }
        },
      Reservation:
        {
            screen:ReservationNavigator ,
            navigationOptions: {
                title: 'Reserve Table',
                drawerLabel: 'Reserve Table',
                drawerIcon : ({ tintColor }) => (
                    <Icon
                      name = 'cutlery'
                      type = "font-awesome"
                      size = {24}
                      color = {tintColor}
                      />
                )
            }
        }


}, {
  drawerBackgroundColor: '#D1C4E9',
  contentComponent: CustomDrawerContentComponent
});

const MainNavigatorApp  = createAppContainer(MainNavigator);

class Main extends Component {

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchPromos();
    this.props.fetchComments();
    this.props.fetchLeaders();
  }

  render() {
    return (
        <View style={{flex:1, paddingTop:0 }}>
            <MainNavigatorApp />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',

  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeIcon from '../components/homeIcon';
import ExploreIcon from '../components/exploreIcon';
import ProfileIcon from '../components/profileIcon';
import NotificationIcon from '../components/notificationIcon';
import OrderIcon from '../components/orderIcon';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {fontSize: 11, fontFamily: 'Inter-SemiBold'},
        tabBarActiveTintColor: '#33A197',
        tabBarInactiveTintColor: '#8F8F8F',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: (tabInfo) => {return <HomeIcon height={25} width={25} fill={tabInfo.focused ? "#33A197" : '#8F8F8F'}/>} }}></Tab.Screen>
      <Tab.Screen name="Explore" component={ExploreScreen} options={{ tabBarIcon: (tabInfo) => {return <ExploreIcon height={25} width={25} fill={tabInfo.focused ? "#33A197" : '#8F8F8F'}/>} }}></Tab.Screen>
      <Tab.Screen name="Orders" component={OrderScreen} options={{ tabBarIcon: (tabInfo) => {return <OrderIcon height={25} width={25} fill={tabInfo.focused ? "#33A197" : '#8F8F8F'}/>} }}></Tab.Screen>
      <Tab.Screen name="Notifications" component={NotificationScreen} options={{ tabBarIcon: (tabInfo) => {return <NotificationIcon height={25} width={25} fill={tabInfo.focused ? "#33A197" : '#8F8F8F'}/>} }}></Tab.Screen>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: (tabInfo) => {return <ProfileIcon height={25} width={25} fill={tabInfo.focused ? "#33A197" : '#8F8F8F'}/>} }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;

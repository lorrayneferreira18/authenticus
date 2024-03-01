import * as React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import HomePage from '../pages/home'
import FaqPage from '../pages/faq'
import ProfilePage from '../pages/profile'
import ConfigurationPage from '../pages/configuration'
import QrCodePage from '../pages/qrcode'
import ReturnQrCode from '../pages/returnQrCode'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const icons = {
  Home: {
    lib: Feather,
    route: 'Home',
    name: 'home'

  },
  Faq: {
    lib: AntDesign,
    route: 'Faq',
    name: 'infocirlceo'
  },
  Profile: {
    lib: Ionicons,
    route: 'Profile',
    name: 'person-outline'
  },
  Configuration: {
    lib: Feather,
    route: 'Configuration',
    name: 'settings'
  },
  ReturnQrCode: {
    lib: AntDesign,
    route: 'qrcode',
    name: 'qrcode'
  }
}

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Initial' component={BottomNavigator} />
      <Stack.Screen name='QrCode' component={QrCodePage} />
    </Stack.Navigator>
  )
}

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const { lib: Icon, name } = icons[route.name]
          return <Icon name={name} size={size} color={color} />
        }
      })}
    >
      <Tab.Screen name='Home' component={HomePage} />
      <Tab.Screen name='ReturnQrCode' options={{ title: 'QrCode' }} component={ReturnQrCode} />
      <Tab.Screen name='Faq' options={{ title: 'Sobre' }} component={FaqPage} />
      <Tab.Screen name='Profile' options={{ title: 'Perfil' }} component={ProfilePage} />
      <Tab.Screen name='Configuration' options={{ title: 'Configuração' }} component={ConfigurationPage} />
    </Tab.Navigator>
  )
}

const AppRoute = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
}

export default AppRoute

import { StyleSheet, Text, View, Platform, Image, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import Header from '../components/header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useQrCode } from '../store'
import { fonts } from '../constants/fonts'
import Icon from '../../assets/icon.png'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const HomePage = () => {
  const qrcode = useQrCode((state) => state.qrcode)
  const navigation = useNavigation()
  const [isVisible, setIsVisible] = useState(true)

  const handleTextClick = () => {
    setIsVisible(false)
  }
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>Authenticus</Text>
        <Image
          source={require('../../assets/icon.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>{qrcode}</Text>
        <TouchableNativeFeedback onPress={() => navigation.navigate('QrCode')}>
          <AntDesign style={styles.qrCode} size='200' name='qrcode' />
        </TouchableNativeFeedback>
        <TouchableOpacity>
          <Text style={styles.text}>Clique no QrCode e inicie a verificação</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 20,
    backgroundColor: '#03b8cf'
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 10
  },
  logo: {
    width: 40,
    height: 40
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  text: {
    fontSize: 24,
    color: '#6c13c3'
  }
})

export default HomePage

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

  React.useEffect(() => {
    if (qrcode?.length > 0) navigation.navigate('ReturnQrCode')
  }, [qrcode])
  console.log(qrcode)
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/icon.png')}
          style={styles.logo}
        />
        <Text style={styles.appName}>Authenticus</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('QrCode')}>
          <Text style={styles.textoBotao}>Iniciar Verificação</Text>
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
    paddingVertical: 15,
    backgroundColor: '#03b8cf'
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 25,
    color: '#000',
    marginRight: 10
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 14,
    resizeMode: 'contain',
    alignItems: 'flex-end'
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
  },
  botao: {
    backgroundColor: '#03b8cf',
    borderRadius: 100, // Metade da largura/altura do botão para torná-lo redondo
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoBotao: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default HomePage

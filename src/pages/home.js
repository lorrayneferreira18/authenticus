import { StyleSheet, Text, View, Platform, Image, TouchableNativeFeedback } from 'react-native'
import Header from '../components/header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useQrCode } from '../store'
import { fonts } from '../constants/fonts'
import Icon from '../../assets/icon.png'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const HomePage = () => {
  const qrcode = useQrCode((state) => state.qrcode)
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.body}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('QrCode')}>
          <AntDesign style={styles.qrCode} size='200' name='qrcode' />
        </TouchableNativeFeedback>
        <Text style={styles.explic}>You have no downloads</Text>
        <Text style={styles.description}>{qrcode}</Text>
      </Text>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '1%',
    alignItems: 'center'
  },
  body: {
    width: '100%',
    height: ' 100%',
    display: 'flex',
    backgroundColor: '#03b8cf'
  },
  description: {
    textAlign: 'center',
    fontSize: 24
  },
  qrCode: {
    alignItems: 'center',
    borderWidth: 2,
    height: 100,
    justifyContent: 'center',
    marginBottom: '50%',
    marginTop: 48,
    width: 100,
    backgroundColor: '#fff'
  },
  explic: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
    width: 300
  }

})

export default HomePage

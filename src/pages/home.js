import { StyleSheet, Text, View, Platform, Image } from 'react-native'
import Header from '../components/header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useQrCode } from '../store'
import { fonts } from '../constants/fonts'
import Icon from '../../assets/icon.png'

const HomePage = () => {
  const qrcode = useQrCode((state) => state.qrcode)

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.body}>
        <Text style={styles.description}>{qrcode}</Text>
      </Text>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '1%'

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
  }

})

export default HomePage

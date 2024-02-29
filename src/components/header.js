import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Header() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.titlle}>Authenticus</Text>
      <TouchableNativeFeedback onPress={() => navigation.navigate('QrCode')}>
        <AntDesign name='qrcode' size={26} />
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    width: '100%',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#c1c1c1'
  },
  titlle: {
    fontSize: 29
  }

})

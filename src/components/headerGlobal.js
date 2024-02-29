import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native'
export default function Header() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.titlle}>Perfil</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#c1c1c1'
  },
  titlle: {
    paddingTop: 30,
    fontSize: 30
  }

})

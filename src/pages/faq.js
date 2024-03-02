import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const FaqPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Sobre o Aplicativo</Text>
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Objetivo do Aplicativo</Text>
          <Text style={styles.cardText}>
            O objetivo deste aplicativo é verificar se um whisky é autêntico ou não, através da leitura do QRCode presente na garrafa.
          </Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Como Usar</Text>
          <Text style={styles.cardText}>
            Basta apontar a câmera do seu dispositivo para o QRCode na garrafa de whisky. O aplicativo irá escanear o código e fornecer informações sobre a autenticidade do produto.
          </Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Quem Somos</Text>
          <Text style={styles.cardText}>
            Lorem ipsum dolor sit amet. De empresa conte de wisky historia a wisky wisky a historia empresa uma historia wisky. De historia conte a wisky historia uma historia conte de conte conte uma conte conte de historia wisky.

            A wisky historia a historia historia de wisky conte. De empresa wisky de conte conte de wisky empresa de wisky historia. De empresa historia a conte historia de wisky conte a conte wisky a empresa conte a historia wisky.

            De historia conte de wisky historia de historia historia a empresa wisky a conte conte de empresa wisky de conte historia. De conte historia uma empresa wisky a empresa wisky a conte wisky.
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Leia o QRCode</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6c13c3'
  },
  infoCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6c13c3'
  },
  cardText: {
    fontSize: 16
  },
  button: {
    backgroundColor: '#03b8cf',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
})
export default FaqPage

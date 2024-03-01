import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ConfigurationPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>Notificações</Text>
        <Text style={styles.cardText}>
                  Ative ou desative as notificações push do aplicativo.
                </Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>Privacidade</Text>
        <Text style={styles.cardText}>
                  Configure suas preferências de privacidade, como compartilhamento de dados.
                </Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>Idioma</Text>
        <Text style={styles.cardText}>
                  Escolha o idioma do aplicativo.
                </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
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
export default ConfigurationPage

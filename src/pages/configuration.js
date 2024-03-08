import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'

const ConfigurationPage = () => {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/icon.png')}
          style={styles.logo}
        />
        <Text style={styles.appName}>Authenticus</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Configurações</Text>
        <ScrollView>
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Notificações</Text>
            <Text style={styles.cardText}>
              Ative ou desative as notificações push do aplicativo.
            </Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Privacidade e Segurança</Text>
            <Text style={styles.cardText}>
              Configure suas preferências de privacidade, como compartilhamento de dados.
            </Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Acesso Pessoal</Text>
            <Text style={styles.cardText}>
              Configure seu perfil.
            </Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Acessibilidade</Text>
            <Text style={styles.cardText}>
              Configure suas preferências de privacidade.
            </Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Senha</Text>
            <Text style={styles.cardText}>
              Atualize a sua senha.
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
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
  },
  body: {
    flex: 1
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
  }
})
export default ConfigurationPage

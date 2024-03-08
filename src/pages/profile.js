import React from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native'

const ProfilePage = () => {
  // Dados do usuário (substitua por seus próprios dados)
  const userData = {
    nome: 'Seu Nome',
    email: 'seuemail@example.com',
    idade: 30,
    localizacao: 'Sua Cidade, Seu Estado',
    profissao: 'Sua Profissão'
  }

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
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/fotoPerfil.jpg')}
            style={styles.profileImage}
          />
        </View>
        <ScrollView>
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Nome</Text>
            <Text style={styles.cardText}>{userData.nome}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Email</Text>
            <Text style={styles.cardText}>{userData.email}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Idade</Text>
            <Text style={styles.cardText}>{userData.idade}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Localização</Text>
            <Text style={styles.cardText}>{userData.localizacao}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Profissão</Text>
            <Text style={styles.cardText}>{userData.profissao}</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sair</Text>
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
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6c13c3'
  }
})

export default ProfilePage

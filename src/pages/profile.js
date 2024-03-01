import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import HeaderGlobal from '../components/headerGlobal'
import { SafeAreaView } from 'react-native-safe-area-context'

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
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/fotoPerfil.png')}
          style={styles.profileImage}
        />
      </View>
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
  }
})

export default ProfilePage

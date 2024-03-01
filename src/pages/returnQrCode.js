import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function returnQrCode () {
  // Simulação de dados da leitura do QRCode
  const [qrCodeData, setQRCodeData] = useState({
    nome: 'Produto XYZ',
    ano: 2024,
    quantidadeLida: 5,
    localizacao: 'Local A',
    dataHora: new Date().toLocaleString()
  })

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.info}>{qrCodeData.nome}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Ano:</Text>
        <Text style={styles.info}>{qrCodeData.ano}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Quantidade de Vezes Lido:</Text>
        <Text style={styles.info}>{qrCodeData.quantidadeLida}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Localização:</Text>
        <Text style={styles.info}>{qrCodeData.localizacao}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Data e Hora:</Text>
        <Text style={styles.info}>{qrCodeData.dataHora}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6c13c3',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  card: {
    backgroundColor: '#03b8cf',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  info: {
    fontSize: 16,
    color: '#fff'
  }
})

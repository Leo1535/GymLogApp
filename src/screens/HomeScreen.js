// src/screens/HomeScreen.js
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';

// A propriedade "navigation" é passada automaticamente pelo React Navigation
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.content}>
        <Text style={styles.title}>💪 GymLog</Text>
        <Text style={styles.subtitle}>A sua ficha de treino digital</Text>
      </View>
      <View style={styles.footer}>
        {/* Este botão vai navegar para a tela do Dashboard */}
        <Button
          title="Começar"
          onPress={() => navigation.navigate('Dashboard')}
          color="#BB86FC"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#A9A9A9',
    textAlign: 'center',
    marginTop: 8,
  },
  footer: {
    padding: 24,
  }
});

export default HomeScreen;


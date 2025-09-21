// src/screens/DashboardScreen.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';

function DashboardScreen({ navigation }) {
  // Função para navegar para os detalhes, passando qual treino foi clicado
  const goToWorkoutDetail = (workoutLetter) => {
    navigation.navigate('WorkoutDetail', { workoutId: workoutLetter });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Meus Treinos</Text>

      {/* cria cartões clicáveis para cada treino */}
      <TouchableOpacity style={styles.card} onPress={() => goToWorkoutDetail('A')}>
        <Text style={styles.cardText}>Treino A</Text>
        <Text style={styles.cardSubText}>Peito, Ombros e Tríceps</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => goToWorkoutDetail('B')}>
        <Text style={styles.cardText}>Treino B</Text>
        <Text style={styles.cardSubText}>Costas e Bíceps</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.card} onPress={() => goToWorkoutDetail('C')}>
        <Text style={styles.cardText}>Treino C</Text>
        <Text style={styles.cardSubText}>Pernas</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121212', 
    padding: 16 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#FFFFFF', 
    marginBottom: 24, 
    textAlign: 'center' 
  },
  card: { 
    backgroundColor: '#1E1E1E', 
    padding: 20, 
    borderRadius: 8, 
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333'
  },
  cardText: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#FFFFFF' 
  },
  cardSubText: { 
    fontSize: 14, 
    color: '#A9A9A9', 
    marginTop: 4 
  }
});

export default DashboardScreen;


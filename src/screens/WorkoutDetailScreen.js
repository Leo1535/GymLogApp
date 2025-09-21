// src/screens/WorkoutDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Button } from 'react-native';

// "route" contém os parâmetros que foram passados, como o "workoutId"
function WorkoutDetailScreen({ route, navigation }) {
  // Obter o ID do treino que foi passado a partir do Dashboard
  const { workoutId } = route.params;

  // No futuro, estes dados virão da nossa API
  const exercises = {
    A: ['Supino Reto', 'Desenvolvimento com Halteres', 'Tríceps na Polia'],
    B: ['Remada Curvada', 'Puxada Alta', 'Rosca Direta'],
    C: ['Agachamento Livre', 'Leg Press', 'Cadeira Extensora'],
  };

  const workoutExercises = exercises[workoutId] || [];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Exercícios - Treino {workoutId}</Text>
      
      {/* Listar os exercícios */}
      {workoutExercises.map((exercise, index) => (
        <View key={index} style={styles.exerciseItem}>
          <Text style={styles.exerciseText}>{exercise}</Text>
        </View>
      ))}

      <Button title="Voltar" onPress={() => navigation.goBack()} color="#BB86FC" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 16 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 24, textAlign: 'center' },
  exerciseItem: { backgroundColor: '#1E1E1E', padding: 15, borderRadius: 8, marginBottom: 12 },
  exerciseText: { fontSize: 18, color: '#FFFFFF' },
});

export default WorkoutDetailScreen;


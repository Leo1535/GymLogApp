// App.tsx
import React from 'react';

// Importando o que precisa pra navegação.
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Puxando as telas.
import HomeScreen from './src/screens/HomeScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import WorkoutDetailScreen from './src/screens/WorkoutDetailScreen';

// Cria a pilha de navegação, que vai gerenciar as telas.
const Stack = createNativeStackNavigator();

function App() {
  return (
    // O NavigationContainer é o componente que tem que envolver tudo da navegação.
    <NavigationContainer>
      {/* O Navigator vai cuidar das telas, empilhando uma em cima da outra. */}
      <Stack.Navigator 
        // Estilizando o cabeçalho pra ficar com a cara do app.
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1E1E1E',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* Aqui eu defino quais telas o app vai ter e a ordem delas. */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Meus Treinos' }} />
        <Stack.Screen name="WorkoutDetail" component={WorkoutDetailScreen} options={{ title: 'Detalhes do Treino' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


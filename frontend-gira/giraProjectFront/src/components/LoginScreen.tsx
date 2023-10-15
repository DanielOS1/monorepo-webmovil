import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import RegisterScreen from './RegisterScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


import App  from './../../App'

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.0.2:3005/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
      
        // Guarda el token en AsyncStorage
        await AsyncStorage.setItem('token', token);
      
        // Muestra un mensaje de inicio de sesión exitoso
        alert('Inicio de sesión exitoso');
      
        // Puedes navegar a la pantalla de inicio o realizar otras acciones
      } else {
        // La solicitud al servidor devolvió un error
        // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje de error al usuario
        alert('Credenciales inválidas');
      }
    } catch (error) {
      // Maneja otros errores, como problemas de red
      console.error('Error al iniciar sesión:', error);
    }
  };
  
  


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    input: {
      width: '100%',
      marginBottom: 16,
    },
    button: {
      width: '100%',
      marginTop: 8,
    },
    registerLink: {
      marginTop: 16,
      color: 'blue', // Cambia el color del enlace
    },
    
  });


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inicio de sesión</Text>
      <TextInput
        label="Correo Electronico" // Utilizamos label en lugar de placeholder
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Contraseña" // Utilizamos label en lugar de placeholder
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
      />
      <Button
        mode="contained" // Establecemos el modo a "contained" para darle un aspecto más limpio
        onPress={() => {handleLogin()}}
        style={styles.button}
      >
        Iniciar sesión
      </Button>
      <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
        ¿No tienes una cuenta? Regístrate aquí.
      </Text>
    </View>
  );
};

export default LoginScreen;

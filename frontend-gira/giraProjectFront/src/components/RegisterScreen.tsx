import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet} from 'react-native';
import { TextInput, Button } from 'react-native-paper';


const RegisterScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      const response = await fetch('http://192.168.0.2:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Registro exitoso
        alert('Registro exitoso');
        // Puedes realizar acciones adicionales aquí, como navegar a la pantalla de inicio de sesión
        navigation.navigate('Login');
      } else {
        // El servidor devolvió un error
        alert('El registro falló. Verifica los datos proporcionados.');
      }
    } catch (error) {
      // Manejo de errores, por ejemplo, problemas de red
      console.error('Error en el registro:', error);
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
    loginLink: {
      marginTop: 16,
      color: 'blue',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registrarse</Text>
      <TextInput
        label="Nombre de usuario" 
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        label="Correo electrónico"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Contraseña" 
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
      />
      <TextInput
        label="Confirmar contraseña" 
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
      />
      <Button
        mode="contained" 
        onPress={handleRegister}
        style={styles.button}
      >
        Registrarse
      </Button>
      <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
        ¿Ya tienes una cuenta? Inicia Sesión aquí.
      </Text>
    </View>
  );
};

export default RegisterScreen;

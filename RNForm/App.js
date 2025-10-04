import { useState } from 'react';
import {
  StyleSheet, Text, View,
  StatusBar, TextInput, Switch,
  Button, Image, KeyboardAvoidingView
} from 'react-native';

export default function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {}

    if (!username) errors.username = "Username is required"
    if (!password) errors.password = "Password is required"

    setErrors(errors)

    return Object.keys(errors).length === 0;
  }

  const handleSubmit = () => {
    if(validateForm()) {
      console.log("submitted:", username, password)
      setUsername("")
      setPassword("")
      setErrors({})
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={100}
    >
      <View style={styles.form}>
        <Image
          source={require("./assets/adaptive-icon.png")}
          style={styles.image}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your username'
          value={username}
          onChangeText={setUsername}
        />
        {
          errors.username
            ?
            <Text style={styles.errorText}>{errors.username}</Text>
            :
            null
        }
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {
          errors.password
            ?
            <Text style={styles.errorText}>{errors.password}</Text>
            :
            null
        }
        <Button title='Login' onPress={() => handleSubmit()} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5"
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5
  },
  image: {
    width: 200,
    height: 400,
    alignSelf: "center",
    marginBottom: 50
  },
  errorText: {
    color: "red",
    marginBottom: 10
  }
});

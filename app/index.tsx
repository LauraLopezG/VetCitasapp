import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "http://192.168.0.23/vetcitas_api/api/usuarios/login.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        },
      );

      const data = await response.json();

      if (data.message === "Login exitoso") {
        await AsyncStorage.setItem("user", JSON.stringify(data.user));
        router.replace("/home");
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Error de conexión");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />

          <Text style={styles.title}>Bienvenida a VetCitas</Text>
          <Text style={styles.subtitle}>
            Ingresa para cuidar mejor a tus mascotas
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#718096"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#718096"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoComplete="password"
          />

          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </Pressable>

          <Pressable onPress={() => router.push("/register")}>
            <Text style={styles.link}>Crear una cuenta</Text>
          </Pressable>

          <Pressable onPress={() => router.push("/forgot-password")}>
            <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#E8F5E9",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 440,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 28,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#1B5E20",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
  },
  logo: {
    width: 108,
    height: 108,
    resizeMode: "contain",
    marginBottom: 16,
  },
  title: {
    color: "#1B5E20",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    color: "#5F6F64",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 24,
  },
  input: {
    width: "100%",
    minHeight: 50,
    borderWidth: 1,
    borderColor: "#C8D8CA",
    borderRadius: 12,
    backgroundColor: "#F9FCF9",
    color: "#1F2933",
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 14,
  },
  button: {
    width: "100%",
    minHeight: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#2E7D32",
    marginTop: 4,
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  link: {
    color: "#2E7D32",
    fontSize: 15,
    fontWeight: "600",
    paddingVertical: 7,
  },
});

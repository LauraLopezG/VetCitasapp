import { View, Text, TextInput, Pressable, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

export default function ChangePassword() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Actualiza tu contraseña</Text>

      <TextInput placeholder="Nueva contraseña" placeholderTextColor="#777" secureTextEntry style={styles.input} />
      <TextInput placeholder="Confirmar contraseña" placeholderTextColor="#777" secureTextEntry style={styles.input} />

      <Pressable style={styles.button} onPress={() => router.replace("/confirmation")}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </Pressable>

      <Pressable onPress={() => router.replace("/")}>
        <Text style={styles.link}>Volver al login</Text>
      </Pressable>
    </View>
  );
}

const PRIMARY = "#2E7D32";
const LIGHT = "#E8F5E9";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: LIGHT, padding: 25, justifyContent: "center" },
  logo: { width: 80, height: 80, alignSelf: "center", marginBottom: 10, resizeMode: "contain" },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", color: PRIMARY, marginBottom: 20 },
  input: { backgroundColor: "#FFF", borderRadius: 12, padding: 15, marginBottom: 15, borderWidth: 1, borderColor: "#C8E6C9" },
  button: { backgroundColor: PRIMARY, padding: 15, borderRadius: 12, alignItems: "center", marginBottom: 20, elevation: 3 },
  buttonText: { color: "#FFF", fontWeight: "bold", fontSize: 16 },
  link: { textAlign: "center", color: PRIMARY, fontWeight: "500" }
});

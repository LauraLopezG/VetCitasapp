import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Confirmation() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/contrasena.png")} style={styles.logo} />
      <Text style={styles.title}>Contraseña Actualizada</Text>
      <Text style={styles.subtitle}>Tu contraseña se cambió correctamente ✅</Text>

      <Pressable style={styles.button} onPress={() => router.replace("/")}>
        <Text style={styles.buttonText}>Volver al login</Text>
      </Pressable>
    </View>
  );
}

const PRIMARY = "#2E7D32";
const LIGHT = "#E8F5E9";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: LIGHT, justifyContent: "center", alignItems: "center", padding: 25 },
  logo: { width: 80, height: 80, marginBottom: 20, resizeMode: "contain" },
  title: { fontSize: 24, fontWeight: "bold", color: PRIMARY, marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#555", textAlign: "center", marginBottom: 20 },
  button: { backgroundColor: PRIMARY, padding: 15, borderRadius: 12, alignItems: "center", elevation: 3 },
  buttonText: { color: "#FFF", fontWeight: "bold", fontSize: 16 }
});

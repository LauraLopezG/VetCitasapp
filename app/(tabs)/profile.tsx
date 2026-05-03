import { ScrollView, Text, TextInput, StyleSheet, Image, Pressable } from "react-native";

export default function Profile() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../../assets/perfil.png")} style={styles.logo} />
      <Text style={styles.title}>Datos Personales</Text>

      <TextInput placeholder="Nombre" placeholderTextColor="#777" style={styles.input} />
      <TextInput placeholder="Dirección" placeholderTextColor="#777" style={styles.input} />
      <TextInput placeholder="Teléfono" placeholderTextColor="#777" style={styles.input} />
      <TextInput placeholder="Correo" placeholderTextColor="#777" style={styles.input} />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Guardar</Text>
      </Pressable>
    </ScrollView>
  );
}

const PRIMARY = "#2E7D32";
const LIGHT = "#E8F5E9";
const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: LIGHT, padding: 25 },
  logo: { width: 70, height: 70, alignSelf: "center", marginBottom: 10 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", color: PRIMARY, marginBottom: 20 },
  input: { backgroundColor: "#FFF", borderRadius: 12, padding: 15, marginBottom: 15, borderWidth: 1, borderColor: "#C8E6C9" },
  button: { backgroundColor: PRIMARY, padding: 15, borderRadius: 12, alignItems: "center", marginTop: 20 },
  buttonText: { color: "#FFF", fontWeight: "bold", fontSize: 16 }
});

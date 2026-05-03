import { View, Text, Pressable, StyleSheet, Image, ScrollView } from "react-native";

export default function Payments() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image source={require("../../assets/pagos.png")} style={styles.logo} />
      <Text style={styles.title}>Pagos</Text>
      <Text style={styles.subtitle}>Gestiona tus pagos y recibos</Text>

      {/* Tarjeta Pago */}
      <View style={styles.card}>
        <Image source={require("../../assets/pagos.png")} style={styles.icon} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Consulta General</Text>
          <Text style={styles.cardDetail}>Monto: $50.000</Text>
          <Text style={styles.cardDetail}>Fecha: 20/04/2026</Text>

          <View style={styles.actions}>
            <Pressable style={styles.buttonSmall}>
              <Text style={styles.buttonText}>Ver recibo</Text>
            </Pressable>
            <Pressable style={styles.buttonSmall}>
              <Text style={styles.buttonText}>Pagar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const PRIMARY = "#2E7D32";
const LIGHT = "#E8F5E9";

const styles = StyleSheet.create({
  container: { padding: 25, backgroundColor: LIGHT },
  logo: { width: 70, height: 70, alignSelf: "center", marginBottom: 10, resizeMode: "contain" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", color: PRIMARY },
  subtitle: { textAlign: "center", color: "#555", marginBottom: 20 },
  card: { flexDirection: "row", backgroundColor: "#FFF", borderRadius: 12, padding: 15, marginBottom: 15, elevation: 2 },
  icon: { width: 50, height: 50, marginRight: 15, resizeMode: "contain" },
  cardInfo: { flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: PRIMARY },
  cardDetail: { fontSize: 14, color: "#555" },
  actions: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  buttonSmall: { backgroundColor: PRIMARY, padding: 10, borderRadius: 8, alignItems: "center", flex: 1, marginHorizontal: 5 },
  buttonText: { color: "#FFF", fontWeight: "bold", fontSize: 14 }
});

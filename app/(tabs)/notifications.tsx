import { View, Text, Pressable, StyleSheet, ScrollView, Image } from "react-native";

export default function Notifications() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Notificaciones</Text>
      <Text style={styles.subtitle}>Mantente al día con tus citas y resultados 🐾</Text>

      {/* Cita confirmada */}
      <View style={styles.card}>
        <Image source={require("../../assets/calendar.png")} style={styles.icon} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Cita confirmada</Text>
          <Text style={styles.cardDetail}>Abril 29, 2026 - 10:00 AM</Text>
          <Text style={styles.cardDetail}>Consulta para Milo</Text>
          <Pressable style={styles.buttonSmall}>
            
          </Pressable>
        </View>
      </View>

      {/* Resultados disponibles */}
      <View style={styles.card}>
        <Image source={require("../../assets/results.png")} style={styles.icon} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Resultados disponibles</Text>
          <Text style={styles.cardDetail}>Exámenes de Leyla</Text>
          <Pressable style={styles.buttonSmall}>
         
          </Pressable>
        </View>
      </View>

      {/* Vacuna pendiente */}
      <View style={styles.card}>
        <Image source={require("../../assets/vaccine.png")} style={styles.icon} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Vacuna pendiente</Text>
          <Text style={styles.cardDetail}>Mayo 3, 2026</Text>
          <Text style={styles.cardDetail}>Vacuna para Milo</Text>
          <Pressable style={styles.buttonSmall}>
          
          </Pressable>
        </View>
      </View>

      {/* Cita cancelada */}
      <View style={styles.card}>
        <Image source={require("../../assets/cancel.png")} style={styles.icon} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Cita cancelada</Text>
          <Text style={styles.cardDetail}>Abril 20, 2026 - 09:00 AM</Text>
          <Text style={styles.cardDetail}>Consulta para Milo</Text>
          <Pressable style={styles.buttonSmall}>
            
          </Pressable>
        </View>
      </View>

      {/* Botón principal */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Actualizar</Text>
      </Pressable>
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
  buttonSmall: { backgroundColor: PRIMARY, padding: 8, borderRadius: 8, alignItems: "center", marginTop: 8, width: 120 },
  button: { backgroundColor: PRIMARY, padding: 15, borderRadius: 12, alignItems: "center", marginTop: 20, elevation: 3 },
  buttonText: { color: "#FFF", fontWeight: "bold", fontSize: 14 }
});

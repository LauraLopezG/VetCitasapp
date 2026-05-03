import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Home() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const cargarUsuario = async () => {
      const data = await AsyncStorage.getItem("user");

      if (data) {
        const usuario = JSON.parse(data);
        setUser(usuario);
      }
    };

    cargarUsuario();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Home</Text>

      {user && (
        <Text>Bienvenida {user.nombre}</Text>
      )}
    </View>
  );
}
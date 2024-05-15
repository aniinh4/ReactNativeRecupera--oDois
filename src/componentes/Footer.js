import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "../styles/Style";

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <footer>Rodapé!</footer>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

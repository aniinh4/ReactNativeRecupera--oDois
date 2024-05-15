import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "../styles/Style";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <header>Cabeçalho!</header>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "../styles/Style";

export default function Body() {
  return (
    <View style={styles.container}>
      <View styyle={styles.body}>
        <Text>Corpo!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

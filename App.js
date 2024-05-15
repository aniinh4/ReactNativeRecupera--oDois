import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Header from "./src/componentes/Header";
import Body from "./src/componentes/Body";
import Footer from "./src/componentes/Footer";
import styles from "./src/styles/Style";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
}

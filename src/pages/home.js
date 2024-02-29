import { StyleSheet, Text } from "react-native";
import Header from "../components/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQrCode } from "../store";

const HomePage = () => {
  const qrcode = useQrCode((state) => state.qrcode);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>{qrcode}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: "1%",
  },
});

export default HomePage;

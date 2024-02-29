import { useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera/next";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

import { useQrCode } from "../store";

const QrCodePage = () => {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const nivigation = useNavigation();
  const addQrCode = useQrCode((state) => state.addQrCode);

  const handleQrCode = (scanner) => {
    const { data } = scanner;
    addQrCode(data);
    nivigation.goBack();
  };

  return (
    <>
      <StatusBar animated style="light" />
      <View style={styles.container}>
        <CameraView
          style={styles.container}
          facing={facing}
          barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
          onBarcodeScanned={handleQrCode}
        >
          <TouchableOpacity
            onPress={() => nivigation.goBack()}
            style={{ paddingTop: 35, paddingLeft: 10 }}
          >
            <Entypo name="chevron-thin-left" size={24} color="#fff" />
          </TouchableOpacity>
        </CameraView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default QrCodePage;

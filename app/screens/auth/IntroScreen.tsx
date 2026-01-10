import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "@/constants/theme";

export default function IntroScreen() {
  // Use navigation prop with 'any' for simplicity
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Illustration Section */}
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB__lUtJ1Qw5p7_v45V80f9L3ebFWxMA0En0ItDRMn_z1kKkaFKYULDY-K4G_GPzdKkrlUyiivmjkxXbjDFt4BUTrx_Gc7rj9v8z-OIdkV_7bkXaZOnyhSxLeZ9Aan7T_DeCw4BPM-g50e4WGDH7zWYcZaU9TFQIJy1W8fp7yy631AUaGzxJkTF4MMl7t3gVVFVgKlMHUZSL7eu-F28LTfDO_QHOWGTMmph2LYGtUCO2grYIOlnqt0pmZV-CVMc6oKgH4Phm62Yhjw",
          }}
          style={styles.image}
          resizeMode="cover"
        >
          {/* Logo */}
          <View style={styles.logoMain}>
            {/* Logo */}
            <View style={styles.logoContainer}>
              <Image
                source={require("@/assets/images/farmpal-icon.png")}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>
            Welcome to <Text style={styles.brand}>FarmPal</Text>
          </Text>

          <Text style={styles.subtitle}>
            Manage your farm, track crops, animals, and reports effortlessly
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("CreateFarm")}
          >
            <Text style={styles.primaryButtonText}>Create Farm</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.secondaryButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>FarmPal v1.0</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F8F4",
  },

  imageContainer: {
    height: "45%",
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48,
    overflow: "hidden",
  },

  image: {
    flex: 1,
  },

  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 75,
    width: 120,
    height: 120,
    backgroundColor: "#E6F4EA",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },

  logoMain: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 75,
  },

  logo: {
    width: 200,
    height: 200,
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: "space-between",
    alignItems: "center",
  },

  textBlock: {
    alignItems: "center",
    maxWidth: 280,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#102210",
    textAlign: "center",
  },

  brand: {
    color: "#15803d",
  },

  subtitle: {
    fontSize: 16,
    color: "#6b7280",
    textAlign: "center",
    marginTop: 12,
    lineHeight: 22,
  },

  buttonGroup: {
    width: "100%",
    marginTop: 32,
  },

  primaryButton: {
    height: 56,
    borderRadius: 999,
    backgroundColor: "#102210",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  primaryButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
  },

  secondaryButton: {
    height: 56,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: Colors.light.darkGreen,
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryButtonText: {
    color: Colors.light.darkGreen,
    fontSize: 18,
    fontWeight: "700",
  },

  footer: {
    marginTop: 24,
    fontSize: 12,
    color: "#9ca3af",
  },
});
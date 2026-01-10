import CustomButton from "@/components/ui/CustomButton";
import InputContainer from "@/components/ui/InputContainer";
import { Colors } from "@/constants/theme";
import { useState, SetStateAction } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function CreateFarmScreen() {
    const [farmName, setFarmName] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [ownerEmail, setOwnerEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleCreateFarm = async () => {
        if (!farmName || !ownerName || !ownerEmail || !password || !confirmPassword) {
            Alert.alert("Error", "Please fill all fields");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match");
            return;
        }

        try {
            const role = "owner";

            // Create a new user in Firebase Authentication
            const userCredential = await auth().createUserWithEmailAndPassword(ownerEmail, password);
            const user = userCredential.user;

            // Create a new user in the database
            await firestore().collection('users').doc(user.uid).set({
                name: ownerName,
                email: ownerEmail,
                role,
                createdAt: firestore.FieldValue.serverTimestamp()
            });

            // Create a new farm in the database
            const farmRef = await firestore().collection('farms').add({
                farmName,
                ownerId: user.uid,
                createdAt: firestore.FieldValue.serverTimestamp(),
            });

            // Navigate to the Farmer's dashboard or login screen
            // router.push("/screens/farmer/FarmerDashboard");
            if (farmRef.id) {
                Alert.alert("Success", "Farm created successfully");
            }


        } catch (e: any) {
            const errorMessage = e.message || "An error occurred while creating the farm.";
            Alert.alert("Error", errorMessage);
        }
    };

    return (
        <View style={styles.container}>
            {/* Top Section */}
            <View style={styles.main}>
                {/* Logo */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require("@/assets/images/farmpal-icon.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>

                {/* Header */}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Create Farm</Text>
                    <Text style={styles.subtitle}>Enter farm and owner details</Text>
                </View>
            </View>

            {/* Form Section */}
            <View style={styles.formContainer}>
                {/* Farm Name */}
                <InputContainer
                    icon="home"
                    placeholder="Farm Name"
                    value={farmName}
                    onChangeText={(text: SetStateAction<string>) => setFarmName(text)}
                />

                {/* Owner Name */}
                <InputContainer
                    icon="person"
                    placeholder="Owner Name"
                    value={ownerName}
                    onChangeText={(text: SetStateAction<string>) => setOwnerName(text)}
                />

                {/* Owner Email */}
                <InputContainer
                    icon="email"
                    placeholder="Owner Email"
                    value={ownerEmail}
                    onChangeText={(text: SetStateAction<string>) => setOwnerEmail(text)}
                    autoCapitalize="none"
                />

                {/* Password */}
                <InputContainer
                    icon="lock"
                    placeholder="Password"
                    value={password}
                    onChangeText={(text: SetStateAction<string>) => setPassword(text)}
                    secureTextEntry
                />

                {/* Confirm Password */}
                <InputContainer
                    icon="lock"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={(text: SetStateAction<string>) => setConfirmPassword(text)}
                    secureTextEntry
                />

                {/* Create Farm Button */}
                <CustomButton
                    title="Create Farm"
                    onPress={handleCreateFarm}
                    buttonStyle={styles.createButton}
                    textStyle={styles.createButtonText}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    main: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 75,
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 75,
        width: 120,
        height: 120,
        backgroundColor: Colors.light.greenLight,
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    logo: {
        width: 200,
        height: 200,
    },
    textContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    title: {
        fontSize: 42,
        fontWeight: "bold",
        color: Colors.light.textPrimary,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: Colors.light.textSecondary,
        letterSpacing: 0.5,
    },
    formContainer: {
        padding: 20,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        marginTop: 20,
    },
    createButton: {
        backgroundColor: Colors.light.greenPrimary,
        padding: 12,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: 20,
    },
    createButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
});

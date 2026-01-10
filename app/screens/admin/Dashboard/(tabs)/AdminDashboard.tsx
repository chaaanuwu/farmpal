import { Text, View, StyleSheet, Alert, Image, ScrollView } from "react-native";
import auth from '@react-native-firebase/auth';
import { useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/theme";
import CustomButton from "@/components/ui/CustomButton";
import CustomCard from "@/components/ui/CustomCard";

export default function AdminDashboard() {
  const [name, setName] = useState<string>("");
  const [pfpUrl, setPfpUrl] = useState<string | null>(null);

  // Fetch user name from Firestore
  useEffect(() => {
    const uid = auth().currentUser?.uid;
    if (!uid) return;

    const unsubscribe = firestore()
      .collection('users')
      .doc(uid)
      .onSnapshot(doc => {
        if (doc.exists()) {
          setName(doc.data()?.name || "Admin");
          setPfpUrl(doc.data()?.pfpUrl || null);
        }
      });

    return () => unsubscribe();
  }, []);

  // Sign out function
  const signOut = async () => {
    try {
      await auth().signOut();
      Alert.alert('Success', 'You have been signed out');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to sign out');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Image
            source={pfpUrl ? { uri: pfpUrl } : require("@/assets/images/no-pfp.png")}
            style={styles.pfp}
          />
          <View style={styles.headerText}>
            <Text style={styles.headerTitle}>Admin</Text>
            <Text style={styles.headerSubtitle}>{name}</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Overview</Text>

          {/* Pending Farmers Card */}
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.addUserIcon}>
                <Ionicons name="person-add" size={20} color="#ffffff" />
              </View>
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>12 Farmers Pending</Text>
                <Text style={styles.cardSubtitle}>Waiting for approval</Text>
              </View>
              <CustomButton
                title="Review"
                onPress={() => { }}
                buttonStyle={styles.reviewButton}
              />
            </View>
          </View>

          {/* Stats Cards */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 8 }}>
            <CustomCard
              icon="people"
              title="Farmers"
              count={1250}
              percentageChange={5}
              percentArrowIcon="arrow-upward"
              percentContentColor="#34a853"
              percentViewColor="#e6f4ea"
            />
            <CustomCard
              icon="egg"
              title="Avg. Daily Prod."
              count={24950}
              percentageChange={-3}
              percentArrowIcon="arrow-downward"
              percentContentColor="#ea4335"
              percentViewColor="#fce8e6"
            />
          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  container: {
    flex: 1,
    padding: 12,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  pfp: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  headerText: {
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },

  divider: {
    height: 1,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#e0e0e0',
    marginVertical: 12,
  },

  content: {
    flex: 1,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    marginBottom: 12,
    color: '#111',
  },

  card: {
    backgroundColor: '#e6f4ea',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#34a853',
    marginHorizontal: 12,
    marginBottom: 16,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
  },
  addUserIcon: {
    height: 48,
    width: 48,
    borderRadius: 30,
    backgroundColor: '#34a853',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    flex: 1,
    marginLeft: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  reviewButton: {
    backgroundColor: Colors.light.greenPrimary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 6
  },
});

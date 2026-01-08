import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useEffect, useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((u) => {
      setUser(u);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { user, loading, auth: auth() };
}
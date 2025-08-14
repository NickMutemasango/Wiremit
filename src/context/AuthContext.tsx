"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/config/firebase";
import { User, onAuthStateChanged, updateProfile } from "firebase/auth";

type AppUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
  // Add other user properties you need
};

type AuthContextType = {
  user: AppUser | null;
  loading: boolean;
  updateUserProfile: (displayName: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  updateUserProfile: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  const updateUserProfile = async (displayName: string) => {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName });
      setUser({
        ...user!,
        displayName
      });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
};
import { writable } from "svelte/store";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut, type User } from "firebase/auth";
import { goto } from "@mateothegreat/svelte5-router";

// Firebase-Initialisierung
const firebaseConfig = {
    apiKey: "AIzaSyCCrFB6dX0nF5Zw9CFvx29bhAWGHYQN8f0",
    authDomain: "needit-57cbb.firebaseapp.com",
    projectId: "needit-57cbb",
    storageBucket: "needit-57cbb.firebasestorage.app",
    messagingSenderId: "212137337906",
    appId: "1:212137337906:web:ce70a791ebdbc97e7a082b",
    measurementId: "G-SMQ12FXZ82",
};

// Firebase-Instanz
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Erstelle einen reaktiven Store für den Nutzerstatus
export const user = writable<User | null>(null);

// Auth-Status überwachen
onAuthStateChanged(auth, (firebaseUser) => {
    user.set(firebaseUser);
    if (!firebaseUser) {
        goto("/login");
    }
});

// Logout-Funktion exportieren
export async function logout() {
    try {
        await signOut(auth);
        goto("/login");
    } catch (error) {
        console.error("Logout fehlgeschlagen", error);
    }
}
<script lang="ts">
    import {
        getAuth,
        GoogleAuthProvider,
        signInWithPopup,
        onAuthStateChanged,
    } from "firebase/auth";
    import { goto } from "@mateothegreat/svelte5-router";
    import { onMount } from "svelte";

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    // Überprüfung, ob der Nutzer bereits eingeloggt ist
    onMount(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                goto("/");
            }
        });
    });

    //Login mit Google
    async function loginWithGoogle() {
        try {
            await signInWithPopup(auth, provider);
            goto("/");
        } catch (error) {
            console.error("Login fehlgeschlagen", error);
        }
    }
</script>

<main class="flex h-screen flex-col items-center justify-center">
    <h1 class="mb-4 text-2xl font-bold">Login</h1>
    <button class="rounded bg-blue-500 px-4 py-2 text-white" on:click={loginWithGoogle}>
        Mit Google anmelden
    </button>
</main>

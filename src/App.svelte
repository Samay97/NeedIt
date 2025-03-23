<script lang="ts">
    import { Router, type RouteConfig } from "@mateothegreat/svelte5-router";
    import { ModeWatcher } from "mode-watcher";
    import Home from "./views/Home.svelte";
    import Settings from "./views/Settings.svelte";
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    const firebaseConfig = {
        apiKey: "AIzaSyCCrFB6dX0nF5Zw9CFvx29bhAWGHYQN8f0",
        authDomain: "needit-57cbb.firebaseapp.com",
        projectId: "needit-57cbb",
        storageBucket: "needit-57cbb.firebasestorage.app",
        messagingSenderId: "212137337906",
        appId: "1:212137337906:web:ce70a791ebdbc97e7a082b",
        measurementId: "G-SMQ12FXZ82",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const routes: RouteConfig[] = [
        {
            component: Home,
        },
        {
            path: "settings",
            component: Settings,
        },
    ];
</script>

<ModeWatcher />
<Router {routes} />

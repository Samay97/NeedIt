<script lang="ts">
    import { Router, type RouteConfig } from "@mateothegreat/svelte5-router";
    import { ModeWatcher } from "mode-watcher";
    import Home from "./views/Home.svelte";
    import Settings from "./views/Settings.svelte";
    import Login from "./views/Login.svelte";
    import { user, logout } from "./stores/authStore";

    const routes: RouteConfig[] = [
        { path: "/", component: Home },
        { path: "settings", component: Settings },
        { path: "login", component: Login },
    ];
</script>

<!-- TODO: Logout in Menu einbauen -->
<header class="bg-gray-800 text-white p-4 flex justify-between">
    <h1 class="text-lg font-bold">NeedIt</h1>
    {#if $user}
        <button class="bg-red-500 px-4 py-2 rounded" on:click={logout}>Logout</button>
    {/if}
</header>

<ModeWatcher />
<Router {routes} />
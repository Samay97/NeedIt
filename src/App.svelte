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
<header class="flex justify-between bg-gray-800 p-4 text-white">
    <h1 class="text-lg font-bold">NeedIt</h1>
    {#if $user}
        <button class="rounded bg-red-500 px-4 py-2" on:click={logout}>Logout</button>
    {/if}
</header>

<ModeWatcher />
<Router {routes} />

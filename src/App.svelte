<script lang="ts">
    import { Router, type RouteConfig } from "@mateothegreat/svelte5-router";
    import { ModeWatcher } from "mode-watcher";
    import Home from "./views/Home.svelte";
    import Settings from "./views/Settings.svelte";

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

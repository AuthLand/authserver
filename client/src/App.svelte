<script>
  import AuthForm from "./components/AuthForm.svelte";
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import Auth from "./pages/Auth.svelte";
  import Dashboard from "./pages/Dashboard.svelte";

  import { user } from "./store.js";

  const routes = {
    "/": Home,
    "/auth": Auth,
    "/admin": Dashboard,
  };
</script>

<Router {routes} />

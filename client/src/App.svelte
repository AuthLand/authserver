<script>
  
  import AuthForm from "./components/AuthForm.svelte";
  import Router from "svelte-spa-router";
  import { push } from 'svelte-spa-router';
  import Nav from './components/Nav.svelte';
  import Home from "./pages/Home.svelte";
  import Auth from "./pages/Auth.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import AdminConsole from './pages/AdminConsole.svelte';

  import { user } from "./store.js";

  const routes = {
    "/": Home,
    "/auth": Auth,
    "/mypage": Dashboard,
    "/admin": AdminConsole,
  };

</script>
<Nav {routes}/>
<Router {routes} />

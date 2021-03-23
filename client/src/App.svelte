<script> 
  import AuthForm from './components/AuthForm.svelte';
  import router from 'svelte-spa-router';

  let username;
  let password;
  let button;
</script>


<AuthForm {username} {password} {button}/>
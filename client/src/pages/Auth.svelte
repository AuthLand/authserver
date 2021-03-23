<script> 
    import AuthForm from '../components/AuthForm.svelte';

    let username;
    let password;
    let button;
</script>

<AuthForm {username} {password} {button}/>
<script>

    import axios from 'axios';
    import base64 from 'base-64';
    
    export let username = '';
    export let password = '';
    export let button = 'signup';
    
    
    async function signup() {
        console.log('IM INSIDE THE SIGNUP');
        let user = {
            username:username,
            password:password,
        };
        let result = await axios.post('http://localhost:3030/signup', user)
        console.log('user',result);

    }

    async function signin(){
       let base = base64.encode(`${username}:${password}`);

       let result = await axios.post('http://localhost:3030/signin', base, { headers: {'Authorization': `Basic ${base}`} });
        console.log('SIGNED IN USER', result);
    }

    function changeButton(){
        console.log('BUTTON IS CLICKED');
        console.log('button: ', button);
        button === 'signup' ? button = 'singin' : button = 'singup';
    };

    
</script>
<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
        <div>
            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {#if button === 'signup'}
                     SignUP!
                {:else}
                    Log In!
                {/if}
            </h2>

        </div>
        <form on:submit|preventDefault={button == 'signup' ? signup : signin } class="mt-8 space-y-6" method="POST">
            
            <div class="rounded-md shadow-sm -space-y-px">
                <div>
                    <label for="username" class="sr-only">Username</label>
                    <input type="text" bind:value={username} required 
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username">
                </div>
                <div>
                    <label class="sr-only">Password</label>
                    <input type="password" bind:value={password} required 
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
                </div>
            </div>

            <div>
                {#if button === 'signup'}
                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                          
                            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        Sign up
                    </button>

                    <div on:click={changeButton}> Already have an account? Log In </div>
                {:else}
                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                       
                        <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    Log In
                </button>
                <div on:click={changeButton}> Need to sign up? Sign Up</div>
                    
                {/if}
               {username}
               {password}
            </div>

        </form>
    </div>
</div>
<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  import { user, allUsers } from "../store.js";
  import { push } from 'svelte-spa-router';
  

  import Member from '../components/Member.svelte';



  onMount(async () => {
    if(!$user) {
      return push('/');
    }

    let options = {
      headers: { Authorization: `Bearer ${$user.token}` }
    }
    const result = await axios.get('http://localhost:3030/admin', options);
    if(result.data.message !== 'Access Granted'){
      return push('/')
    } else {
      let users = await axios.get('http://localhost:3030/get-users');
      $allUsers = users.data;
    }
    
  })
</script>



<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
      </div>
      
      {#each $allUsers as member}
        <Member {member}/>
      {/each}
      
      
    </div>
</section>
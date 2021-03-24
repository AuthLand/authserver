<script>
  export let member;
  import axios from 'axios';

  const deleteUser = async () => {
    let bye = member._id
    let result = await axios.delete(`http://localhost:3030/delete/${bye}`);
    alert(`${result.data.message}`);

  }

</script>
        
        
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98">
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">{member.username}</h2>
              <p class="text-gray-500">{member.role}</p>
              <div on:click|preventDefault={deleteUser} class="flex justify-items-end"> ❌ </div>
            </div>
          </div>
        </div>
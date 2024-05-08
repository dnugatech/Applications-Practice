<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
        <div>
          <h1>Register</h1>
          <form @submit.prevent="clinicdatabase">
            <input type="text" v-model="username" placeholder="Username" required><br>
            <input type="email" v-model="email" placeholder="Email" required><br>
            <input type="password" v-model="password" placeholder="Password" required><br>
            <button type="submit">Register</button>
          </form>
        </div>
</template>
      
    <script>
      export default {
        data() {
          return {
            username: '',
            email: '',
            password: ''
          };
        },
        methods: {
          async registerUser() {
            try {
              const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  username: this.username,
                  email: this.email,
                  password: this.password
                })
              });
              const data = await response.json();
              console.log(data); // You can handle the response here, e.g., redirect to login page
            } catch (error) {
              console.error('Error:', error);
            }
          }
        }
      };
    </script>  
  

  
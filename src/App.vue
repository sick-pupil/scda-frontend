<template>
    <div id="app">
        <router-view />
        <!-- <router-link to="/dashboard">Go to Dashboard</router-link>
        <router-link to="/login">Go to Login</router-link> -->
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld
    }
}
</script>

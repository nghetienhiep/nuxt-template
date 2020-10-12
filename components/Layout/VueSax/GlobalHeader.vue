<template>
    <div class="vue-sax-header">
        <header-nav-bar :active-sidebar.sync="activeSidebar" />
        <header-sidebar v-model="activeSidebar" />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderNavBar: () => import('./Header/NavBar'),
            HeaderSidebar: () => import('./Header/Sidebar'),
        },
        data() {
            return {
                activeSidebar: false,
            };
        },
    };
</script>

<template>
    <!--    <buefy-layout />-->
    <vue-sax-layout />
</template>

<script>
    export default {
        name: 'DefaultLayout',
        components: {
            // BuefyLayout: () => import('components/Layout'),
            VueSaxLayout: () => import('components/Layout/VueSax'),
        },
    };
</script>

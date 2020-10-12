<template>
    <div class="vue-sax-layout">
        <global-header />
        <global-body>
            <nuxt />
        </global-body>
    </div>
</template>

<script>
    export default {
        name: 'VueSaxLayout',
        components: {
            GlobalHeader: () => import('./GlobalHeader'),
            GlobalBody: () => import('./GlobalBody'),
        },
    };
</script>

<style scoped></style>

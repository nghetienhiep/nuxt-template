<template>
    <buefy-layout>
        <nuxt />
    </buefy-layout>
</template>

<script>
    export default {
        name: 'DefaultLayout',
        components: {
            BuefyLayout: () => import('components/Layout/Buefy'),
        },
        head: {
            bodyAttrs: {
                class: 'flat-style',
            },
        },
    };
</script>

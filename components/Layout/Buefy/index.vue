<template>
    <div>
        <global-header />
        <div class="container">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BuefyLayout',
        components: {
            GlobalHeader: () => import('./GlobalHeader'),
        },
    };
</script>

<style scoped></style>

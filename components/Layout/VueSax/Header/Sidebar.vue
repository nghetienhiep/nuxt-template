<template>
    <vs-sidebar absolute square :open.sync="activeSidebar">
        <template #logo>
            <logo />
        </template>
        <vs-sidebar-item id="home">
            <template #icon>
                <i class="bx bx-home"></i>
            </template>
            Home
        </vs-sidebar-item>
        <vs-sidebar-group>
            <template #header>
                <vs-sidebar-item arrow>
                    <template #icon>
                        <i class="bx bx-group"></i>
                    </template>
                    Social media
                </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="Instagram">
                <template #icon>
                    <i class="bx bxl-instagram"></i>
                </template>
                Instagram
            </vs-sidebar-item>
        </vs-sidebar-group>
    </vs-sidebar>
</template>

<script>
    export default {
        name: 'GlobalSidebar',
        components: {
            Logo: () => import('../Tools/Logo'),
        },
        props: {
            value: {
                type: Boolean,
                default: false,
                required: true,
            },
        },
        computed: {
            activeSidebar: {
                get() {
                    return this.value;
                },
                set(val) {
                    this.$emit('input', val);
                },
            },
        },
    };
</script>

<style scoped></style>

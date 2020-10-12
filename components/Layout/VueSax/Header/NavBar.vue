<template>
    <vs-navbar
        v-model="active"
        square
        shadow
        padding-scroll
        center-collapsed
        class="vue-sax-navbar"
    >
        <template #left>
            <logo class="vue-sax-navbar__logo" />
            <vs-button
                class="vue-sax-navbar__sidebar-button"
                flat
                icon
                @click="onActiveSidebar"
            >
                <i class="bx bx-menu"></i>
            </vs-button>
        </template>
        <vs-navbar-item id="home" :active="active === 'home'">
            {{ $t('Home') }}
        </vs-navbar-item>
        <vs-navbar-item id="blog" :active="active === 'blog'">
            Blog
        </vs-navbar-item>
        <vs-navbar-item id="contact" :active="active === 'contact'">
            {{ $t('Contact') }}
        </vs-navbar-item>
        <vs-navbar-item id="aboutUs" :active="active === 'aboutUs'">
            aboutUs
        </vs-navbar-item>
        <vs-navbar-item id="1" :active="active === '1'">
            aboutUs
        </vs-navbar-item>
        <vs-navbar-item id="2" :active="active === '2'">
            Group items

            <div slot="submenu">
                <vs-navbar-item index="2.1">
                    <a href="#">Home</a>
                </vs-navbar-item>
                <vs-navbar-item index="2.2">
                    <a href="#">News</a>
                </vs-navbar-item>
                <vs-navbar-item index="2.3">
                    <a href="#">Update</a>
                </vs-navbar-item>
            </div>
        </vs-navbar-item>
        <template #right>
            <vs-button flat>{{ $t('LogIn') }}</vs-button>
            <vs-button>{{ $t('SignUp') }}</vs-button>
        </template>
    </vs-navbar>
</template>

<script>
    export default {
        name: 'GlobalNavBar',
        components: {
            Logo: () => import('../Tools/Logo'),
        },
        props: {
            activeSidebar: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                active: 'home',
            };
        },
        mounted() {},
        methods: {
            onActiveSidebar() {
                this.$emit('update:activeSidebar', !this.activeSidebar);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .vue-sax-navbar {
        position: fixed;
    }

    .vue-sax-navbar__sidebar-button {
        display: none;
    }

    @media (max-width: 1000px) {
        .vue-sax-navbar__sidebar-button {
            display: block;
        }
    }
</style>

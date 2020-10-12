<template>
    <b-navbar wrapper-class="container" type="is-dark" fixed-top shadow>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://nuxtjs.org/logos/nuxt.svg"
                    alt=""
                    style="height: 50px"
                />
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item
                tag="router-link"
                :to="{ path: '/' }"
                class="navbar-menu-item"
            >
                {{ $t('Home') }}
            </b-navbar-item>
            <b-navbar-item
                tag="router-link"
                :to="{ path: '/blog' }"
                class="navbar-menu-item"
            >
                Blog
            </b-navbar-item>
            <b-navbar-item
                tag="router-link"
                :to="{ path: '/contact' }"
                class="navbar-menu-item"
            >
                {{ $t('Contact') }}
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <user-actions />
                <languages style="margin-left: 5px" />
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
    export default {
        name: 'GlobalHeader',
        components: {
            Languages: () => import('./Tools/Languages'),
            UserActions: () => import('./Tools/UserLogin/UserActions'),
        },
        data() {
            return {};
        },
    };
</script>

<style scoped lang="scss">
    .navbar-menu-item {
        font-weight: 600;
    }
</style>

<style lang="scss">
    .navbar-menu-item.nuxt-link-active.nuxt-link-exact-active {
        background-color: #fafafa;
        color: $primary;
    }
</style>

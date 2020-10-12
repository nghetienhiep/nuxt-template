<template>
    <div class="user-actions">
        <b-button type="is-primary" @click="onOpenUserLoginModal">
            <strong>
                {{ $t('SignUp') }}
            </strong>
        </b-button>
        <b-button type="is-primary" inverted @click="onOpenUserLoginModal">
            {{ $t('SignIn') }}
        </b-button>
    </div>
</template>

<script>
    export default {
        name: 'UserActions',
        methods: {
            onOpenUserLoginModal() {
                this.$buefy.modal.open({
                    parent: this,
                    component: () => import('./UserLoginForm'),
                    hasModalCard: true,
                    trapFocus: true,
                    customClass: 'modal-light',
                });
            },
        },
    };
</script>

<style scoped></style>

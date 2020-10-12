<template>
    <a class="is-text button" style="padding: 5px" @click="openModal">
        <img
            v-if="$i18n.locale === 'vi'"
            src="../../../../../assets/images/locales/vi-VN.svg"
            alt=""
        />
        <img
            v-else-if="$i18n.locale === 'en'"
            src="../../../../../assets/images/locales/en-US.svg"
            alt=""
        />
    </a>
</template>

<script>
    export default {
        name: 'Languages',
        methods: {
            openModal() {
                this.$buefy.modal.open({
                    parent: this,
                    component: () => import('./ModalContent'),
                    hasModalCard: true,
                    trapFocus: true,
                });
            },
        },
    };
</script>

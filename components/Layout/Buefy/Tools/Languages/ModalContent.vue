<template>
    <div class="languages-modal-content">
        <div
            class="languages-modal-content__item"
            @click="onSelectLanguage('vi')"
        >
            <img
                src="../../../../../assets/images/locales/vi-VN.svg"
                :alt="$t('Vietnamese')"
            />
            <span>{{ $t('Vietnamese') }}</span>
        </div>
        <div
            class="languages-modal-content__item"
            @click="onSelectLanguage('en')"
        >
            <img
                src="../../../../../assets/images/locales/en-US.svg"
                :alt="$t('English')"
            />
            <span>{{ $t('English') }}</span>
        </div>
    </div>
</template>

<script>
    import { locales } from 'packages/localization/constant';

    export default {
        name: 'ModalContent',
        methods: {
            onSelectLanguage(locale) {
                if (this.$i18n.locale !== locale) {
                    this.$buefy.config.setOptions({
                        defaultLocale: locales[locale].iso,
                    });
                    this.$router.push(this.switchLocalePath(locale));
                }
                this.$emit('close');
            },
        },
    };
</script>

<style scoped lang="scss">
    .languages-modal-content {
        text-align: center;
        position: relative;
        z-index: 1;

        .languages-modal-content__item {
            cursor: pointer;

            display: inline-block;
            padding: $gap;
            width: 130px;
            border-radius: $radius;

            transition: all 0.2s ease-in-out;

            span,
            img {
                display: block;
                margin: 0 auto;
            }

            img {
                height: 60px;
            }

            span {
                line-height: 30px;
                color: $text-light;
                font-weight: bold;

                visibility: hidden;
                opacity: 0;
                transition: all 0.2s ease-in-out;
            }
            &:hover {
                background-color: $background-light;
                span {
                    color: $primary;
                    visibility: visible;
                    opacity: 1;
                    margin-top: $gap;
                }
            }
        }
    }
</style>

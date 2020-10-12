<template>
    <i
        v-if="name"
        :style="styleBind"
        :class="[name, 'nth-icon', spinning && 'loading']"
    >
        <svg-icon :name="name" />
    </i>
</template>

<script>
    export default {
        name: 'NthIcon',
        props: {
            name: {
                type: String,
                default: null,
            },
            size: {
                type: [Number, String],
                default: 16,
            },
            spinning: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            styleBind() {
                if (this.size === 'auto') return {};
                return {
                    width: `${this.size}px`,
                    height: `${this.size}px`,
                };
            },
        },
    };
</script>

<style scoped lang="scss">
    .nth-icon {
        display: inline-block;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-style: normal;
        font-variant: normal;
        line-height: 1;
        color: inherit;
        text-align: center;
        text-transform: none;
        vertical-align: -0.125em;
        text-rendering: optimizeLegibility;
        svg {
            fill: currentColor;
            stroke: none;
            display: inline-block;
            width: 100%;
            height: 100%;
        }
        > * {
            line-height: 1;
        }
    }

    .loading {
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
    }

    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>

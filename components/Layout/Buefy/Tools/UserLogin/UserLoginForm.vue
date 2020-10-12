<template>
    <form action="" class="modal-container user-login-form">
        <div class="modal-card" style="width: auto">
            <h1>{{ $t('Welcome') }}</h1>
            <section class="modal-card-body">
                <b-field :label="$t('Account')" :label-position="labelPosition">
                    <b-input
                        type="email"
                        :value="email"
                        :placeholder="$t('YourEmail')"
                        required
                    >
                    </b-input>
                </b-field>

                <b-field
                    :label="$t('Password')"
                    :label-position="labelPosition"
                >
                    <b-input
                        type="password"
                        :value="password"
                        password-reveal
                        :placeholder="$t('YourPassword')"
                        required
                    >
                    </b-input>
                </b-field>

                <b-checkbox>{{ $t('RememberMe') }}</b-checkbox>
                <b-button type="is-primary" expanded class="user-login-button">
                    {{ $t('SignIn') }}
                </b-button>
            </section>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'UserLoginForm',
        data() {
            return {
                email: '',
                password: '',
                labelPosition: 'on-border',
            };
        },
    };
</script>

<style scoped lang="scss">
    .user-login-form {
        max-width: 400px;
        h1 {
            margin: $gap-24 $gap $gap $gap;
            font-weight: 600;
            text-align: center;
        }
    }
    .user-login-button {
        margin-top: $gap;
    }
</style>

import { ConfigProgrammatic } from 'buefy';
import { cookies } from 'packages/cookies/constant';

export default function ({ $cookies }) {
    ConfigProgrammatic.setOptions({
        defaultLocale: $cookies.get(cookies.LOCALE),
    });
}

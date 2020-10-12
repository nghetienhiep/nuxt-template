const cookies = {
    ACCESS_TOKEN: `${
        process.env.ENV && process.env.ENV.toUpperCase()
    }_ACCESS_TOKEN`,
    LOCALE: `LOCALE`,
};

module.exports = cookies;

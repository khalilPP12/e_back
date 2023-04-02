'use strict';

/**
 * mailling service
 */
const toEmail = process.env.TOEMAIL;
const welcome = process.env.WELCOME;

module.exports = () => ({
    async create(data) {
        const response = await strapi.entityService.create("api::mailling.mailling", {
            data,
        });
        strapi
            .service("api::maailling.sendmail")
            .send(
                welcome,
                toEmail,
                "Welcome",
                `A product has been created ${entity.name}`
            );
        return response;
    },
});

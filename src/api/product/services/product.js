
const toEmail = process.env.TOEMAIL;
const welcome = process.env.WELCOME;
module.exports = {
    async create(data) {
        const response = await strapi.entityService.create("api::product.product", {
            data,
        });
        strapi
            .service("api::comment.sendmail")
            .send(
                welcome,
                toEmail,
                "Welcome",
                `A product has been created ${entity.name}`
            );
        return response;
    },
};
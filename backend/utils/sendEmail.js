var postmark = require("postmark");
let client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

const sendEmail = async (options) => client.sendEmailWithTemplate(
    {
        TemplateId: options.templateId,
        From: process.env.POSTMARK_MAIL,
        To: options.email,
        TemplateModel: {
            "name": options.data.name,
            "product_name": options.data.product_name,
            "action_url": options.data.reset_url
        }
    }
).then(response => {
    console.log("Sending message");
    console.log(response.To);
    console.log(response.Message);
});


module.exports = sendEmail;

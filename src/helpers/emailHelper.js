const mailjet        = require ('node-mailjet');
const mailConnection = mailjet.apiConnect(process.env.EMAIL_API_KEY, process.env.EMAIL_API_SECRET);

const sendEmailHtml = (emailFrom, nameFrom, emailTo, nameTo, subject, htmlContent, result, error) =>
{
    const request = mailConnection
        .post("send", {'version': 'v3.1'})
        .request({
            "Messages":
            [{ 
                "From": { "Email": emailFrom, "Name": nameFrom },
                "To": [ { "Email": emailTo  , "Name": nameTo   } ],
                "Subject": subject,
                "HTMLPart": htmlContent
            }]
        });
  
    request
        .then((res) => {
            const r = 
                `
                {
                    "status": "${res.response.status}",
                    "statusText": "${res.response.statusText}"
                }`;
            result(r);
        })
        .catch((err) => error(err));
};

module.exports = { sendEmailHtml };

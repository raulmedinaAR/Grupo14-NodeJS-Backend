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

/*
   // EJEMPLO DE ENVIO DE EMAIL

    require('./helpers/emailHelper').sendEmailHtml
    (
        'raul.medina@gmail.com', 
        'Servidor', 
        'raul@medina.net.ar', 
        'Raul el que recibe', 
        'Respuesta del servidor', 
        `<br><br><br><h1><center><b>Servidor activo!!!</b></center></h1>`, // Cuerpo del email
        (result) => {
            confirm.log('Email enviado correctamente', result);
        }, 
        (error) => {
            console.log('Error al enviar el email.', error);
        }
    );
*/

module.exports = { sendEmailHtml };

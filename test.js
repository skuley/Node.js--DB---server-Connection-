const nodemailer = require('nodemailer');
const email = {
    // 계정 관리자급 ...?
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3be62cbd197f0d",
      pass: "061e486efad41b"
    }
}

const send = async(option) => {

    nodemailer.createTransport(email).sendMail(option,(error, info) => {
        if(error) {
            console.log(error);
        }else {
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from : 'skuleyandpotato@gmail.com',
    to : 'skuleyandpotato@gmail.com',
    subject : '노드메일러 테스트입니다.',
    text : 'nodejs mailer 성공적으로 작업 완료'
}

send(email_data);
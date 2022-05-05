import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "27ebd1b7096a4b",
      pass: "167002ab08081e"
    }
  });

  
export class NodemailerMaildAdapter implements MailAdapter {
    async sendMail({subject, body }: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Gabriel Manassés <gabrielmanasses13@gmail.com>',
            subject: subject,
            html: body,
        })
    }
}
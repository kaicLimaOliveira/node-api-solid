import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';

export class MailtrapMailProvider implements IMailProvider {
  private transporter;
  
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 465,
      auth: {
        user: '00bf97ef08b6a8',
        pass: 'a37eb1741239b5'
      }
    })
  }

  async sendEmail(message: IMessage): Promise<void> {
    await this.transporter.sendEmail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    })
  }
}
"use server";

import { EmailTemplate } from './EmailTemplate';
import { Resend } from 'resend';
import { ContactFormData } from '@/types';

export const POST = async ({
    email,
    firstName,
    lastName,
    phoneNumber,
    company,
    service,
    description,
}: ContactFormData)  => {
  try {    
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: 'Info <info@nitidaproject.it>',
      to: [process.env.MAIL_TO ?? "", process.env.MAIL_MAIN ?? ""],
      subject: "🚀🚀 Nuova richiesta info da nitidaproject.it",
      react: EmailTemplate({ firstName, lastName, email, phoneNumber, company, service, description }),
    });

    if (error) {
      console.error('Error in POST action:', error);
      return { success: false, data: data, error: error };
    }

    return { success: true, data: data };
  } catch (error) {
    console.error('Error catched in POST action:', error);
    return { success: false, data: null, error: error };
  }
}
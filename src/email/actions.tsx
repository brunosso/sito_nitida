import { EmailTemplate } from './EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const POST = async ({
    email,
    firstName,
    lastName,
    phoneNumber,
    description,
    eventName,
}: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    description: string;
    eventName: string;
}) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [process.env.MAIL_TO ?? "", process.env.MAIL_MAIN ?? ""],
      subject: 'Hello world',
      react: EmailTemplate({ firstName, lastName, email, phoneNumber, description, eventName }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
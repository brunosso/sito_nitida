interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  description: string;
  eventName: string;
}

export function EmailTemplate({ firstName, lastName, email, phoneNumber, description, eventName }: EmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {firstName} {lastName}!</h1>
      <p>Email: {email}</p>
      <p>Phone: {phoneNumber}</p>
      <p>Description: {description}</p>
      <p>Event Name: {eventName}</p>
    </div>
  );
}
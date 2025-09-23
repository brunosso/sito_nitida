import { ContactFormData } from '@/types';

export function EmailTemplate({ firstName, lastName, email, phoneNumber, company, service, description }: ContactFormData) {
  return (
    <div>
      <h1>Richiesta info da {firstName} {lastName}!</h1>
      <p>Email: {email}</p>
      <p>Telefono: {phoneNumber}</p>
      <p>Azienda: {company}</p>
      <p>Servizio: {service ?? "/"}</p>
      <p>Messaggio: {description}</p>
    </div>
  );
}
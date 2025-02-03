import { ContactEmailTemplateProps } from "@/types";

export function ContactEmailTemplate({
  firstName,
  lastName,
  email,
  company,
  jobTitle,
  phoneNumber,
  needs,
}: ContactEmailTemplateProps) {
  return (
    <div>
      <h2>New Contact Form Submission</h2>
      <p>
        <strong>Name:</strong> {firstName} {lastName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Company:</strong> {company}
      </p>
      <p>
        <strong>Job Title:</strong> {jobTitle}
      </p>
      <p>
        <strong>Phone Number:</strong> {phoneNumber}
      </p>
      <p>
        <strong>Message:</strong> {needs}
      </p>
    </div>
  );
}

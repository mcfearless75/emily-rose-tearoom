import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Emily Rose Tearoom website.",
};

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 prose prose-stone">
      <h1 className="font-serif text-4xl text-rose-800 mb-6">Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString("en-GB")}</p>
      <p>Emily Rose Tearoom (“we”) is committed to protecting your personal data in line with UK GDPR and the Data Protection Act 2018.</p>
      <h2>What we collect</h2>
      <p>When you use our contact form we collect your name, email address, phone number (optional) and the message you send. We use this solely to respond to your enquiry.</p>
      <h2>How we use it</h2>
      <p>We process your data on the basis of legitimate interest (responding to enquiries) or consent. We do not share your data with third parties except where required to send the email (e.g. our email service provider).</p>
      <h2>Retention</h2>
      <p>Enquiry data is kept only as long as needed to handle your request and any follow-up.</p>
      <h2>Your rights</h2>
      <p>You have the right to access, correct, or request deletion of your personal data. Contact us at the phone number on this site.</p>
      <h2>Contact</h2>
      <p>Emily Rose Tearoom, 36 Fobbing Road, Corringham, Essex SS17 9BG. Phone: 07564 840771.</p>
    </div>
  );
}

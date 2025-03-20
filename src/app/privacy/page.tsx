import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for GridScout",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="prose prose-invert mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold md:text-4xl">
          Privacy Policy for GridScout
        </h1>
        <p className="text-lg text-gray-300">Last updated: 20/02/2025</p>

        <h2 className="mt-8 text-2xl font-semibold">1. Introduction</h2>
        <p>
          This Privacy Policy explains how GridScout (“we”, “us”, or “our”)
          collects, uses, and discloses information when you use our Discord
          Bot. By using GridScout, you agree to the practices described in this
          Privacy Policy.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          2. Information We Collect
        </h2>
        <p>
          <strong>User-Provided Information:</strong> We may collect information
          that you voluntarily provide when using the Bot (e.g. through commands
          or interactions), such as your Discord user ID and username.
        </p>
        <p>
          <strong>Usage Data:</strong> We may collect anonymous usage statistics
          (e.g. command usage, interaction times) to help us improve the
          service.
        </p>
        <p>
          <strong>Log Data:</strong> Standard log data (e.g. timestamps, error
          logs) may be automatically recorded when you interact with GridScout.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          3. How We Use Your Information
        </h2>
        <p>
          <strong>Service Operation:</strong> To operate, maintain, and improve
          GridScout.
        </p>
        <p>
          <strong>Support:</strong> To provide support and communicate updates
          or changes to the Bot.
        </p>
        <p>
          <strong>Analysis:</strong> To perform analytics and gather insights
          into how the Bot is used, thereby improving the user experience.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          4. Sharing Your Information
        </h2>
        <p>
          <strong>Third Parties:</strong> We do not sell or rent your personal
          data to third parties.
        </p>
        <p>
          <strong>Legal Requirements:</strong> We may disclose your information
          if required to do so by law or in response to a valid legal request.
        </p>
        <p>
          <strong>Service Providers:</strong> We may share anonymised or
          aggregated data with trusted third parties to assist in the operation
          or improvement of the Bot.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">5. Data Security</h2>
        <p>
          We implement reasonable administrative, technical, and physical
          measures to protect your information from unauthorised access,
          alteration, or disclosure. However, no method of transmission over the
          Internet or electronic storage is entirely secure.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">6. Data Retention</h2>
        <p>
          Your personal data will be retained only as long as necessary to
          fulfil the purposes outlined in this Privacy Policy or as required by
          applicable laws. Once data is no longer needed, it will be securely
          deleted or anonymised.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">7. Your Rights</h2>
        <p>
          <strong>Access & Correction:</strong> You have the right to access and
          correct any personal data we hold about you.
        </p>
        <p>
          <strong>Deletion:</strong> You may request the deletion of your
          personal data, subject to legal or operational requirements.
        </p>
        <p>
          <strong>Opt-Out:</strong> You may choose to stop using GridScout at
          any time, which will result in the cessation of data collection
          associated with your interactions.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">8. Children’s Privacy</h2>
        <p>
          GridScout is not intended for use by children under 13. We do not
          knowingly collect personal data from individuals under this age. If
          you believe that a child has provided us with personal data, please
          contact us immediately.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          9. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. When significant
          changes are made, we will post a notice on our Discord server or
          website. Your continued use of GridScout after such changes will
          constitute your acceptance of the updated policy.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">10. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy, please contact us at:
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:max@maxmoon.sh">max@maxmoon.sh</a>
          <br />
          <strong>Discord:</strong> immaxm
        </p>

        <div className="mt-12 border-t border-gray-700 pt-6">
          <p>
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            •{" "}
            <Link href="/" className="text-primary hover:underline">
              Return to Homepage
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

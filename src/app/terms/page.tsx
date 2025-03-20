import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for GridScout",
};

export default function TermsOfServicePage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="prose prose-invert mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold md:text-4xl">
          Terms of Service for GridScout
        </h1>
        <p className="text-lg text-gray-300">Last updated: 20/02/2025</p>

        <h2 className="mt-8 text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p>
          By accessing or using GridScout (“the Bot”), you agree to be bound by
          these Terms of Service (“Terms”). If you do not agree to these Terms,
          please do not use the Bot.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          2. Description of the Service
        </h2>
        <p>
          GridScout is a Discord Bot that delivers statistics and information on
          Formula 1 drivers and related content. We reserve the right to modify
          or discontinue the Bot (or any part thereof) at any time without prior
          notice.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">3. Eligibility</h2>
        <p>
          The Bot is available to users who are at least 13 years old. By using
          GridScout, you represent and warrant that you meet this age
          requirement and have the necessary authority to agree to these Terms.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">4. User Conduct</h2>
        <p>
          <strong>Compliance with Discord:</strong> You must adhere to Discord’s
          Terms of Service and Community Guidelines when using GridScout.
        </p>
        <p>
          <strong>Prohibited Activities:</strong> You agree not to:
        </p>
        <ul className="list-disc pl-6">
          <li>Use the Bot for any unlawful purpose.</li>
          <li>Abuse, harass, or otherwise misuse the Bot.</li>
          <li>
            Attempt to reverse-engineer, modify, or interfere with the Bot’s
            operation or security.
          </li>
        </ul>
        <p>
          <strong>Responsibility:</strong> You are solely responsible for your
          interactions with the Bot and any content you provide.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          5. Intellectual Property
        </h2>
        <p>
          All content, including the Bot’s code, design, data compilations, and
          any Apple emojis utilised within the Bot, is the intellectual property
          of GridScout’s creators or their licensors.
        </p>
        <p>
          <strong>Emoji Usage:</strong> The Apple emojis used in GridScout are
          subject to Apple’s own intellectual property rights and usage
          guidelines. Their inclusion is solely for enhancing user experience
          and does not imply any endorsement by or affiliation with Apple.
        </p>
        <p>
          <strong>General:</strong> You are not permitted to reproduce,
          distribute, or create derivative works from any part of the Bot
          without express written permission.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">6. Disclaimers</h2>
        <p>
          <strong>As-Is Basis:</strong> GridScout is provided “as is” and “as
          available” without any warranties of any kind.
        </p>
        <p>
          <strong>No Guarantee of Accuracy:</strong> While we strive for
          accuracy, we do not guarantee that the statistics or information
          provided are complete, current, or error-free. Use the Bot’s data at
          your own risk.
        </p>
        <p>
          <strong>Third-Party Links:</strong> The Bot may include links or
          references to third-party resources. We are not responsible for the
          content or practices of such third parties.
        </p>
        <p>
          <strong>Affiliation Disclaimer:</strong> GridScout is not affiliated
          with or endorsed by Formula 1. All trademarks, logos, and branding
          related to Formula 1 remain the property of Formula 1 and its
          authorised entities.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          7. Limitation of Liability
        </h2>
        <p>
          Under no circumstances shall the creators or operators of GridScout be
          liable for any direct, indirect, incidental, consequential, or
          punitive damages arising from your use (or inability to use) the Bot.
          This includes, but is not limited to, damages for loss of data,
          revenue, or profits.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">8. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless the creators and
          operators of GridScout from any claims, liabilities, losses, damages,
          or expenses arising from your use of the Bot or violation of these
          Terms.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          9. Modifications to the Terms
        </h2>
        <p>
          We reserve the right to update or modify these Terms at any time.
          Continued use of GridScout after any such changes constitutes your
          acceptance of the new Terms.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">10. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of England and Wales. Any disputes arising from these Terms shall
          be subject to the exclusive jurisdiction of the courts in England and
          Wales.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">11. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your access to GridScout
          at any time, with or without notice, for conduct that we believe
          violates these Terms or is otherwise harmful to the service or other
          users.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">12. Contact Information</h2>
        <p>
          If you have any questions or concerns regarding these Terms, please
          contact us at:
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:max@maxmoon.sh">max@maxmoon.sh</a>
          <br />
          <strong>Discord:</strong> immaxm
        </p>

        <div className="mt-12 border-t border-gray-700 pt-6">
          <p>
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
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

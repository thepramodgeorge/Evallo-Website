import { Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Evallo",
  description: "Privacy Policy for Evallo - Learn how we collect, use, and protect your data.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto py-12 px-4 md:px-6 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
          <p className="text-center text-muted-foreground mt-2">Last updated: January 3, 2026</p>
          <div className="prose dark:prose-invert max-w-none space-y-6 mt-8">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
              <p>
                Welcome to Evallo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our AI-powered survey services.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
              <p className="mb-2">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Account information (name, email address, password)</li>
                <li>Billing information (payment details, billing address)</li>
                <li>Survey content and responses</li>
                <li>Communications with our support team</li>
              </ul>
              <p className="mt-4 mb-2">We also automatically collect certain information when you use our services:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Log data (IP address, browser type, pages visited)</li>
                <li>Device information</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
              <p className="mb-2">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>To provide, maintain, and improve our services</li>
                <li>To process transactions and manage your account</li>
                <li>To send you technical notices, updates, and support messages</li>
                <li>To respond to your comments and questions</li>
                <li>To analyze usage patterns and trends</li>
                <li>To protect against fraudulent or illegal activity</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Data Sharing and Disclosure</h2>
              <p>
                We do not sell your personal information. We may share your information with third-party service providers who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others&apos; rights, property or safety.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, delete, or restrict the use of your data. To exercise these rights, please contact us at support@evallo.app.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: support@evallo.app
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

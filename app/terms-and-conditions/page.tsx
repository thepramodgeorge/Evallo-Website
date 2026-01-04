import { Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms and Conditions | Evallo",
  description: "Terms and Conditions for using Evallo's services.",
}

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto py-12 px-4 md:px-6 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center">Terms and Conditions</h1>
          <p className="text-center text-muted-foreground mt-2">Last updated: January 3, 2026</p>
          <div className="prose dark:prose-invert max-w-none space-y-6 mt-8">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Evallo website and services (&quot;Service&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you disagree with any part of the terms, you may not access the Service.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Description of Service</h2>
              <p>
                Evallo provides an AI-powered survey platform that allows users to create, distribute, and analyze conversational surveys. We reserve the right to modify, suspend, or discontinue the Service at any time without notice.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">3. User Accounts</h2>
              <p>
                To access certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">4. User Content</h2>
              <p>
                You retain ownership of any content, data, or information you submit to the Service (&quot;User Content&quot;). By submitting User Content, you grant Evallo a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and display such content solely for the purpose of providing and improving the Service.
              </p>
              <p className="mt-2">
                You represent and warrant that you have all necessary rights to submit the User Content and that it does not violate any third-party rights or applicable laws.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Prohibited Uses</h2>
              <p className="mb-2">You agree not to use the Service:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>In any way that violates any applicable national or international law or regulation.</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including any &quot;junk mail,&quot; &quot;chain letter,&quot; &quot;spam,&quot; or any other similar solicitation.</li>
                <li>To impersonate or attempt to impersonate Evallo, an Evallo employee, another user, or any other person or entity.</li>
                <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Service, or which, as determined by us, may harm Evallo or users of the Service or expose them to liability.</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Intellectual Property</h2>
              <p>
                The Service and its original content (excluding User Content), features, and functionality are and will remain the exclusive property of Evallo and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
              <p>
                In no event shall Evallo, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
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

"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last Updated: June 1, 2025
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              Welcome to EverGenius. These Terms of Service (&quot;Terms&quot;) govern your access to and use of 
              our website, products, and services (&quot;Services&quot;). By accessing or using our Services, 
              you agree to be bound by these Terms. If you do not agree to these Terms, you may not 
              access or use the Services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Account Registration</h2>
            <p className="mb-4">
              To access certain features of our Services, you may be required to register for an account. 
              When you register, you agree to provide accurate, current, and complete information about yourself.
            </p>
            <p>
              You are responsible for safeguarding your account credentials and for all activities that occur 
              under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Course Purchases and Refunds</h2>
            <p className="mb-4">
              When you purchase a course, you gain access to the course materials for the period specified 
              at the time of purchase. Some courses may offer lifetime access, while others may have a 
              limited access period.
            </p>
            <p className="mb-4">
              We offer a 30-day money-back guarantee for most of our courses. If you are not satisfied with 
              a course, you may request a refund within 30 days of purchase. Refund eligibility may be 
              subject to certain conditions, such as the amount of course content accessed.
            </p>
            <p>
              To request a refund, please contact our support team at support@evergenius.com.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
            <p className="mb-4">
              The Services and their entire contents, features, and functionality (including but not limited 
              to all information, software, text, displays, images, video, and audio, and the design, 
              selection, and arrangement thereof) are owned by EverGenius, its licensors, or other providers 
              of such material and are protected by copyright, trademark, patent, trade secret, and other 
              intellectual property or proprietary rights laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, 
              publicly perform, republish, download, store, or transmit any of the material on our Services, 
              except as follows:
            </p>
            <ul className="list-disc pl-6">
              <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
              <li>You may store files that are automatically cached by your Web browser for display enhancement purposes.</li>
              <li>You may print or download one copy of a reasonable number of pages of the Services for your own personal, non-commercial use and not for further reproduction, publication, or distribution.</li>
              <li>If we provide social media features with certain content, you may take such actions as are enabled by such features.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Conduct</h2>
            <p className="mb-4">
              You agree not to use the Services:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any &quot;junk mail,&quot; &quot;chain letter,&quot; &quot;spam,&quot; or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate EverGenius, an EverGenius employee, another user, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Services, or which, as determined by us, may harm EverGenius or users of the Services or expose them to liability.</li>
            </ul>
            <p>
              Additionally, you agree not to:
            </p>
            <ul className="list-disc pl-6">
              <li>Use the Services in any manner that could disable, overburden, damage, or impair the site or interfere with any other party&apos;s use of the Services.</li>
              <li>Use any robot, spider, or other automatic device, process, or means to access the Services for any purpose, including monitoring or copying any of the material on the Services.</li>
              <li>Use any manual process to monitor or copy any of the material on the Services or for any other unauthorized purpose without our prior written consent.</li>
              <li>Use any device, software, or routine that interferes with the proper working of the Services.</li>
              <li>Introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
              <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Services, the server on which the Services are stored, or any server, computer, or database connected to the Services.</li>
              <li>Attack the Services via a denial-of-service attack or a distributed denial-of-service attack.</li>
              <li>Otherwise attempt to interfere with the proper working of the Services.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
            <p className="mb-4">
              THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, 
              EITHER EXPRESS OR IMPLIED. NEITHER EVERGENIUS NOR ANY PERSON ASSOCIATED WITH EVERGENIUS MAKES ANY 
              WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, 
              OR AVAILABILITY OF THE SERVICES.
            </p>
            <p>
              THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p>
              IN NO EVENT WILL EVERGENIUS, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, 
              AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, 
              ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, ANY WEBSITES 
              LINKED TO IT, ANY CONTENT ON THE SERVICES OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, 
              SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL 
              INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS 
              OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT 
              (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to the Terms</h2>
            <p>
              We may revise and update these Terms from time to time in our sole discretion. All changes are 
              effective immediately when we post them, and apply to all access to and use of the Services thereafter. 
              Your continued use of the Services following the posting of revised Terms means that you accept and 
              agree to the changes.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> legal@evergenius.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 
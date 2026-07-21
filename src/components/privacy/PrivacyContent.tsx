interface PrivacySection {
  title: string;
  body: string[];
  list?: string[];
}

const sections: PrivacySection[] = [
  {
    title: "Information We Collect",
    body: [
      "We may collect personal information such as your name, email address, phone number, or any details submitted through contact forms, newsletter subscriptions, or order requests.",
      "We may also collect non-personal information including browser type, device information, pages visited, and general website usage data through analytics tools, tracking technologies, and cookies.",
    ],
  },
  {
    title: "How We Use Information",
    body: ["Information collected may be used to:"],
    list: [
      "Respond to inquiries or messages",
      "Improve website performance and user experience",
      "Process requests or orders",
      "Send updates, promotions, or announcements",
      "Monitor website traffic and analytics",
    ],
  },
  {
    title: "Cookies",
    body: [
      "This website may use cookies and similar technologies to improve browsing experience, analyze website traffic, personalize content, and support marketing efforts. You can disable cookies through your browser settings at any time if preferred.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "Hotbite may use third-party services such as delivery platforms, analytics providers, social media integrations, embedded content, or online ordering tools. These services may collect information according to their own individual privacy policies and practices.",
    ],
  },
  {
    title: "Data Protection",
    body: [
      "We take reasonable steps to protect personal information and maintain secure website practices. However, no online platform or transmission method can be guaranteed completely secure.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request access, updates, corrections, or removal of your personal information at any time by contacting us directly through our provided contact information and support channels.",
    ],
  },
  {
    title: "Updates to This Policy",
    body: [
      "This Privacy Policy may be updated periodically to reflect changes to our services, website functionality, or legal requirements.",
    ],
  },
];

export function PrivacyContent() {
  return (
    <section className="bg-cream px-4 py-20 sm:px-8 sm:py-24 md:px-10">
      <div className="mx-auto max-w-2xl">
        <p className="font-body text-base text-dark-yellow/90 sm:text-lg">
          At Hotbite, we value your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how information may be collected, used, and
          protected when you visit our website or interact with our services.
        </p>

        <div className="mt-12 space-y-12 sm:mt-14 sm:space-y-14">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-heading text-2xl font-black uppercase tracking-wide text-dark-yellow sm:text-3xl">
                {section.title}
              </h2>
              <div className="mt-3 space-y-4 font-body text-base text-dark-yellow/90 sm:text-lg">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list && (
                  <ul className="list-disc space-y-1 pl-5">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          <div>
            <h2 className="font-heading text-2xl font-black uppercase tracking-wide text-dark-yellow sm:text-3xl">
              Contact
            </h2>
            <div className="mt-3 space-y-4 font-body text-base text-dark-yellow/90 sm:text-lg">
              <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
              <div className="space-y-1">
                <a
                  href="mailto:hello@hotbite.com"
                  className="block transition hover:text-yellow"
                >
                  hello@hotbite.com
                </a>
                <a href="tel:+13125550148" className="block transition hover:text-yellow">
                  +1 (312) 555-0148
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

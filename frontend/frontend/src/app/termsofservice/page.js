export default function TermsOfService() {
  return (
    <section className="bg-gray-50 py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-sm">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Terms of Service
        </h1>

        {/* Intro */}
        <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Welcome to Sparesto Solutions. By accessing or using our website,
          products, and services, you agree to comply with and be bound by
          these Terms of Service. Please read these terms carefully before
          using our platform.
        </p>

        <p className="text-gray-700 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
          These Terms govern your use of the Sparesto Solutions website and any
          services provided through it. By continuing to use our website, you
          acknowledge that you have read, understood, and accepted these terms.
          If you do not agree with any part of these Terms, you should
          discontinue use of our website and services.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-200 my-5 sm:my-6"></div>

        {/* Content */}
        <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Users agree to use our website and services only for lawful purposes
          and in a manner that does not infringe upon the rights of others or
          restrict their use of the platform. Sparesto Solutions reserves the
          right to modify, suspend, or discontinue any part of its services at
          any time without prior notice. While we strive to ensure that all
          information on our website is accurate and up to date, we make no
          guarantees regarding the completeness, reliability, or accuracy of
          any content. All content, trademarks, logos, graphics, and materials
          displayed on this website are the property of Sparesto Solutions or
          their respective owners and may not be copied, reproduced, or
          distributed without prior written permission. We are not liable for
          any direct, indirect, incidental, or consequential damages arising
          from the use of our website or services. Users are responsible for
          maintaining the confidentiality of any information they submit and
          for ensuring that such information is accurate and up to date. We may
          update these Terms of Service periodically to reflect changes in our
          business practices, legal obligations, or service offerings. Any
          updates will be posted on this page, and continued use of our website
          after such changes constitutes acceptance of the revised terms.
        </p>

        <p className="text-gray-700 mb-2 leading-relaxed text-sm sm:text-base md:text-lg">
          If you have any questions regarding these Terms of Service, please
          contact us at
          <span className="text-[#0F766E] underline cursor-pointer ml-1 break-all">
            contact@sparesto.com
          </span>
        </p>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="main_container">
        <section style={{ padding: "2rem 0" }}>
          <div className="container">
            <div className="the_content_single">
              <h2>Privacy Policy</h2>
              <h4>Effective Date: May 25, 2023</h4>
              <p>
                At KonnectX, located in the United States, we prioritize the
                privacy and security of our website visitors and users. This
                Privacy Policy outlines the types of information we collect, how
                we use and protect it, and the choices you have regarding your
                personal information. By accessing or using our website
                (www.konnectx.us), you agree to the terms of this Privacy
                Policy.
              </p>
              <h2>Information We Collect:</h2>
              <h3>1.1 Personal Information:</h3>
              <p>
                We collect personal information that you provide voluntarily
                during the signup process. This may include your username and
                email address. We do not collect or store any additional
                personal information such as your geo-location.
              </p>
              <h3>1.2 Usage Information:</h3>
              <p>
                We may automatically collect certain non-personal information
                about your use of our website, including your IP address,
                browser type, operating system, device information, and browsing
                activities. This information is used to analyze trends,
                administer the website, and improve the user experience.
              </p>
              <h2>Use of Information:</h2>
              <h3>2.1 Personal Information:</h3>
              <p>
                We use the personal information you provide, such as your
                username and email address, solely for the purpose of sending
                you our newsletter. We do not share this information with third
                parties, except as described in section 3 (Disclosure of
                Information).
              </p>
              <h3>1.2 Usage Information:</h3>
              <p>
                We may automatically collect certain non-personal information
                about your use of our website, including your IP address,
                browser type, operating system, device information, and browsing
                activities. This information is used to analyze trends,
                administer the website, and improve the user experience.
              </p>

              <h2>Disclosure of Information:</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties. However, we may disclose your
                information in the following circumstances:
              </p>
              <h2>Legal Requirements:</h2>
              <p>
                We may disclose your personal information if required to do so
                by law or in response to a valid legal request, such as a court
                order or government inquiry.
              </p>
              <h2>Service Providers:</h2>
              <p>
                We may engage third-party service providers to assist us in
                operating our website or to perform certain functions on our
                behalf. These service providers will have access to your
                personal information solely to perform their tasks and are
                obligated to keep your information confidential.
              </p>
              <h2>Security:</h2>
              <p>
                We implement reasonable security measures to protect your
                personal information from unauthorized access, use, or
                disclosure. However, no data transmission over the internet or
                storage system can be guaranteed to be 100% secure. Please note
                that we cannot guarantee the security of any information
                transmitted to or from our website, and you do so at your own
                risk.
              </p>
              <h2>Third-Party Links:</h2>
              <p>
                Our website may contain links to third-party websites. Please
                note that we are not responsible for the privacy practices or
                content of those websites. We encourage you to review the
                privacy policies of any third-party websites you visit.
              </p>
              <h2>Your Choices:</h2>
              <p>
                You have the right to update, correct, or delete your personal
                information by contacting us using the contact information
                provided below. You may also opt-out of receiving our newsletter
                by following the unsubscribe instructions included in each
                email.
              </p>
              <h2>Children's Privacy:</h2>
              <p>
                Our website is not intended for use by children under the age of
                13. We do not knowingly collect personal information from
                children under the age of 13. If we become aware that we have
                collected personal information from a child under the age of 13,
                we will take steps to delete that information as soon as
                possible.
              </p>
              <h2>Changes to the Privacy Policy:</h2>
              <p>
                We reserve the right to modify or update this Privacy Policy at
                any time. We will notify you of any material changes by posting
                the updated Privacy Policy on our website with a new effective
                date. Your continued use of our website after the changes are
                implemented will signify your acceptance of the updated Privacy
                Policy.
              </p>
              <h2>Contact Us:</h2>
              <p>
                If you have any questions or concerns regarding this Privacy
                Policy or our privacy.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;

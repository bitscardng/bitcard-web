import React from 'react';
import Robot from "../../assets/images/robot 3.png";

function Hero() {
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="display-4 mb-4">Privacy Policy / AML</h1>
        <p className="lead mb-4">At BitsCard, we are committed to protecting your privacy in accordance with Nigerian fintech regulations. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website (https://bitscard.app) and use our services.</p>

        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <div className="position-relative bg-white p-4 p-md-5" style={{
              backgroundColor: '#D9D9D966',
              boxShadow: '8px 8px #000',
              marginTop: '10px',
            }}>
              <div className="accordion custom-accordion" id="policyAccordion">
                {/* Privacy Policy Section */}
                <div className="accordion-item border-0 mb-3">
                  <h2 className="accordion-header" id="privacyHeader">
                    <button
                      className="accordion-button fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#privacyPolicy"
                      aria-expanded="true"
                      aria-controls="privacyPolicy"
                    >
                      Privacy Policy
                    </button>
                  </h2>
                  <div
                    id="privacyPolicy"
                    className="accordion-collapse collapse show"
                    aria-labelledby="privacyHeader"
                    data-bs-parent="#policyAccordion"
                  >
                    <div className="accordion-body">
                      <p className="text-muted">Effective Date: 1/10/2024</p>
                      <h4 className="mb-4">BitsCard Privacy Policy</h4>
                      <h5>1. Information We Collect</h5>
                      <ul>
                        <li><strong>Personal Information:</strong> We may collect personal information such as your name, email address, phone number, and payment details when you register for an account or make a purchase.</li>
                        <li><strong>Usage Data:</strong> We collect information about how you interact with our website and services, including your IP address, browser type, operating system, and pages visited.</li>
                      </ul>

                      <h5>2. How We Use Your Information</h5>
                      <p>We use your information to:</p>
                      <ul>
                        <li>Provide and improve our services.</li>
                        <li>Process transactions and send related information, including purchase confirmations and invoices.</li>
                        <li>Respond to your comments, questions, and requests, and provide customer service.</li>
                        <li>Communicate with you about products, services, offers, promotions, and events.</li>
                      </ul>

                      <h5>3. Sharing Your Information</h5>
                      <p>We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights.</p>

                      <h5>4. Security</h5>
                      <p>We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, and destruction.</p>

                      <h5>5. Your Rights</h5>
                      <p>You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain data processing activities.</p>

                      <h5>6. Contact Us</h5>
                      <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
                      <ul>
                        <li><strong>Email:</strong> <a href="mailto:support@bitscard.app">support@bitscard.app</a></li>
                        <li><strong>Phone:</strong> +234 812 970 3124</li>
                      </ul>

                      <h5>7. Changes to This Privacy Policy</h5>
                      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.</p>
                    </div>
                  </div>

                </div>

                {/* AML Policy Section */}
                <div className="accordion-item border-0 mb-3">
                  <h2 className="accordion-header" id="amlHeader">
                    <button
                      className="accordion-button collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#amlPolicy"
                      aria-expanded="false"
                      aria-controls="amlPolicy"
                    >
                      Anti-Money Laundering (AML) Policy
                    </button>
                  </h2>
                  <div
                    id="amlPolicy"
                    className="accordion-collapse collapse"
                    aria-labelledby="amlHeader"
                    data-bs-parent="#policyAccordion"
                  >
                    <div className="accordion-body">
                      <p className="text-muted">Effective Date: 1/10/2024</p>
                      <h4 className="mb-4">BitsCard Anti-Money Laundering (AML) Policy</h4>

                      <h5>1. Introduction</h5>
                      <p>BitsCard is committed to the highest standards of anti-money laundering (AML) compliance. This AML Policy is designed to prevent money laundering and terrorist financing in accordance with Nigerian regulations and international best practices.</p>

                      <h5>2. Objective</h5>
                      <p>The objective of this AML Policy is to ensure that BitsCard's services are not used to facilitate money laundering or terrorist financing activities. We are committed to identifying, preventing, and reporting any suspicious activities.</p>

                      <h5>3. Customer Due Diligence (CDD)</h5>
                      <ul>
                        <li><strong>Customer Identification:</strong> We require all customers to provide valid identification documents, such as a government-issued ID, to verify their identity.</li>
                        <li><strong>Risk Assessment:</strong> We assess the money laundering and terrorist financing risks associated with each customer and transaction. This includes evaluating the customer's profile, geographical location, and transaction patterns.</li>
                        <li><strong>Ongoing Monitoring:</strong> We continuously monitor customer transactions to identify and report suspicious activities.</li>
                      </ul>

                      <h5>4. Reporting Suspicious Activities</h5>
                      <ul>
                        <li><strong>Internal Reporting:</strong> Employees are required to report any suspicious activities to the Compliance Officer immediately.</li>
                        <li><strong>External Reporting:</strong> The Compliance Officer will report any suspicious activities to the Nigerian Financial Intelligence Unit (NFIU) and other relevant authorities as required by law.</li>
                      </ul>

                      <h5>5. Record Keeping</h5>
                      <p>We maintain records of all customer transactions, identification documents, and due diligence information for at least five years. These records are stored securely and are accessible only to authorized personnel.</p>

                      <h5>6. Employee Training</h5>
                      <p>We provide regular training to our employees on AML regulations, identifying suspicious activities, and reporting procedures. This training ensures that all employees are aware of their responsibilities and are equipped to comply with AML requirements.</p>

                      <h5>7. Compliance Officer</h5>
                      <p>We have appointed a Compliance Officer who is responsible for overseeing the implementation and enforcement of this AML Policy. The Compliance Officer ensures that BitsCard complies with all relevant AML laws and regulations.</p>

                      <h5>8. Review and Updates</h5>
                      <p>We regularly review and update this AML Policy to ensure its effectiveness and compliance with any changes in laws and regulations.</p>

                      <h5>9. Contact Us</h5>
                      <p>If you have any questions or concerns about this AML Policy or our AML practices, please contact us at:</p>
                      <ul>
                        <li><strong>Email:</strong> <a href="mailto:support@bitscard.app">support@bitscard.app</a></li>
                        <li><strong>Phone:</strong> +234 812 970 3124</li>
                      </ul>
                    </div>
                  </div>

                </div>

                {/* ISMS Policy Section */}
                <div className="accordion-item border-0">
                  <h2 className="accordion-header" id="ismsHeader">
                    <button
                      className="accordion-button collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#ismsPolicy"
                      aria-expanded="false"
                      aria-controls="ismsPolicy"
                    >
                      Information Security Management System (ISMS) Policy
                    </button>
                  </h2>
                  <div
                    id="ismsPolicy"
                    className="accordion-collapse collapse"
                    aria-labelledby="ismsHeader"
                    data-bs-parent="#policyAccordion"
                  >
                    <div className="accordion-body">
                      <p className="text-muted">Effective Date: 1/10/2024</p>
                      <h4 className="mb-4">BitsCard ISMS Policy</h4>

                      <h5>1. Introduction</h5>
                      <p>BitsCard is committed to protecting the confidentiality, integrity, and availability of our information assets. This Information Security Management System (ISMS) Policy outlines our approach to managing information security risks and ensuring compliance with relevant laws, regulations, and best practices.</p>

                      <h5>2. Scope</h5>
                      <p>This ISMS Policy applies to all BitsCard employees, contractors, and third-party service providers. It covers all information assets, including data, systems, networks, and physical assets, as well as all activities related to the processing, storage, and transmission of information.</p>

                      <h5>3. Information Security Objectives</h5>
                      <p>Our information security objectives are to:</p>
                      <ul>
                        <li>Protect information assets from unauthorized access, disclosure, alteration, and destruction.</li>
                        <li>Ensure the confidentiality, integrity, and availability of information.</li>
                        <li>Comply with all applicable legal, regulatory, and contractual requirements.</li>
                        <li>Continuously improve our information security management practices.</li>
                      </ul>

                      <h5>4. Roles and Responsibilities</h5>
                      <ul>
                        <li><strong>Senior Management:</strong> Provide leadership and support for information security initiatives, and ensure that adequate resources are allocated for the implementation and maintenance of the ISMS.</li>
                        <li><strong>Information Security Manager:</strong> Oversee the development, implementation, and maintenance of the ISMS, and ensure compliance with this policy.</li>
                        <li><strong>Employees and Contractors:</strong> Comply with this policy and all related procedures, and report any security incidents or vulnerabilities to the Information Security Manager.</li>
                      </ul>

                      <h5>5. Risk Management</h5>
                      <p>We conduct regular risk assessments to identify and evaluate information security risks. Based on the risk assessment results, we implement appropriate controls to mitigate identified risks and continuously monitor the effectiveness of these controls.</p>

                      <h5>6. Information Security Controls</h5>
                      <p>We have implemented a range of information security controls to protect our information assets, including:</p>
                      <ul>
                        <li><strong>Access Controls:</strong> Restrict access to information assets based on the principle of least privilege.</li>
                        <li><strong>Physical Security:</strong> Protect physical assets from unauthorized access, theft, and damage.</li>
                        <li><strong>Data Encryption:</strong> Encrypt sensitive data during storage and transmission.</li>
                        <li><strong>Incident Response:</strong> Develop and maintain an incident response plan to detect, respond to, and recover from security incidents.</li>
                      </ul>

                      <h5>7. Training and Awareness</h5>
                      <p>We provide regular training and awareness programs to ensure that all employees and contractors understand their information security responsibilities and are equipped to comply with this policy.</p>

                      <h5>8. Monitoring and Review</h5>
                      <p>We continuously monitor our information security controls and regularly review the ISMS to ensure its effectiveness and compliance with changing laws, regulations, and industry standards.</p>

                      <h5>9. Continuous Improvement</h5>
                      <p>We are committed to the continuous improvement of our ISMS. We regularly review our information security practices, conduct internal audits, and implement corrective and preventive actions to address identified weaknesses and enhance our security posture.</p>

                      <h5>10. Contact Us</h5>
                      <p>If you have any questions or concerns about this ISMS Policy or our information security practices, please contact us at:</p>
                      <ul>
                        <li><strong>Email:</strong> <a href="mailto:support@bitscard.app">support@bitscard.app</a></li>
                        <li><strong>Phone:</strong> +234 812 970 3124</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <img className="robot-img" width="200" src={Robot} alt="" style={{ float: 'right' }} />
      </div>

      {/* Add custom styles for the accordion */}
      <style>
        {`
          .custom-accordion .accordion-button {
            background-color: transparent;
            box-shadow: none;
            padding: 1.5rem;
            font-size: 1.25rem;
          }

          .custom-accordion .accordion-button:not(.collapsed) {
            background-color: rgba(0, 0, 0, 0.05);
            color: #000;
          }

          .custom-accordion .accordion-button:focus {
            box-shadow: none;
            border-color: rgba(0, 0, 0, 0.125);
          }

          .custom-accordion .accordion-body {
            padding: 2rem;
            font-size: 1rem;
            line-height: 1.6;
          }

          .accordion-button::after {
            background-size: 1.25rem;
          }

          .custom-accordion h5 {
            color: #333;
            margin-top: 1.5rem;
            margin-bottom: 1rem;
            font-weight: 600;
          }

          .custom-accordion ul {
            padding-left: 1.2rem;
          }

          .custom-accordion ul li {
            margin-bottom: 0.5rem;
          }

          .custom-accordion .text-muted {
            color: #6c757d !important;
          }
        `}
      </style>
    </section>
  );
}

export default Hero;
import React from 'react';
import WelcomeHeader from 'pages/Welcome/WelcomeHeader';

const PrivacyPolicy = ({ isAuth }) => (
  <>
    {!isAuth && (
      <div className='page-has-left-panels page-has-right-panels pr-0'>
        <WelcomeHeader />
      </div>
    )}
    <div className='stunning-header bg-primary-opacity'>
      <div className='header-spacer--standard'></div>
      <div className='stunning-header-content'>
        <h1 className='stunning-header-title'>AFM Privacy Policy </h1>
        <ul className='breadcrumbs'>
          <li className='breadcrumbs-item active'>
            <span>Privacy Policy</span>
          </li>
        </ul>
      </div>
      <div className='content-bg-wrap stunning-header-bg1'></div>
    </div>

    <section className='mb60'>
      <div className='container'>
        <div className='row'>
          <div className='col col-xl-10 m-auto col-lg-12 col-md-12 col-sm-12 col-12'>
            <div className='detail-content bg-white p-4 p-sm-5'>
              <p>
                Your privacy is important to us, so we’ve developed a Privacy
                Policy that covers how we collect, use, disclose, transfer, and
                store your personal information.
              </p>
              <h6>Information Collected from Consumers</h6>
              <p>
                Avocados From Mexico collects Consumer information in the
                following ways:
              </p>
              <h6>Information provided by the Consumer: </h6>
              <p>
                If you are a Consumer, if you visit our digital platforms, or
                use our digital tools, we will store the Personal Identification
                Information (“PII”) you give to us such as:
              </p>
              <ul>
                <li>
                  Identity information, such as your first name, last name,
                  username or similar identifier, title, date of birth and
                  gender;
                </li>
                <li>
                  Contact information, such as your postal address, email
                  address and telephone number;
                </li>
                <li>
                  Profile information, such as your username and password,
                  interests, preferences, feedback and survey responses;
                </li>
                <li>
                  Feedback and correspondence, such as information you provide
                  in your responses to surveys, when you participate in market
                  research activities, report a problem with Service, receive
                  customer support or otherwise correspond with us;
                </li>
                <li>
                  Usage information, such as information about how you use our
                  websites and interact with us;
                </li>
                <li>
                  Marketing information, such your preferences for receiving
                  marketing communications and details about how you engage with
                  them.
                </li>
              </ul>
              <p>
                We also may obtain this information through your subscriptions
                to our newsletter, through your subscriptions to our online
                platforms, and through your participation in our sweepstake
                programs. Finally, if you contact our support service or if we
                otherwise need to verify your account, we may ask for additional
                documentation to help us verify your identity and make sure that
                we maintain the security of your account. All of the information
                described in this paragraph is referred to as “Account
                Information.”
              </p>
              <h6>Information we get from others: </h6>
              <p>
                We obtain additional information about you from third party
                sources to enrich your experience on our website and prediction
                platform and to provide you with more relevant information
                related to our content.
              </p>
              <h6>Information automatically collected:</h6>
              <p>
                Our site is primarily directed to our customers and prospective
                customers (our &quot;Consumers&quot;). We collect personal data
                via the Sites that can be used to identify or contact a unique
                person (&quot;PII&quot;). We generally will only collect PII via
                the Site when you provide it directly to us (we refer to this
                information as &quot;Log Data&quot;).
              </p>
              <p>
                You may provide PII such as an email address or a telephone
                number by sending us an email, filling out a form on the Site or
                texting our promotional phone number. In addition, Log Data may
                include information such as the Operating System running on your
                device, Internet Protocol address, access times, browser type
                and language, and the website you visited before visiting our
                Site.
              </p>
              <p>
                We automatically collect information using &quot;cookies&quot;
                and Web beacons. HTTP Cookies are a small piece of data sent
                from a website and stored on the user&apos;s computer by the
                user&apos;s web browser that may be used on our Sites or in our
                emails. Among other things, cookies help us improve our Site,
                our marketing activities, and your experience. We use cookies to
                see which areas and features are popular and to count visits to
                our Sites. Once you enter to our websites, you can choose to set
                your browser to remove cookies and / or to reject cookies. If
                you choose to remove cookies or reject cookies, this could
                affect certain features or services of our Site. For more
                information about cookies and web beacons, please visit 
                <a href='https://www.avocadosfrommexico.com/privacy/cookies'>
                  www.avocadosfrommexico.com/privacy/cookies
                </a>{' '}
                In addition, we use this information to administer the Service
                and we analyze (and may engage third parties to analyze) this
                information to improve and enhance the Service by expanding its
                features and functionality and tailoring it to our users&apos;
                needs and preferences.
              </p>
              <h6>Sensitive personal information:</h6>
              <p>
                Subject to the following paragraph, we ask that you not send or
                disclose to us any sensitive personal information (e.g., social
                security numbers, information related to racial or ethnic
                origin, political opinions, religion or other beliefs, health,
                biometrics or genetic characteristics, criminal background or
                union membership) on or through the Service or otherwise.
              </p>
              <p>
                AFM does not sell or share your personal data, or share with its
                business partners information that directly identifies you (such
                as your name, email address or other contact information) unless
                you give us specific permission.
              </p>
              <p>
                If you send or disclose any sensitive personal information to us
                (such as when you submit user generated content to the Sites),
                you must consent to our processing and use of such sensitive
                personal information in accordance with this Privacy Policy. If
                you do not consent to our processing and use of such sensitive
                personal information, you must not provide it.
              </p>
              <h6>However, if you fail to provide PII required:</h6>
              <p>
                Where we need to collect PII by law, or under the terms of a
                contract we have with you and you fail to provide that
                information when requested, we may not be able to perform the
                contract we have or are trying to enter into with you (for
                example, to provide you with more information about an event or
                validate your subscription or your participation in a promotion
                or sweepstake). In this case, we may have to cancel your
                registration, or subscription, but we will notify you if this is
                the case at the time.
              </p>
              <h6>Note on Children under 13</h6>
              <p>
                We do not knowingly contact or collect information from children
                under 13. If you believe we have inadvertently collected such
                information, please contact us at{' '}
                <a href='mailto:privacy@avocadosfrommexico.com'>
                  privacy@avocadosfrommexico.com
                </a>{' '}
                so we can promptly obtain parental consent or remove the
                information. If you are under 16, or the age of majority in the
                jurisdiction in which you reside, you may only use our Site and
                Services with the consent of your parent or legal guardian.
              </p>
              <h6>Changes to your personal information:</h6>
              <p>
                It is important that the personal information we hold about you
                is accurate and current. Please let us know if your personal
                information changes during your relationship with us by updating
                your registration profile or emailing us at{' '}
                <a href='mailto:privacy@avocadosfrommexico.com'>
                  privacy@avocadosfrommexico.com
                </a>
                .
              </p>
              <h6>How We Use Your Personal Information</h6>
              <p>
                We will only use your information when the law allows us to.
                Most commonly, we will use your information in the following
                circumstances:
              </p>
              <ul>
                <li>
                  Where we need to perform the contract we are about to enter
                  into or have entered into with you (e.g., where we process
                  your email address in order to download an asset from our
                  websites, you subscribe to any of our newsletters, participate
                  in a sweepstake or promotion, or register as a member of any
                  of our programs and platforms);
                </li>
                <li>
                  Where it is necessary for our legitimate interests (or those
                  of a third party) and your interests and fundamental rights do
                  not override those interests;
                </li>
                <li>
                  Where we need to comply with a legal or regulatory obligation;
                </li>
                <li>
                  Where we have your explicit consent before using information.
                  However, generally we do not rely on consent as a legal basis
                  for processing personal data and you have the right to
                  withdraw consent to marketing at any time by contacting us.
                  You will find the relevant contact details at the end of this
                  policy.
                </li>
              </ul>
              <h6>Use of PI to provide the Service</h6>
              <p>
                We use the information we collect primarily to provide,
                maintain, protect and improve our current services, to develop
                new ones and to manage Consumer accounts.
              </p>
              <h6>We use PI for the general purpose it was provided.</h6>
              <p>
                For example, if you contact us through any of our platforms, we
                may send you an email in response.
              </p>
              <p>In general, we may use your information to:</p>
              <ul>
                <li>
                  Improve our services, Content, Sites and how we operate our
                  platforms;
                </li>
                <li>
                  Understand and enhance your experience using our Sites,
                  products and services;
                </li>
                <li>
                  Provide and deliver products, services and content you
                  request; Link or combine it with other information we get from
                  third parties, to help understand your needs and provide you
                  with better experience;
                </li>
                <li>
                  Send you relevant content, including newsletters you have
                  subscribed for, updates, security alerts and support and
                  administrative messages;
                </li>
                <li>
                  Communicate with you about promotions, upcoming events and
                  news about products and services offered by Avocados From
                  Mexico and our selected partners;
                </li>
                <li>
                  Protect, investigate and deter against fraudulent,
                  unauthorized or illegal activity.
                </li>
              </ul>
              <h6>Use of PI to provide the Service</h6>
              <p>
                We use the information we collect primarily to provide,
                maintain, protect and improve our current services, to develop
                new ones and to manage Consumer accounts.
              </p>
              <h6>We use PI for the general purpose it was provided.</h6>
              <p>
                For example, if you contact us through any of our platforms, we
                may send you an email in response.
              </p>
              <h6>In general, we may use your information to:</h6>
              <ul>
                <li>
                  Improve our services, Content, Sites and how we operate our
                  platforms;
                </li>
                <li>
                  Understand and enhance your experience using our Sites,
                  products and services;
                </li>
                <li>
                  Provide and deliver products, services and content you
                  request;
                </li>
                <li>
                  Link or combine it with other information we get from third
                  parties, to help understand your needs and provide you with
                  better experience;
                </li>
                <li>
                  Send you relevant content, including newsletters you have
                  subscribed for, updates, security alerts and support and
                  administrative messages;
                </li>
                <li>
                  Communicate with you about promotions, upcoming events and
                  news about products and services offered by Avocados From
                  Mexico and our selected partners;
                </li>
                <li>
                  Protect, investigate and deter against fraudulent,
                  unauthorized or illegal activity.
                </li>
              </ul>
              <p>
                Avocados From Mexico may store and process PI in the United
                States and other countries. By using our Platform as a Consumer,
                you consent to this transfer of your information into the U.S.
              </p>
              <h6>To communicate with you</h6>
              <p>
                If you request information from us, register for the Service,
                subscribe to our newsletter or platform, or participate in our
                surveys, promotions or events, we may send you Avocados From
                Mexico -related marketing communications if permitted by law but
                will provide you with the ability to opt out. In general, we may
                use information to:
              </p>
              <ul>
                <li>
                  Respond to your comments or questions and allow our Services
                  team to provide service;
                </li>
                <li>
                  Send you related information, including confirmations,
                  technical notices, updates, security alerts and support and
                  administrative messages;
                </li>
                <li>
                  Communicate with you about promotions, upcoming events and
                  news about products and services offered by Avocados From
                  Mexico and our selected partners;
                </li>
              </ul>
              <p>
                We use data that we have stored about you, such as contact
                preferences you may have told us about.
              </p>
              <p>
                We use our legitimate organizational interest as the legal basis
                for communications by email and for the collection of PII in the
                context of our sales and marketing activities where we have
                evaluated that our interests are not overridden by your
                fundamental rights.  We will give you an opportunity to opt out
                of receiving electronic communications. If you do not opt out,
                we will provide you with an option to unsubscribe or manage your
                preferences in every email that we send you subsequently.
                Alternatively, you can use the contact details at the end of
                this policy to update your contact preferences.
              </p>
              <h6>To comply with law</h6>
              <p>
                We use your personal information as we believe necessary or
                appropriate to comply with applicable laws, lawful requests and
                legal process, such as to respond to subpoenas or requests from
                government authorities.
              </p>
              <h6>With your consent</h6>
              <p>
                We may use or share your personal information with your consent,
                such as when you consent to let us post your testimonials or
                endorsements on our Site, you instruct us to take a specific
                action with respect to your personal information or you opt into
                third party marketing communications.
              </p>
              <h6>To create anonymous data for analytics</h6>
              <p>
                We may create anonymous data from your personal information and
                other individuals whose personal information we collect. We make
                personal information into anonymous data by excluding
                information that makes the data personally identifiable to you
                and use that anonymous data for our lawful business purposes.
              </p>
              <h6>For compliance, fraud prevention and safety</h6>
              <p>
                We use your personal information as we believe necessary or
                appropriate to (a) enforce the terms and conditions that govern
                the Service; (b) protect our rights, privacy, safety or
                property, and/or that of you or others; and (c) protect,
                investigate and deter against fraudulent, harmful, unauthorized,
                unethical or illegal activity. In general, we may use
                information to protect, investigate and deter against
                fraudulent, unauthorized or illegal activity.
              </p>
              <h6>How We Share your Personal Information</h6>
              <span>Sharing of information, onward transfer:</span>
              <p>
                There are certain circumstances under which we may disclose your
                information to third parties. These are as follows:
              </p>
              <h6>Updates to Terms of Service</h6>
              <ul>
                <li>
                  With third-party agents who work on our behalf as
                  sub-processors, provided such third parties agree to adhere to
                  the same privacy principles as Avocados From Mexico;
                </li>
                <li>
                  To protect the rights and property of Avocados From Mexico,
                  our agents, Consumers and others including enforcement of our
                  agreements, policies and terms of use;
                </li>
                <li>
                  In an emergency, including protection of the personal safety
                  of any person;
                </li>
                <li>
                  As required in response to a lawful request by public
                  authorities, including meeting of national security or law
                  enforcement requirements;
                </li>
              </ul>
              <p>
                Our privacy policy does not cover any third-party websites
                services. To learn about those third parties&apos; privacy
                practices, please visit their privacy policies.
              </p>
              <p>
                We do not sell PII collected via the Sites or collected pursuant
                to our sales and marketing activities to third parties for any
                purpose.
              </p>
              <h6>Avocados From Mexico’s commitments as a data controller</h6>
              <p>
                Avocados From Mexico may be classed as a data controller when we
                collect your data for billing and managing accounts receivable,
                for example. We are committed to:
              </p>
              <ul>
                <li>
                  Limiting the data collected to what is strictly necessary and
                  for the purpose for which it was collected.
                </li>
                <li>
                  Storing personal data for a limited and appropriate time.
                </li>
                <li>
                  Implementing technical and organizational measures to ensure a
                  high degree of security.
                </li>
              </ul>
              <h6>Your Choices</h6>
              <span>Access, Update, Correct or Delete Your Information:</span>
              <p>
                All AFM Consumers may review, update, correct or delete the
                personal information in the Avocados From Mexico Platform.
                Avocados From Mexico’s Consumers may also contact us at 
                <a href='mailto:privacy@avocadosfrommexico.com'>
                  privacy@avocadosfrommexico.com
                </a>
                 to accomplish the foregoing or if you have additional requests
                or questions. If you are a job applicant and have provided this
                kind of information, you can also contact us via e-mail to
                request to see the information we have in our systems.
              </p>
              <p>
                Consumer may also designate an authorized agent to submit a
                request to access, update, correct or delete personal
                information from the Avocados From Mexico Platform by:
              </p>
              <ul>
                <li>
                  Providing the authorized agent written permission to submit
                  such request on behalf of the Consumer; and
                </li>
                <li>
                  Verifying their own identity directly with Avocados From
                  Mexico.
                </li>
              </ul>
              <p>
                If you are a California resident, you may ask us to refrain from
                sharing your personal information with certain of our affiliates
                and other third parties for their marketing purposes. Please
                tell us your preference by contacting us as specified below.
              </p>
              <h6>Tracking and Targeted Advertising:</h6>
              <p>
                We may allow service providers and other third parties to use
                cookies and other tracking technologies to track your browsing
                activity over time and across our Site and third-party websites.
                We may also partner with a third-party ad network to either
                display advertising on our Site, to manage our advertising on
                other sites, or to provide you targeted advertisements based
                upon your interests on our Site or on third party sites. You may
                opt out of receiving promotional emails from Avocados From
                Mexico by following the instructions in those emails. If you opt
                out, we may still send you non-promotional emails, such as
                emails about your Avocados From Mexico subscriptions and/or
                promotions or our ongoing business relationship. An individual
                wishing to limit the use or sharing of their data should contact
                email 
                <a href='mailto:privacy@avocadosfrommexico.com'>
                  privacy@avocadosfrommexico.com
                </a>
                . In accordance with California Statute § 999.313, Avocados From
                Mexico will confirm receipt within ten (10) days of any request
                to access or delete your information and will respond within
                forty-five (45) days. In some of our communications, we use
                tracking means, such as a &quot;click-through URL&quot; linked
                to content on the Site. We track this data to help us measure
                the effectiveness of our customer communications.
              </p>
              <h6>Choosing not to share your personal information:</h6>
              <p>
                Where we need to collect your personal information by law, or to
                be able to provide the Service to you and you do not provide
                that information when requested (or you later ask to delete it),
                we may not be able to provide you with the Service and may need
                to cancel your service. We will tell you what information you
                must provide to receive the Service by designating it as
                required in the Service or through other appropriate means.
              </p>
              <h6>Information Security</h6>
              <p>
                The security of your personal information important to us. We
                take a number of organizational, technical and physical measures
                designed to protect the personal information we collect, both
                during transmission and once we receive it.
              </p>
              <p>
                We will ensure that any third parties we use for processing your
                information do the same and that they will only process your
                information on our instructions. The third parties will also be
                subject to a duty of confidentiality.
              </p>
              <p>
                We take reasonable steps to help protect your information in an
                effort to prevent loss, misuse, unauthorized access, disclosure,
                alteration and destruction.
              </p>
              <p>
                It is your responsibility to protect your usernames and
                passwords to help prevent anyone from accessing or abusing your
                accounts and services. You should not use or reuse the same
                passwords you use with other accounts as your password for our
                services. We encrypt transmission of data on pages where you
                provide PII or otherwise provide sensitive information. However,
                no security or encryption method can be guaranteed to protect
                information from hackers or human error. Information we collect
                may be stored or processed on computers located in any country
                where we do business. Avocados From Mexico may store and process
                PII in the United States. By using our Platform as a Consumer,
                you consent to this transfer of your information into the U.S.
              </p>
              <h6>International Transfer</h6>
              <p>
                Avocados From Mexico is headquartered in the United States and
                has affiliates and service providers in other countries, and
                your personal information may be transferred to the United
                States or other locations outside of your state, province,
                country or other governmental jurisdiction where privacy laws
                may not be as protective as those in your jurisdiction.
              </p>
              <h6>Other Sites and Services</h6>
              <p>
                The Service may contain links to other websites and services.
                These links are not an endorsement, authorization or
                representation that we are affiliated with that third party. We
                do not exercise control over third party websites or services
                and are not responsible for their actions. Other websites and
                services follow different rules regarding the use or disclosure
                of the personal information you submit to them. We encourage you
                to read the privacy policies of the other websites you visit and
                services you use.
              </p>
              <h6>Changes to this Privacy Policy</h6>
              <p>
                We reserve the right to modify this Privacy Policy at any time.
                We encourage you to periodically review this page for the latest
                information on our privacy practices. If we make material
                changes to this Privacy Policy you will be notified via e-mail
                (if you have an account where we have your contact information)
                or another manner through the Service that we believe reasonably
                likely to reach you (which may include posting a new privacy
                policy on our Site -- or a specific announcement on this page or
                on our blog). Any modifications to this Privacy Policy will be
                effective upon our posting of the new terms and/or upon
                implementation of the new changes on the Service (or as
                otherwise indicated at the time of posting). In all cases, your
                continued use of the Service after the posting of any modified
                Privacy Policy indicates your acceptance of the terms of the
                modified Privacy Policy.
              </p>
              <p>
                Questions?
                <br />
                If you have any questions or concerns at all about our Privacy
                Policy, please feel free to email us at 
                <a href='mailto:privacy@avocadosfrommexico.com'>
                  privacy@avocadosfrommexico.com
                </a>
                .<br />
                Consumers may also address questions or concerns regarding the
                Privacy Policy, or requests to access, update, correct, or
                delete their personal information to AFM via mail:
              </p>
              <p>
                <address style={{ fontFamily: 'initial' }}>
                  Avocados From Mexico
                  <br />
                  222 West Las Colinas Boulevard, Suite 850
                  <br />
                  Attn: Data Protection Officer – General Counsel
                  <br />
                  Irving, TX 75039
                </address>
              </p>
              <h6>Additional Information for the European Union</h6>
              <span>Personal Information</span>
              <p>
                References to &quot;personal information&quot; in this Privacy
                Policy are equivalent to &quot;personal data&quot; governed by
                European data protection legislation. Avocados From Mexico is
                the processor of your personal information for purposes of
                European data protection legislation. Our Data Protection
                Officer can be reached at{' '}
                <a href='mailto:privacy@avocadosfrommexico.com'>
                  privacy@avocadosfrommexico.com
                </a>
                .
              </p>
              <h6>Legal Basis for Processing</h6>
              <p>
                We only use your personal information as permitted by law. We
                are required to inform you of the legal bases of our processing
                of your personal information, which are described above. If you
                have questions about the legal basis of how we process your
                personal information, contact us at{' '}
                <a href='mailto:privacy@avocadosfrommexico.com'>
                  privacy@avocadosfrommexico.com
                </a>
                .
              </p>
              <h6>Use for New Purposes</h6>
              <p>
                We may use your personal information for reasons not described
                in this Privacy Policy where permitted by law and the reason is
                compatible with the purpose for which we collected it. If we
                need to use your personal information for an unrelated purpose,
                we will notify you and explain the applicable legal basis.
              </p>
              <h6>Data Retention</h6>
              <p>
                We will only retain your personal information for as long as
                necessary to fulfill the purposes we collected it for, including
                for the purposes of satisfying any legal, accounting, or
                reporting requirements. To determine the appropriate retention
                period for personal information, we consider the amount, nature,
                and sensitivity of the personal information, the potential risk
                of harm from unauthorized use or disclosure of your personal
                information, the purposes for which we process your personal
                information and whether we can achieve those purposes through
                other means, and the applicable legal requirements. In some
                circumstances we may anonymize your personal information (so
                that it can no longer be associated with you) in which case we
                may use this information indefinitely without further notice to
                you.
              </p>
              <ul>
                <li>For our platform:</li>
              </ul>
              <p>
                Avocados From Mexico retains Customer data for so long as you
                remain as a Customer and will delete Customer&apos;s information
                within 12 months of either party&apos;s termination of
                applicable Customer agreement upon written request. We retain
                User level data on the Platform as directed by our Customers and
                for a reasonable time thereafter for audit purposes and as
                otherwise required by law.
              </p>
              <h6>Rights of European Union Customers</h6>
              <p>
                European data protection laws give you certain rights regarding
                your personal information. Avocados From Mexico acknowledges
                that European Union (“EU”) and Swiss individuals have certain
                legal rights including the right to complain to an EU
                supervisory authority and the right to access the personal data
                that we maintain about them. An EU or Swiss individual who seeks
                access, or who seeks to correct, amend, or delete inaccurate
                data, should direct their query to 
                <a href='mailto:privacy@avocadosfrommexico.com'>
                  privacy@avocadosfrommexico.com
                </a>
                . If requested to remove data, we will respond within 30 days.
                Under these circumstances, you have rights under data protection
                laws in relation to your personal data, as follows:
              </p>
              <ul>
                <li>
                  <b>Withdraw - Opt-out</b>. You have the right to withdraw your
                  consent at any time In circumstances where we are relying on
                  your consent to process your personal data. We will stop
                  sending you direct marketing communications. You may continue
                  to receive Service-related and other non-marketing emails.
                  However, this will not affect the lawfulness of any processing
                  carried out before you withdraw your consent.
                </li>
                <li>
                  <b>Access</b>. EU data protection laws provide you with
                  information about our processing of your personal information
                  and give you access to your personal information. You have a
                  right to request a copy of the personal data that we hold
                  about you. Please use the contact details at the end of this
                  policy if you would like to exercise this right, or any of the
                  rights listed below. If you are an EU resident and consider
                  our use of your personal data to be unlawful, you have the
                  right to lodge a complaint with the relevant supervisory
                  authority
                </li>
                <li>
                  <b>Correct</b>. We may update or correct inaccuracies in your
                  personal information. You have the right to request that we
                  correct the personal data we hold about you.
                </li>
                <li>
                  <b>Delete</b>. Delete your personal information. You have the
                  right to request that we delete or remove personal data where
                  there is no good reason for us continuing to process it.
                  Please note that we may not always be able to comply with your
                  request for erasure if there are specific legal reasons- which
                  will be notified to you at the time of your request.
                </li>
                <li>
                  <b>Transfer</b>. You have the right to request that the
                  personal data we hold about you is transferred to you or to a
                  third party. We will provide a machine-readable copy of your
                  personal information to you or a third party of your choice.
                  Please note that this right only applies to automated
                  information which you initially provided consent for us to use
                  or where we used the information to perform a contract with
                  you.
                </li>
                <li>
                  <b>Restrict</b>. Restrict the processing of your personal
                  information. You have the right to request that we suspend the
                  processing of your personal data in the following situations:
                  (a) When the data&apos;s accuracy wants to be established by
                  you; (b) where our use of the data is unlawful but you do not
                  want us to erase it; (c) where you need us to hold the data
                  even if we no longer require it as you need it to establish,
                  exercise or defend legal claims; or (d) you have objected to
                  our use of your data but we need to verify whether we have
                  overriding legitimate grounds to use it.
                </li>
                <li>
                  <b>Object</b>. Object to our reliance on our legitimate
                  interests as the basis of our processing of your personal
                  information that impacts your rights. You also have the right
                  to object where we are processing your personal data for
                  direct marketing purposes. In some cases, we may demonstrate
                  that we have compelling legitimate grounds to process your
                  information which override your rights and freedoms.
                </li>
              </ul>
              <p>
                You can submit these requests by email to 
                <a href='mailto:privacy@avocadosfrommexico.com'>
                  privacy@avocadosfrommexico.com
                </a>
                 or our postal address provided above. We may request specific
                information from you to help us confirm your identity and
                process your request. Applicable law may require or permit us to
                decline your request. If we decline your request, we will tell
                you why, subject to legal restrictions. If you would like to
                submit a complaint about our use of your personal information or
                response to your requests regarding your personal information,
                you may contact us at 
                <a href='mailto:privacy@avocadosfrommexico.com'>
                  privacy@avocadosfrommexico.com
                </a>
                 or submit a complaint to the data protection regulator in your
                jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default PrivacyPolicy;

import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const tnc = () => {
  const tncStaticData = {
    title: "TERMS & CONDITIONS",
    description:
      "Isla’s Ridge is the way I want to look after people. It’s the way I live my life’ Sitting atop a thousand meter ridge in the Palini Hills, Isla’s Ridge is adjacent to Loulou’s private residence, overlooking the expansive Western Ghats of South India. A secret shared, it’s a place to be away from everything, except oneself. Cultivated through personal relationships, it is an open invitation for the like-minded, equally suited for individual or group retreats with holistic workshops in nature, food, mind and body.",
    tncs: [
      {
        title: "Terms of use",
        description:
          "‘<p>ISLA’S RIDGE’</p> hereinafter referred to as ISLA’S RIDGE is the brand owned and operated by LOULOU VAN DAMME. Your usage of the website http://www.islasridge.com (hereinafter “the Website”) is subject to your compliance with the terms and conditions as set forth below. Usage of this site indicates acceptance of the below. The Company may modify these terms and conditions as stated on the Website at any time, and such modifications shall be effective immediately upon posting of the modified version on the Website without prior intimation to the users. Your continued use of the Website shall be deemed your conclusive acceptance of the modified terms and condi- tions. However, contracts concluded on the basis of previous terms and conditions shall remain unaffected, but you have to prove the terms which are applicable.",
      },
      {
        title: "Use of materials on the website",
        description:
          "‘ISLA’S RIDGE’ hereinafter referred to as ISLA’S RIDGE is the brand owned and operated by LOULOU VAN DAMME. Your usage of the website http://www.islasridge.com (hereinafter “the Website”) is subject to your compliance with the terms and conditions as set forth below. Usage of this site indicates acceptance of the below.",
      },
      {
        title: "Lorem Ipsum",
        description:
          "‘ISLA’S RIDGE’ hereinafter referred to as ISLA’S RIDGE is the brand owned and operated by LOULOU VAN DAMME. Your usage of the website http://www.islasridge.com (hereinafter “the Website”) is subject to your compliance with the terms and conditions as set forth below. Usage of this site indicates acceptance of the below. The Company may modify these terms and conditions as stated on the Website at any time, and such modifications shall be effective immediately upon posting of the modified version on the Website without prior intimation to the users. Your continued use of the Website shall be deemed your conclusive acceptance of the modified terms and condi-",
      },
    ],
  };
  return (
    <>
      <style>
        {`
                    body,.site-header{background-color: #F5F9E3;}
                    body *, .site-header a, a{color: #442220;}
                    .ham-menus-lines, .ham-menus::before, .ham-menus::after{background-color: black;} 
                `}
      </style>
      <Layout>
        <SEO
          title="Tnc"
          description="Learn more about us who we are and what we do."
        />
        <div className="container space-for-header">
          <h3 className="tnc-heading">{tncStaticData.title}</h3>
          <div className="terms-content">
            <h3 className=" margin-b-0 padding-b-5">Purview</h3>
            <ol>
              <li>
                The following General Terms and Conditions apply to rental
                contracts for the gueshouse accommodation as well as to further
                services and deliveries provided by Isla's Ridge (herein after
                referred to as the “Guesthouse”) for the client.
              </li>
              <li>
                Subletting and re-letting of the rooms as well as the use for
                any other purpose than accommodation requires the consent of the
                Guesthouse in writing.
              </li>
              <li>
                Contrary Conditions of the client shall only apply prior to
                written agreement.
              </li>
            </ol>
            <p className="">General Terms & Conditions apply as follows:</p>
            <ol>
              <li>
                Conclusion of the Contract, Contracting Parties, Contract
                Liabilities
                <ol>
                  <li>
                    The contract becomes effective with the Guesthouse’s
                    acceptance. The Guesthouse is free to confirm the booking of
                    rooms in written form.
                  </li>
                  <li>
                    Contracting parties are the Guesthouse and the client. If a
                    third party orders on account of the client the third party
                    is jointly and severally liable with the client for all
                    contract obligations provided the
                  </li>
                </ol>
              </li>
            </ol>
            <p className="">
              Guesthouse has an appropriate statement of the third party.
            </p>
          </div>
          <div className="terms-content">
            <h3 className=" margin-b-0 padding-b-5">
              Service, Price, Payment, Invoicing
            </h3>
            <ol>
              <li>
                The Guesthouse is obliged to have the rooms ready for the client
                and to provide the service as contracted.
              </li>
              <li>
                In order to use the room and additional services the client is
                obliged to pay the valid price respectively the price as
                contracted. This also applies to services and expenses of the
                Guesthouse towards third arranged by the client.
              </li>
              <li>
                The prices contracted include the legal value added tax.
                Provided, the time period between conclusion and performance of
                the contract exceeds four months and the generally calculated
                price for Guesthouse services increase, the Guesthouse has the
                right to increase the contracted price adequately, however by 5%
                at the most.
              </li>
              <li>
                The Guesthouse reserves the right to adjust prices in case the
                client requires later amendments regarding the contracted number
                of rooms, Guesthouse services or length of stay and the
                Guesthouse agrees to it.
              </li>
              <li>
                Invoices of the Guesthouse without settlement date are payable
                with no discount within ten (10) days of the invoice date if not
                contracted differently. In case of delay of payment the
                Guesthouse has the right to charge penal interest. The
                Guesthouse reserves the right to proof greater damage.
              </li>
              <li>
                The Guesthouse reserves the right to charge an appropriate
                advance payment or bail upon conclusion of the contract or later
                with regard to legal terms of all-inclusive traveling. The
                amount of the advance payment and payment date must be
                contracted in writing.
              </li>
              <li>
                The client is only entitled to offset or reduce a Guesthouse
                claim subject to an indisputable or legally valid claim.
              </li>
            </ol>
          </div>
          <div className="terms-content">
            <h3 className=" margin-b-0 padding-b-5">
              Cancellation of the Contract by the Client
            </h3>
            <ol>
              <li>
                The client has the right to cancel the contract only prior to
                written consent of the Guesthouse. In case this written consent
                is not available, the contracted price is to be paid even if the
                client does not use all contracted services. This does not apply
                in case of violation of the Guesthouse’s obligation to consider
                the rights, legal objects and interests of the client if it is
                no longer reasonable for the client to adhere to the contract or
                if the client has any other legal or contractual right for
                cancellation.
              </li>
              <li>
                If a cancellation date was contracted between the Guesthouse and
                the client in written form, the client has the right to cancel
                the contract until that date without causing demands for payment
                or claim for damages from the Guesthouse. The client’s right of
                cancellation expires, if he does not exercise this right in
                writing towards the Guesthouse until the agreed date, provided
                the cancellation is not according to above lit.
              </li>
              <li>
                The Guesthouse has the right to charge a lump-sum for any damage
                caused and reimbursed by the client.
              </li>
            </ol>
          </div>
          <div className="terms-content">
            <h3 className=" margin-b-0 padding-b-5">
              Cancellation of the Contract by the Guesthouse
            </h3>
            <ol>
              <li>
                Provided the client’s right to cancel the contract within a
                fixed time was contracted in writing, the Guesthouse on his part
                has the right to cancel the contract if there are requests from
                other clients for the contracted rooms and the client renounces
                his right to withdraw from the contract upon enquiry. Place of
                fulfillment and jurisdiction shall be the domicile of the
                Guesthouse.
              </li>
              <li>
                If a contracted advance payment is not made even after an
                appropriately extended deadline with a notice of rejection set
                by the Guesthouse, the Guesthouse has the right to withdraw from
                the contract.
              </li>
              <li>
                In addition the Guesthouse has the right to cancel contract
                extraordinarily due to an objective justified reason, for
                example if force majeure or other circumstances beyond the
                control of the Guesthouse makes fulfillment of contract
                impossible
                <ol>
                  <li>
                    {" "}
                    rooms are booked on misleading or false statements regarding
                    the person or the purpose.
                  </li>
                  <li>
                    {" "}
                    the Guesthouse has reasonable grounds to assume that use of
                    the Guesthouse services may endanger the Guesthouse
                    operation, the security or the image of the Guesthouse in
                    public without being attributed to the territory and/or
                    organization of the Guesthouse.
                  </li>
                  <li>
                    {" "}
                    there is a violation of the above mentioned rules and
                    regulations under "Purview" No. 2.
                  </li>
                </ol>
              </li>
              <li>
                Without delay the Guesthouse has to inform the client about the
                execution of the right of withdrawal.
              </li>
              <li>
                Provided a rightful withdrawal from the contract the client is
                not entitled to claim damages.{" "}
              </li>
            </ol>
          </div>
          <div className="terms-content">
            <h3 className=" margin-b-0 padding-b-5">
              Use of Rooms, Service and Return
            </h3>
            <ol>
              <li> The client cannot claim for the use of particular rooms.</li>
              <li>
                Rooms booked are available to the client on the contracted
                arrival date from 2pm. The client cannot claim for earlier
                availability.
              </li>
              <li>
                Rooms must be available to the Guesthouse at 12:00 the latest on
                the contracted departure date. Afterwards the Guesthouse has the
                right to charge 50% of the best available public rate for the
                additional use of the room until 6 pm on top of the damage
                occurred. And from 6pm 100% of the best available public rate is
                charged unless and otherwise agreed. Any contractual claims of
                the client are not justified by this. The client is free to
                proof the Guesthouse that no or considerable less damage
                occurred.
              </li>
            </ol>
          </div>
          <div className="terms-content">
            <h3 className=" margin-b-0 padding-b-5">
                Final Provision
            </h3>
            <ol>
                <li>Alterations or supplements to the contract, the acceptance of the order or the Terms and Conditions for Guesthouse Accommodation must be in writing. Unilateral alterations or supplements through
                the client are ineffective.</li>
                <li>Place of fulfillment and payment is seat of the Guesthouse.</li>
                <li>Exclusive place of jurisdiction is seat of the Guesthouse.</li>
                <li>It applies Indian law. UN-sales law and the law of conflicts do not apply.</li>
                <li>Should certain provisions of these General Terms and Conditions for Guesthouse Accommodation become invalid or void, the effectiveness of the remaining provisions is not affected. Besides statutory provisions apply. </li>
            </ol>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default tnc;

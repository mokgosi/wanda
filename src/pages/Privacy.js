import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import M from "materialize-css";

const Privacy = () => {

    useEffect(() => {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {
            accordion: false
        });
    });

    return (
        <>
            <div className="pagehead-bg primary-bg"></div>
            <div className="container has-pagehead is-pagetitle">
                <div className="section">
                    <h5 className="pagetitle">Private Policy</h5>
                </div>
            </div>
            <div className="container over">
                <div className="section">
                    <div className="row mt0">
                        <div className="col s12 pad-0">
                            <h5 className="bot-20 sec-tit">Private Policy</h5>
                            <p>We wrote this policy to help you understand what information we collect, how we use it and
                                what choices you have about it. We’ve tried our best to explain things in a simple and clear
                                way. We welcome your questions and comments on this policy.</p>
                            <ul className="collapsible expandable popout">
                                <li className="">
                                    <div className="collapsible-header"><i className="mdi mdi-file-outline"></i>How & Why We Collect
                                        Your Information
                                    </div>
                                    <div className="collapsible-body">
                                        <span>
                                            <p>When you use WanderfullySo, you voluntarily share certain information
                                                including your name, email address, phone number, comments and any other
                                                information you give us. You can also choose to share your precise location
                                                using your device settings. We will still use your IP address, which is used
                                                to approximate your location, even if you don't choose to share your precise
                                                location.</p>
                                            <p>When you use a website, mobile application or other Internet services,
                                                certain Internet and electronic network activity information gets created
                                                and logged automatically. This is also true when you use WanderfullySo. Here
                                                are some of the types of information we collect:
                                            </p>
                                            <ul>
                                                <li><b>Log data.</b> When you use WanderfullySo, our servers record
                                                    information (“log data”), including information that your browser
                                                    automatically sends whenever you visit a website, or that your mobile
                                                    app automatically sends when you’re using it. This log data includes
                                                    your Internet Protocol address (which we use to infer your approximate
                                                    location), the address of and activity on websites you visit that
                                                    incorporate WanderfullySo features, searches, browser type and settings,
                                                    the date and time of your request, how you used WanderfullySo, cookie
                                                    data and device data.
                                                </li>
                                                <li><b>Cookie data.</b> We also use “cookies” (small text files sent by
                                                    your computer each time you visit our website, unique to your browser)
                                                    or similar technologies to get log data. When we use cookies or other
                                                    similar technologies, we use session cookies (that last until you close
                                                    your browser) or persistent cookies (that last until you or your browser
                                                    delete them). For example, we use cookies to store your settings so you
                                                    don‘t have to set them up every time you visit WanderfullySo. We also
                                                    use cookies to help us analyze traffic.</li>
                                                <li><b>Device information.</b> In addition to log data, we collect
                                                    information about the device you're using WanderfullySo on, including
                                                    the type of device, operating system, settings, unique device
                                                    identifiers and crash data that helps us understand when something
                                                    breaks</li>
                                            </ul>
                                            <p>We have a legitimate interest in using your info in these ways. It's
                                                fundamental to what we do at WanderfullySo and necessary in order to make
                                                WanderfullySo and its features valuable to you.</p>
                                            <p>We all benefit when we use your information to:</p>
                                            <ul>
                                                <li>Work with law enforcement and keep WanderfullySo safe. We may get
                                                    requests for information from law enforcement, for example, the police
                                                    or courts.</li>
                                                <li>Conduct analytics and research on who is using WanderfullySo and what
                                                    they are doing. For example, by logging how often people use two
                                                    different versions of a feature on WanderfullySo, we can understand
                                                    which version is better.</li>
                                                <li>Improve WanderfullySo and offer new features.</li>
                                                <li>Send you updates (such as when there is a certain activity) and news by
                                                    email or push notification, depending on your settings.</li>
                                            </ul>
                                            <p>In addition to the specific circumstances above, we’ll only use your
                                                information with your consent in order to:</p>
                                            <ul>
                                                <li>Send you marketing materials by email, text, push notification or phone
                                                    call depending on your operating system settings. Each time we send you
                                                    marketing materials, we give you the option to unsubscribe.</li>
                                                <li>Identify your precise location.</li>
                                            </ul>
                                            <p>We’ll also rely on your consent where we use cookies to:</p>
                                            <ul>
                                                <li>Identify you across different browser sessions. This means if you log in
                                                    to WanderfullySo from your phone (or any device), we'll remember that
                                                    you're you and then you won't need to enter your login details each time
                                                    you visit WanderfullySo.</li>
                                            </ul>
                                        </span>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="collapsible-header"><i className="mdi mdi-file-outline"></i>Transferring Your
                                        Information</div>
                                    <div className="collapsible-body">
                                        <span>
                                            <p>WanderfullySo is a worldwide service. By using our products or services, you
                                                authorise us to transfer and store your information outside your home
                                                country, for the purposes described in this policy. The privacy protections
                                                and the rights of authorities to access your personal information in such
                                                countries may not be equivalent to those of your home country.</p>
                                            <p>We may transfer the personal data of EEA residents to a country outside the
                                                EEA. When we transfer information from the EEA to a country that doesn't
                                                provide an adequate level of protection, we’ll only do so under appropriate
                                                safeguards to protect your information, such as standard contractual
                                                clauses.</p>
                                            <p>If you have any questions about our data processing activities, you can
                                                contact our Data Protection Officer.</p>
                                            <p>If you think we haven't complied with data protection laws, you have the
                                                right to lodge a complaint with the Data Protection Commission or with your
                                                local supervisory authority.</p>
                                        </span>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="collapsible-header"><i className="mdi mdi-file-outline"></i>How & When We Share
                                        Your Information</div>
                                    <div className="collapsible-body">
                                        <span>
                                            <p>We also share your information with:</p>
                                            <ul>
                                                <li>Third-party companies, service providers or individuals that we employ
                                                    to process information on our behalf based on our instructions and for
                                                    the purposes described in this Privacy Policy. For example, we share
                                                    data with security consultants to help us get better at identifying
                                                    spam. Some information we acquire may be collected by third-party
                                                    providers on our behalf.</li>
                                                <li>Law enforcement agencies or government agencies. We only share
                                                    information if we believe that disclosure is reasonably necessary to
                                                    comply with a law, regulation or legal request; to protect the safety,
                                                    rights or property of the public, any person or Pinterest; or to detect,
                                                    prevent or otherwise address fraud, security or technical issues.</li>
                                                <li>Our affiliates and if we were to engage in a merger, acquisition,
                                                    bankruptcy, dissolution, reorganisation, or similar transaction or
                                                    proceeding that involves the transfer of the information described in
                                                    this Policy, we would share your information with a party involved in
                                                    such a process (for example, a potential purchaser).</li>
                                            </ul>
                                        </span>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="collapsible-header"><i className="mdi mdi-file-outline"></i>Our Policy Regarding
                                        Children's Information</div>
                                    <div className="collapsible-body">
                                        <span>
                                            <ul>
                                                <li>Children under 13 years of age are not allowed to use WanderfullySo. If
                                                    you are based in the EEA, you can only use WanderfullySo if you are over
                                                    the age at which you can provide consent to data processing under the
                                                    laws of your country.</li>
                                            </ul>
                                        </span>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="collapsible-header"><i className="mdi mdi-file-outline"></i>Duration For Which
                                        We Keep Your Information</div>
                                    <div className="collapsible-body">
                                        <span>
                                            <ul>
                                                <li>We only keep your information for as long as we need it to provide
                                                    Pinterest to you and fulfil the purposes described in this policy. This
                                                    is also the case for anyone that we share your information with and who
                                                    carries out services on our behalf. When we no longer need to use your
                                                    information and there is no need for us to keep it to comply with our
                                                    legal or regulatory obligations, we’ll either remove it from our systems
                                                    or depersonalise it so that we can't identify you.</li>
                                            </ul>
                                        </span>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="collapsible-header"><i className="mdi mdi-file-outline"></i>California Residents
                                    </div>
                                    <div className="collapsible-body">
                                        <span>
                                            <p>The California Consumer Privacy Act (CCPA) requires us to disclose categories
                                                of Personal Information we collect and how we use it, the categories of
                                                sources from whom we collect Personal Information, and the third parties
                                                with whom we share it, which we have explained above.</p>
                                            <p>We are also required to communicate information about rights California
                                                residents have under California law. You may exercise the following rights:
                                            </p>
                                            <ul>
                                                <li>Right to know and access. You may submit a verifiable request for
                                                    information regarding the: (1) categories of Personal Information we
                                                    collect, use or share; (2) purposes for which categories of Personal
                                                    Information are collected or used by us; (3) categories of sources from
                                                    which we collect Personal Information; and (4) specific pieces of
                                                    Personal Information we have collected about you.</li>
                                                <li>Right to equal service. We will not discriminate against you if you
                                                    exercise your privacy rights.</li>
                                                <li>Right to delete. You may submit a verifiable request to remove your
                                                    information and we will delete Personal Information about you that we
                                                    have collected.</li>
                                            </ul>
                                            <p>We do not sell the Personal Information of our users.</p>
                                            <p>In addition to exercising these rights yourself, you can also designate an
                                                authorised agent to make these requests on your behalf. In order to do this,
                                                we will ask you to verify the request directly via email.</p>
                                            <p>We collect the following categories of Personal Information and, in the past
                                                12 months, we have disclosed these categories of Personal Information for a
                                                business purpose to affiliates, service providers and third parties, as
                                                described in the How and when we share information section of this Privacy
                                                Policy:</p>
                                            <ul>
                                                <li>Identifiers, such as your name, username, email address, phone number,
                                                    unique device identifiers and your IP address</li>
                                                <li>Personal characteristics protected by law, such as your gender and age
                                                </li>
                                                <li>Commercial information, such as purchases made, and payment information
                                                </li>
                                                <li>Internet or electronic network activity information, such as information
                                                    about your device and your use of our Services</li>
                                                <li>Geo-location data, when shared through your device settings or photos
                                                </li>
                                                <li>Electronic, visual or similar information, such as photos</li>
                                                <li>Inferences we draw or derive about users, such as your interests or
                                                    preferences</li>
                                                <li>Other information you provide, such as comments</li>
                                            </ul>
                                            <p>We use and disclose this information for the business purposes described in
                                                the How & Why We Collect Your Information section in this Privacy Policy,
                                                including to: provide our Service, communicate with you to provide updates
                                                or respond to your comments and questions, audit our Service, detect
                                                security incidents and prevent fraud, debug and repair errors, maintain your
                                                account, provide customer service, process or fulfil orders, conduct
                                                research and development and other activities to improve our Service, show
                                                advertising, market our Services and understand how users interact with our
                                                Services.</p>
                                            <p>The best way to get in touch with us or to exercise your options described
                                                above is to <a href="ui-pages-contactus.html">contact us here</a>.</p>
                                            <p>Effective Date 31 May 2020<br />
                                                Last Updated 20 June 2021​​</p>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                            <p>Effective Date 31 May 2020<br />
                                Last Updated 20 June 2021​​</p>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    );
}

export default Privacy;
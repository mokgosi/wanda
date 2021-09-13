import Navbar from '../components/Navbar';
const Protection = () => {
    return (
        <>
            <div className="pagehead-bg primary-bg"></div>
            <div className="container has-pagehead is-pagetitle">
                <div className="section">
                    <h5 className="pagetitle">DATA PROTECTION OFFICER CONTACT</h5>
                </div>
            </div>
            <div className="container over">
                <div className="section">
                    <div className="row mt0">
                        <div className="col s12 pad-0">
                            <h5 className="bot-20 sec-tit">DATA PROTECTION</h5>

                            <p>As a reminder, if WanderfullySo holds your personal data and you are in the EU, you have
                                certain rights relating to the processing of that data. This is the page to submit a form to
                                WanderfullySo's Data Protection Officer, Lilian Makaleng. This form only functions as a
                                pathway for data subjects to contact us with regard to all issues related to the processing
                                of their personal data and to the exercise of those rights. Questions that are not related
                                to this will not receive a response to a submission of this form.​ </p>
                            <p>Questions may also include the requests listed below:</p>

                            <ul className="collapsible expandable">
                                <li className="">
                                    <div className="collapsible-header"><i className="mdi mdi-file-outline"></i>Your right to access
                                        the information we hold about you</div>
                                    <div className="collapsible-body">
                                        <span>
                                            If you would like to request access to the information we hold about you, please
                                            complete the form and send your request.
                                        </span>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="collapsible-header"><i className="mdi mdi-file-outline"></i>Your right to have
                                        your information corrected or deleted</div>
                                    <div className="collapsible-body">
                                        <span>
                                            If you have problems updating the information or if you would like us to delete
                                            it, please complete the form and send your request. We will do it as soon as
                                            possible.
                                        </span>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="collapsible-header"><i className="mdi mdi-file-outline"></i>Your right to object
                                        to us processing your information</div>
                                    <div className="collapsible-body">
                                        <span>
                                            <p>You can ask us to stop processing your information, even when the processing
                                                is necessary for our legitimate interests.</p>
                                            <p>You can unsubscribe from our newsletters from the link in the emails we sent
                                                you.</p>
                                        </span>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="collapsible-header"><i className="mdi mdi-file-outline"></i>Your right to have
                                        your information sent to another organisation</div>
                                    <div className="collapsible-body">
                                        <span>
                                            <p>In certain circumstances, you can ask us to provide you with your
                                                information. Where we hold this information with your consent or for the
                                                performance of a contract with you and it's technically feasible, you can
                                                also ask us to send the information to another organisation.</p>
                                            <p>If you have a question about something not addressed above, please complete
                                                the form and send us your question.</p>
                                            <p>We will not discriminate against you if you choose to exercise your options
                                                related to your personal information. We work to be clear with you about
                                                your options and the consequences of exercising certain options. If you have
                                                questions, please contact us.</p>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="pad-15">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="mdi mdi-account-outline prefix"></i>
                                <input id="first_name" type="text" className="validate" />
                                <label for="first_name">First Name</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <i className="mdi mdi-account-outline prefix"></i>
                                <input id="last_name2" type="text" className="validate" />
                                <label for="last_name2">Last Name</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <i className="mdi mdi-email-outline prefix"></i>
                                <input id="email" type="email" className="validate" />
                                <label for="email">Email</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12 textarea">
                                <i className="mdi mdi-pencil prefix"></i>
                                <textarea id="textarea-prefix" className="materialize-textarea"></textarea>
                                <label for="textarea-prefix">Describe your issue</label>
                                <span className="helper-text" data-error="Incorrect Email" data-success="Correct Email">Please
                                    briefly explain your issue. Please also indicate your relationship with WanderfullySo
                                    (for example you’re a Wanderer, an advertiser, or a regulator)</span>
                                <div className="spacer-small"></div>
                            </div>
                        </div>
                        <div className="spacer-small"></div>
                        <div className="row ">
                            <div className="spacer-small"></div>
                            <a className="waves-effect waves-light btn bg-primary ">Send</a>
                            <div className="spacer-small"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    );
}

export default Protection;
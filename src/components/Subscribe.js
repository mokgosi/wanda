import M from "materialize-css";

const Subscribe = () => {

    var elems = document.querySelectorAll('#modal');
    var instances = M.Modal.init(elems, {});

    return (
        <div id="modal" className="modal default-close">
            <div className="modal-content ">
                <h4 className="bot-20 sec-tit">Subscribe Newsletter</h4>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="mdi mdi-face prefix"></i>
                        <input id="event_title11" type="text" />
                        <label htmlFor="event_title11">Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="mdi mdi-email-outline prefix"></i>
                        <input id="event_title112" type="text" />
                        <label htmlFor="event_title112">Email</label>
                    </div>
                </div>
                <div className="row bot-0">
                    <div className="">
                        <a className="waves-effect waves-light btn bg-primary">Subscribe</a>&nbsp; &nbsp;
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;
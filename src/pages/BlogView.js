import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
import BlogPlaceholder from '../assets/images/placeholders/blog-105.jpg'
import Avatar from '../assets/images/placeholders/user-10.jpg';

const BlogView = () => {
    return (
        <>
            <div className="pagehead-bg primary-bg"></div>

            <div className="container has-pagehead is-pagetitle">
                <div className="section">
                    <h5 className="pagetitle">Blog View</h5>
                </div>
            </div>

            <div className="container over">
                <div className="section">
                    <div className="row ui-mediabox blogs">
                        <div className="col-item col s12 ">
                            <h4 className="title">Bringing positive outlook</h4>
                            <div className="user-avatar mini">
                                <div className="maillink status away">
                                    <img src={Avatar} alt="Gaby Cuchey" title="Gaby Cuchey" className="circle" />
                                    <span className="title">Gaby Cuchey</span>
                                    <span className="time">23 Feb 2020, Sun</span>
                                </div>
                            </div>
                            <div className="blog-img-wrap">
                                <div className='row'>
                                    <div className="col s12">
                                        <div className='row'>
                                            <div className="col s12">
                                                <a className="img-wrap round" href="assets/images/blog-109_1.jpg" data-fancybox="images"
                                                    data-caption="Bringing positive outlook of your project">
                                                    <img alt="image" className="" style={{ width: `100%` }} src={BlogPlaceholder} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-info">
                                <p>Blog long body string goes here.</p>

                                <div className="user-actions">
                                    <a href="#!"><i className="mdi mdi-thumb-up-outline"></i><span>203</span></a> <a href="#!" className='active'><i
                                        className="mdi mdi-heart-outline"></i><span>872</span></a> <a href="#!"><i
                                            className="mdi mdi-comment-outline"></i><span>923</span></a>
                                </div>
                                <div className="spacer"></div>
                                <div className="divider"></div>
                                <div className="spacer"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col s12 pad-0">
                            <h5 className="bot-20 sec-tit  ">Comment</h5>
                            <div className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="mdi mdi-face prefix"></i>
                                        <input id="event_title11" type="text" />
                                        <label for="event_title11">Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="mdi mdi-email-outline prefix"></i>
                                        <input id="event_title112" type="text" />
                                        <label for="event_title112">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12 textarea">
                                        <i className="mdi mdi-file-outline prefix"></i>
                                        <textarea id="textarea-prefix" className="materialize-textarea"></textarea>
                                        <label for="textarea-prefix">Brief Description</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="">
                                        <a className="waves-effect waves-light btn bg-primary">Submit Comment</a>&nbsp; &nbsp;
                                        <a className="waves-effect waves-light btn btn-secondary"><i className="mdi mdi-attachment"></i></a>&nbsp;
                                        &nbsp;
                                        <a className="waves-effect waves-light btn bg-secondary"><i className="mdi mdi-format-color-text"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    );
}

export default BlogView;
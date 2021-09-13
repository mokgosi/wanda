import React from "react";

const Blogs = ({ blogs }) => {
    return (
        <div className="row ui-mediabox blogs blogs-masonry" style={{ position: `relative` }}>
            {blogs.map((b, i) => (
                <div className="col-item col s6" key={b.id} style={{ position: `absolute`, left: `0px`, top: `0px` }}>
                    <a href="ui-app-blog-item.html">
                        <h5 className="title">{b.title}</h5>
                    </a>
                    <div className="user-avatar mini">
                        <div className="maillink status away">
                            <img src={b.user_image} className="circle" alt="Clem Jacklin" title="Clem Jacklin" />
                            <span className="title">{b.blogger}</span>
                            <span className="time">{b.date}</span>
                        </div>
                    </div>
                    <div className="blog-img-wrap">
                        <a className="img-wrap round" href="#">
                            <img alt="image" className="" src={b.image} style={{ width: `20%` }} />
                        </a>
                    </div>
                    <div className="blog-info">
                        <p className="bot-0 text">{b.tagline}</p>
                        <div className="user-actions">
                            <a href="#!" className="active"><i className="mdi mdi-thumb-up-outline"></i><span>715</span></a>
                            <a href="#!" className="active"><i className="mdi mdi-heart-outline"></i><span>973</span></a>
                            <a href="#!"><i className="mdi mdi-comment-outline"></i><span>945</span></a>
                        </div>
                        <div className="spacer"></div>
                        <div className="divider"></div>
                        <div className="spacer"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Blogs;

{/* <div className="col s12 ">
    <div className="setting-box center img-box ">
        <a className="img-wrap round" href="sub-apps-blog.html">
            <img src={b.image} alt="image" className="responsive-img "/>
        </a>
        <a href="sub-apps-blog.html">
            <h6>{b.title}</h6>
            <div className="tagline">{b.tagline}</div>
        </a>
    </div>
</div> */}
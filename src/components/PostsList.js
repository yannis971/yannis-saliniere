import React from 'react';
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import {Link} from "react-router-dom";

function PostsList(props) {
    return (
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                <h1> Nombre de publications : {props.count}</h1>
                <hr className="my-4" />
                { props.posts && props.posts.map(post => {
                    return (
                        <div key = {post.id} className="post-preview">
                            <h1 className="post-title">{post.title}</h1>
                            <h3 className="post-subtitle">{post.subtitle}</h3>
                            
                            <p className="post-meta">
                            Publié par <a href="#!">Yannis Saliniere</a> le <SimpleDateTime dateFormat="DMY" dateSeparator="/" showTime="0">{post.published}</SimpleDateTime> à <SimpleDateTime dateFormat="DMY" timeSeparator=":" showDate="0">{post.published}</SimpleDateTime>
                            </p>
                            <Link to={`${post.id}`}><button className="btn btn-primary">Read more</button></Link>
                            <hr className="my-4" />
                        </div>
                    )
                })
                } 
                </div>
            </div>
        </div>
    )
}

export default PostsList







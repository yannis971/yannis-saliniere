import React from 'react';

import SimpleDateTime  from 'react-simple-timestamp-to-date';

function CommentsList(props) {
    return (
        
        <div className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="card">
                    <div className="card-body">
                        <form className="mb-4"><textarea className="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form>
                        { props.comments && props.comments.map(comment => {
                            return (
                                <div key = {comment.id} className="d-flex">
                                    <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div className="ms-3">
                                        <div className="fw-bold">{comment.username} le <SimpleDateTime dateFormat="DMY" dateSeparator="/" showTime="0">{comment.created}</SimpleDateTime>
                                        </div>
                                        {comment.content}
                                    </div>
                                </div>
                            )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentsList







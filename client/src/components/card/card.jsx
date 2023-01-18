import React from "react";
import './card.css'

const Card = ({ post }) => {
    return (
        <>
            <section className="card">
                <section className="card-header">
                    <div>
                        <div className="card-header-name">{post.author}</div>
                        <div className="card-header-place">{post.location}</div>
                    </div>
                    <span>
                        <i className="fa-solid fa-ellipsis"></i>
                    </span>
                </section>

                <section className="card-image">
                    <img src={post.postImage} alt="place" />
                </section>

                <section className="card-actions">
                    <span>
                        <i className="fa-solid fa-heart"></i>
                    </span>
                    <span>
                        <i className="fa-solid fa-paper-plane"></i>
                    </span>
                    <span>{post.date}</span>
                </section>

                <section className="likes">
                    {post.likes} likes
                </section>

                <section className="description">
                    {post.description}
                </section>

            </section>
        </>
    )
}

export default Card;
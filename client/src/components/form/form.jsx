import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./form.css"
import FileBase64 from 'react-file-base64';

const Form = () => {

    const [form, setForm] = useState({ postImage: "", author: "", location: "", description: "" })
    const navigate = useNavigate()
    //const [error, setError] = useState({ postImage: { validation: true, message: "" }, author: { validation: true, message: "" }, location: { validation: true, message: "" }, description: { validation: true, message: "" } })
    const isAllInputsValied = form.postImage.length && form.author.length && form.location.length && form.description.length
    const [isValid, setIsValied] = useState(false)

    const handlePost = (e) => {
        e.preventDefault()

        // if (!form.postImage.length) {
        //     setError({ ...error, postImage: { validation: false, message: "Please provide an image" } })
        // }
        // if (!form.author.length) {
        //     setError({ ...error, author: { validation: false, message: "Please provide author name" } })
        // }
        // if (!form.location.length) {
        //     setError({ ...error, location: { validation: false, message: "Please provide location" } })
        // }
        // if (!form.description.length) {
        //     setError({ ...error, description: { validation: false, message: "Please provide description" } })
        // }



        if (isAllInputsValied === 0) {
            setIsValied(true)
        }
        else setIsValied(false)
        console.log(form);

        axios.post("http://localhost:5000/api/v1/posts/addpost", {
            postImage:form.postImage.base64,
            author:form.author,
            location:form.location,
            description:form.description
        })
        .then(() => navigate("/"))
            // .then(() => setForm({ postImage: "", author: "", location: "", description: "" }))
            

    }
    return (
        <>
            <section className="form-container">

                <form className="form" action="/addpost" method="post" onSubmit={handlePost}>

                    <article className="form-file-upload">
                        {/* <input type="text" placeholder="  No File Choosen" /> */}
                        {/* <input name="image" type="file" /> */}
                        <FileBase64
                            multiple={false}
                            onDone={(base64) => setForm({ ...form, postImage: base64 })} />
                        {/* {<div style={{color:"red"}}>{error.postImage.message}</div>} */}
                    </article>


                    <article className="form-details-1">
                        <input type="text" name="author" placeholder="  Author" onChange={(e) => setForm({ ...form, author: e.target.value })} value={form.author} />
                        {/* {<div style={{color:"red"}}>{error.author.message}</div>} */}
                        <input type="text" name="location" placeholder="  Location" onChange={(e) => setForm({ ...form, location: e.target.value })} value={form.location} />
                        {/* {<div style={{color:"red"}}>{error.location.message}</div>} */}
                    </article>



                    <article className="form-details-2">
                        <input type="text" name="description" placeholder="  Description" onChange={(e) => setForm({ ...form, description: e.target.value })} value={form.description} />
                        {/* {<div style={{color:"red"}}>{error.description.message}</div>} */}
                    </article>
                    {
                        isValid &&
                        <div style={{ color: "red", marginTop: "-10px" }}>All fields are mandatory</div>
                    }

                    <article className="post-button">
                        <button >Post</button>
                    </article>

                </form>

            </section>
        </>
    )
}

export default Form;
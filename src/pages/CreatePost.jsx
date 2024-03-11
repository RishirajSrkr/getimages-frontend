import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function CreatePost() {

  const POST_CATEGORIES = ["Agriculture", "Business", "Education", "Entertainment", "Art", "Investment"]

  const [formData, setFormData] = useState({
    title: "",
    category: "Uncategorized",
    thumbnail: "",
  })
  const [description, setDescription] = useState("");

 console.log(

  {
    title: formData.title,
    description,
    category: formData.category
  }
 );

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
      ["clean"],
    ],
  }

  const formats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", "color", "clean",
  ];


  function handleForm(e) {
    setFormData(prev => (
      { ...prev, [e.target.name]: e.target.value }
    ))
  }

  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        <p className='form__error-message'>This is an error message</p>

        <form className="form create-post__form">
          <input type="text"
            placeholder='Title'
            name='title'
            value={formData.title}
            onChange={(e) => handleForm(e)}
            autoFocus
          />
          <select
            name='category'
            value={formData.category}
            onChange={(e) => handleForm(e)}
          >

            {POST_CATEGORIES.map((category) => {
              return <option key={category}>{category}</option>
            })}
          </select>

          <ReactQuill
            modules={modules}
            formats={formats}
            value={description}
            onChange={setDescription}
          />

          <input type="file" name='thumbnail' onChange={(e) => handleForm(e)} accept='png, jpg, jpeg' />

          <button type='submit' className='btn primary'>Create Post</button>
        </form>
      </div>
    </section>
  )
}

export default CreatePost
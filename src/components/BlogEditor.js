import React, { useState, useRef, useMemo } from "react";
import axios from "axios";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react"; // ✅ Import Image Resize module
import "../css/blogEditor.css";

Quill.register("modules/imageResize", ImageResize); // ✅ Register Image Resize module

const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const quillRef = useRef(null);

  // ✅ Undo function
  const handleUndo = () => {
    if (quillRef.current) {
      quillRef.current.getEditor().history.undo();
    }
  };

  // ✅ Redo function
  const handleRedo = () => {
    if (quillRef.current) {
      quillRef.current.getEditor().history.redo();
    }
  };

  // ✅ Custom toolbar with undo/redo buttons
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline"],
          ["image", "video"],
          ["undo", "redo"],
        ],
        handlers: {
          undo: handleUndo,
          redo: handleRedo,
        },
      },
      history: {
        delay: 1000,
        maxStack: 500,
        userOnly: true,
      },
      imageResize: {
        parchment: Quill.import("parchment"),
        modules: ["Resize", "DisplaySize", "Toolbar"], // ✅ Enables cropping & resizing
      },
    }),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = { title, content };
    try {
      const res = await axios.post("http://localhost:5000/api/blogs", blogData);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* ✅ Undo & Redo Buttons */}
        <div className="btn-group my-3">
          <button type="button" className="btn btn-secondary" onClick={handleUndo}>
            Undo ↩️
          </button>
          <button type="button" className="btn btn-secondary mx-2" onClick={handleRedo}>
            Redo ↪️
          </button>
        </div>

        <div className="form-group blog-height">
          <label>Content</label>
          <ReactQuill
            ref={quillRef}
            defaultValue={content}
            onChange={setContent}
            modules={modules}
            formats={[
              "header",
              "font",
              "list",
              "bullet",
              "bold",
              "italic",
              "underline",
              "image",
              "video",
            ]}
            style={{ height: "400px" }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogEditor;

import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from 'quill-image-uploader';

// Register image uploader module
Quill.register('modules/imageUploader', ImageUploader);

const BlogEditor = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const blogData = { title, content };
        try {
            const res = await axios.post('http://localhost:5000/api/blogs', blogData);
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const modules = {
        toolbar: {
            container: [
                [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                ['bold', 'italic', 'underline'],
                ['image', 'video']
            ],
            handlers: {
                image: () => {
                    const input = document.createElement('input');
                    input.setAttribute('type', 'file');
                    input.setAttribute('accept', 'image/*');
                    input.click();
                    input.onchange = async () => {
                        const file = input.files[0];
                        const formData = new FormData();
                        formData.append('file', file);
                        try {
                            const res = await axios.post('http://localhost:5000/api/upload', formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            });
                            const range = this.quill.getSelection();
                            this.quill.insertEmbed(range.index, 'image', res.data.fileUrl);
                        } catch (err) {
                            console.error(err);
                        }
                    };
                },
                video: () => {
                    const url = prompt('Enter video URL');
                    if (url) {
                        const range = this.quill.getSelection();
                        this.quill.insertEmbed(range.index, 'video', url);
                    }
                }
            }
        }
    };

    const formats = [
        'header', 'font',
        'list', 'bullet',
        'bold', 'italic', 'underline',
        'image', 'video'
    ];

    return (
        <div className="container mt-5">
            <h2>Create Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <ReactQuill value={content} onChange={setContent} modules={modules} formats={formats} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default BlogEditor;

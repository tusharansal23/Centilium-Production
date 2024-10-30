import React, { useState } from 'react';

const Dashboard = () => {
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission of the blog content, e.g., save to database, etc.
    console.log('Blog content:', content);
    // Clear the textarea after submission
    setContent('');
  };

  return (
    <div>
      <h2>Write Your Blog</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={handleChange}
          placeholder="Write your blog here..."
          rows={10} // Adjust the number of rows as needed
          cols={50} // Adjust the number of columns as needed
          required
        />
        <br />
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default Dashboard;

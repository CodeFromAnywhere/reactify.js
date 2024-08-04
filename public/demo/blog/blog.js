// blog.js
function Blog(blogId) {
  const blogs = getBlogs();
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return `
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold mb-4">Blog not found</h2>
                <p class="text-gray-600">Sorry, the requested blog post could not be found.</p>
            </div>
        `;
  }

  return `
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold mb-4">${blog.title}</h2>
            <p class="text-gray-600 mb-4">Published on: ${new Date(
              blog.date,
            ).toLocaleDateString()}</p>
            <div class="prose">${blog.content}</div>
        </div>
    `;
}

const [getTitle, setTitle] = useState("");
const [getContent, setContent] = useState("");
const [getSelectedBlogId, setSelectedBlogId] = useState(null);

function createBlog() {
  const newBlog = {
    id: Date.now(),
    title: getTitle(),
    content: getContent(),
    date: new Date().toISOString(),
  };
  setBlogs((prev) => [...prev, newBlog]);
  setTitle("");
  setContent("");
}

function updateBlog() {
  console.log("UPDATE");
  setBlogs((prev) =>
    prev.map((blog) =>
      blog.id === getSelectedBlogId()
        ? { ...blog, title: getTitle(), content: getContent() }
        : blog,
    ),
  );

  setSelectedBlogId(null);
  setTitle("");
  setContent("");
}

function deleteBlog() {
  setBlogs((prev) => prev.filter((blog) => blog.id !== getSelectedBlogId()));
  setSelectedBlogId(null);
  setTitle("");
  setContent("");
}

function selectBlog(blogId) {
  const blog = getBlogs().find((b) => b.id === blogId);
  if (blog) {
    setSelectedBlogId(blog.id);
    setTitle(blog.title);
    setContent(blog.content);
  }
}

function renderAdmin() {
  return `
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold mb-4">Admin Panel</h2>
            <form onsubmit="event.preventDefault(); ${
              getSelectedBlogId() ? "updateBlog()" : "createBlog()"
            }">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                        Title
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                           id="title" 
                           type="text" 
                           placeholder="Blog Title" 
                           value="${getTitle()}" 
                           onchange="setTitle(this.value)">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="content">
                        Content
                    </label>
                    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                              id="content" 
                              placeholder="Blog Content" 
                              rows="6"
                              onchange="setContent(this.value)">${getContent()}</textarea>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            type="submit">
                        ${getSelectedBlogId() ? "Update" : "Create"} Blog
                    </button>
                    ${
                      getSelectedBlogId()
                        ? `
                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                                type="button"
                                onclick="deleteBlog()">
                            Delete Blog
                        </button>
                    `
                        : ""
                    }
                </div>
            </form>
            <div class="mt-8">
                <h3 class="text-xl font-bold mb-2">Edit Existing Blogs</h3>
                <ul>
                    ${getBlogs()
                      .map(
                        (blog) => `
                        <li>
                            <a href="#" onclick="selectBlog(${blog.id})" class="text-blue-500 hover:underline">
                                ${blog.title}
                            </a>
                        </li>
                    `,
                      )
                      .join("")}
                </ul>
            </div>
        </div>
    `;
}

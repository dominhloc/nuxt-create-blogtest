// Định nghĩa một hàm vô danh mặc định để xuất ra các hàm tương tác với API WordPress.
export default () => {
  // Lấy cấu hình runtime, thường dùng trong các dự án Nuxt.
  const config = useRuntimeConfig();
  // Định nghĩa URL gốc của API WordPress.
  const WP_URL = "https://api.jahid.dev";

  // Hàm trợ giúp để thực hiện yêu cầu GET tới một endpoint cụ thể của API.
  const get = async (endpoint) => {
    // Sử dụng hàm useFetch để thực hiện yêu cầu GET và trả về dữ liệu.
    return useFetch(`${WP_URL}/wp-json/wp/v2/${endpoint}`);
  };

  // Hàm để lấy danh sách các bài viết. Có thể lọc theo danh mục, phân trang, và chọn các trường cụ thể.
  const getPosts = async (
    category,
    page = 1,
    perPage = 20,
    fields = "author,id,excerpt,title,link,slug,date"
  ) => {
    // Tạo chuỗi truy vấn để lấy bài viết với các thông số đã cho.
    let query = `posts?page=${page}&per_page=${perPage}&_embed=1`;
    // Nếu có danh mục, thêm vào chuỗi truy vấn.
    if (category) {
      query += `&categories=${category}`;
    }

    // Gọi hàm get để thực hiện yêu cầu và trả về kết quả dưới dạng mảng các bài viết.
    return get(query);
  };

  // Hàm để lấy một bài viết cụ thể dựa trên slug của bài viết.
  const getPost = async (slug) => {
    // Gọi hàm get với endpoint bao gồm slug của bài viết và trả về kết quả.
    return get(`posts?slug=${slug}&_embed=1`);
  };

  // Hàm để lấy danh sách các danh mục. Các trường cần lấy được chỉ định bởi tham số fields.
  const getCatgories = async (fields = "name,slug,count") => {
    // Gọi hàm get với endpoint 'categories' và trả về kết quả.
    return get(`categories`);
  };

  // Hàm để lấy thông tin của một danh mục cụ thể dựa trên slug của danh mục.
  const getCatgory = async (slug) => {
    // Gọi hàm get với endpoint bao gồm slug của danh mục và trả về kết quả.
    return get(`categories?slug=${slug}`);
  };

  // Trả về các hàm đã định nghĩa để có thể sử dụng chúng trong các phần khác của ứng dụng.
  return {
    get,
    getPosts,
    getPost,
    getCatgories,
    getCatgory,
  };
};

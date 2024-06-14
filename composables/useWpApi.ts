// Import interface Post từ tệp post.ts.
// Interface này được sử dụng để định nghĩa cấu trúc của một bài viết.
import { Post } from "../types/post";

// Xuất một hàm vô danh mặc định. Hàm này chứa các hàm con để tương tác với API WordPress.
export default () => {
  // Lấy cấu hình runtime bằng cách sử dụng hàm useRuntimeConfig. Thường dùng trong các dự án Nuxt.
  const config = useRuntimeConfig();
  // Định nghĩa URL gốc của API WordPress. Biến này sẽ được sử dụng trong các hàm yêu cầu API.
  const WP_URL: string = "https://api.jahid.dev";

  // Hàm trợ giúp để thực hiện yêu cầu GET tới một endpoint cụ thể của API.
  const get = async <T>(endpoint: string) => {
    // Sử dụng hàm useFetch để thực hiện yêu cầu GET và trả về dữ liệu dưới dạng kiểu T.
    return useFetch<T>(`${WP_URL}/wp-json/wp/v2/${endpoint}`);
  };

  // Hàm để lấy danh sách các bài viết. Có thể lọc theo danh mục, phân trang, và chọn các trường cụ thể.
  const getPosts = async (
    // ID của danh mục, tùy chọn.
    category?: number,
    // Số trang, mặc định là 1.
    page: number = 1,
    // Số lượng bài viết mỗi trang, mặc định là 20.
    perPgae: number = 20,
    // Các trường cần lấy, mặc định là các trường cơ bản của bài viết.
    fields: string = "author,id,excerpt,title,link,slug,date"
  ) => {
    // Tạo chuỗi truy vấn để lấy bài viết với các thông số đã cho.
    let query: string = `posts?page=${page}&per_page=${perPgae}&_embed=1`;
    // Nếu có danh mục, thêm vào chuỗi truy vấn.
    if (category) {
      query += `&categories=${category}`;
    }

    // Gọi hàm get để thực hiện yêu cầu và trả về kết quả dưới dạng mảng các bài viết.
    return get<Post[]>(query);
  };

  // Hàm để lấy một bài viết cụ thể dựa trên slug của bài viết.
  const getPost = async (slug: string) => {
    // Gọi hàm get với endpoint bao gồm slug của bài viết và trả về kết quả dưới dạng mảng các bài viết.
    return get<Post[]>(`posts?slug=${slug}&_embed=1`);
  };

  // Hàm để lấy danh sách các danh mục. Các trường cần lấy được chỉ định bởi tham số fields.
  const getCatgories = async (fields: string = "name,slug,count") => {
    // Gọi hàm get với endpoint 'categories' và trả về kết quả.
    return get<any>(`categories`);
  };

  // Hàm để lấy thông tin của một danh mục cụ thể dựa trên slug của danh mục.
  const getCatgory = async (slug: string) => {
    // Gọi hàm get với endpoint bao gồm slug của danh mục và trả về kết quả.
    return get<any>(`categories?slug=${slug}`);
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

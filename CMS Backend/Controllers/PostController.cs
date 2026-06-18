using CMS.Data;
using CMS.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace CMS_Backend.Controllers
{

    using Microsoft.AspNetCore.Authorization; // Cần thêm namespace này
    using System;
    using System.IO;
    using System.Threading.Tasks;

    [Authorize(Roles = "Admin,Editor")]

    public class PostController : Controller
    {
        private readonly ApplicationDbContext _context;

       
        public PostController(ApplicationDbContext context)
        {
            _context = context;
        }

        // Hiển thị danh sách bài viết
        public IActionResult Index(int? id)
        {
            var posts = _context.Posts
                .Include(p => p.Category)
                .AsQueryable();

            // Nếu có CategoryId thì lọc
            if (id != null)
            {
                posts = posts.Where(p => p.CategoryId == id);
            }

            var data = posts
                .OrderByDescending(p => p.CreatedDate)
                .ToList();

            return View(data);
        }


        // Hiển thị chi tiết bài viết
        public IActionResult Details(int id)
        {
            // 1. Truy vấn bài viết theo ID
            // Sử dụng .Include(p => p.Category) để lấy kèm thông tin Danh mục (Join bảng)
            var post = _context.Posts
                .Include(p => p.Category)
                .FirstOrDefault(p => p.Id == id);

            // 2. Kiểm tra nếu không tìm thấy bài viết (tránh lỗi màn hình trắng)
            if (post == null)
            {
                return NotFound(); // Trả về trang lỗi 404
            }

            // 3. Truyền dữ liệu sang View
            return View(post);
        }
        // 1. Hàm hiển thị form tạo mới bài viết (GET)
        [HttpGet]
        public IActionResult Create()
        {
            // Chúng ta lấy danh sách Category để đổ vào ViewBag
            ViewBag.CategoryList = new SelectList(_context.Categories, "Id", "Name");
            return View();
        }



        [HttpPost]
        public async Task<IActionResult> Create(
            Post model,
            IFormFile ImageFile)
        {
            if (ImageFile != null)
            {
                string fileName =
                    Guid.NewGuid().ToString()
                    + Path.GetExtension(ImageFile.FileName);

                string uploadFolder =
                    Path.Combine(
                        Directory.GetCurrentDirectory(),
                        "wwwroot/images");

                if (!Directory.Exists(uploadFolder))
                {
                    Directory.CreateDirectory(uploadFolder);
                }

                string filePath =
                    Path.Combine(uploadFolder, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await ImageFile.CopyToAsync(stream);
                }

                model.ImageUrl =
                    "/images/" + fileName;
            }

            _context.Posts.Add(model);
            await _context.SaveChangesAsync();

            return RedirectToAction(nameof(Index));
        }
        public IActionResult Delete(int id)
        {
            // 1. Tìm bài viết theo Id
            var post = _context.Posts.Find(id);

            if (post != null)
            {
                // 2. Xóa khỏi bộ nhớ tạm
                _context.Posts.Remove(post);

                // 3. Cập nhật xuống SQL Server
                _context.SaveChanges();
            }
            return RedirectToAction("Index");
        }
        // GET: Hiển thị form kèm dữ liệu cũ
        [HttpGet]
        public IActionResult Edit(int id)
        {
            var post = _context.Posts.Find(id);
            if (post == null) return NotFound();

            // Chuẩn bị lại danh sách danh mục để người dùng có thể đổi chuyên mục
            ViewBag.CategoryList = new SelectList(_context.Categories, "Id", "Name", post.CategoryId);
            return View(post);
        }

        // POST: Thực hiện cập nhật
        [HttpPost]
        public async Task<IActionResult> Edit(
            Post model,
            IFormFile ImageFile)
        {
            var post = await _context.Posts
                .FirstOrDefaultAsync(x => x.Id == model.Id);

            if (post == null)
                return NotFound();

            post.Title = model.Title;
            post.Content = model.Content;
            post.CategoryId = model.CategoryId;
            post.CreatedDate = model.CreatedDate;

            if (ImageFile != null)
            {
                string fileName =
                    Guid.NewGuid().ToString()
                    + Path.GetExtension(ImageFile.FileName);

                string uploadFolder =
                    Path.Combine(
                        Directory.GetCurrentDirectory(),
                        "wwwroot/images");

                string filePath =
                    Path.Combine(uploadFolder, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await ImageFile.CopyToAsync(stream);
                }

                post.ImageUrl =
                    "/images/" + fileName;
            }

            await _context.SaveChangesAsync();

            return RedirectToAction(nameof(Index));
        }


    }
}
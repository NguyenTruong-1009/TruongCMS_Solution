using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CMS.Data;
using CMS.Data.Entities;
using Microsoft.AspNetCore.Hosting;
using CMS_Backend.Models;
namespace CMS_Backend.Controllers
{
    public class ProductController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _environment;

        public ProductController(
            ApplicationDbContext context,
            IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        // =====================================================
        // DANH SÁCH SẢN PHẨM
        // =====================================================



public IActionResult Index(int page = 1)
    {
        int pageSize = 5;

        var totalItems = _context.Products.Count();

        var products = _context.Products
            .Include(x => x.CategoryProduct)
            .OrderByDescending(x => x.Id)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToList();

        var model = new PagedResult<Product>
        {
            Items = products,
            CurrentPage = page,
            TotalPages = (int)Math.Ceiling((double)totalItems / pageSize),
            TotalItems = totalItems,
            PageSize = pageSize
        };

        return View(model);
    }



    [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(
            Product model,
            IFormFile ImageFile)
        {
            if (ModelState.IsValid)
            {
                // Kiểm tra có upload file không
                if (ImageFile != null && ImageFile.Length > 0)
                {
                    // Tạo tên file mới tránh trùng
                    string fileName = Guid.NewGuid().ToString()
                        + Path.GetExtension(ImageFile.FileName);

                    // Đường dẫn thư mục lưu ảnh
                    string uploadFolder = Path.Combine(
                        _environment.WebRootPath,
                        "images");

                    // Nếu chưa có thư mục thì tạo
                    if (!Directory.Exists(uploadFolder))
                    {
                        Directory.CreateDirectory(uploadFolder);
                    }

                    // Đường dẫn file
                    string filePath = Path.Combine(uploadFolder, fileName);

                    // Upload file
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await ImageFile.CopyToAsync(stream);
                    }

                    // Lưu tên file vào database
                    model.ImageUrl = fileName;
                }

                _context.Products.Add(model);

                await _context.SaveChangesAsync();

                return RedirectToAction("Index");
            }

            return View(model);
        }

        // =====================================================
        // SỬA SẢN PHẨM
        // =====================================================

        [HttpGet]
        public IActionResult Edit(int id)
        {
            var product = _context.Products.Find(id);

            if (product == null)
            {
                return NotFound();
            }

            return View(product);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(
            Product model,
            IFormFile ImageFile)
        {
            if (ModelState.IsValid)
            {
                var product = await _context.Products.FindAsync(model.Id);

                if (product == null)
                {
                    return NotFound();
                }

                product.Name = model.Name;
                product.Description = model.Description;
                product.Price = model.Price;
                product.StockQuantity = model.StockQuantity;
                product.CategoryProductId = model.CategoryProductId;

                // Upload ảnh mới nếu có
                if (ImageFile != null && ImageFile.Length > 0)
                {
                    string fileName = Guid.NewGuid().ToString()
                        + Path.GetExtension(ImageFile.FileName);

                    string uploadFolder = Path.Combine(
                        _environment.WebRootPath,
                        "images");

                    if (!Directory.Exists(uploadFolder))
                    {
                        Directory.CreateDirectory(uploadFolder);
                    }

                    string filePath = Path.Combine(uploadFolder, fileName);

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await ImageFile.CopyToAsync(stream);
                    }

                    product.ImageUrl = fileName;
                }

                await _context.SaveChangesAsync();

                return RedirectToAction("Index");
            }

            return View(model);
        }

        // =====================================================
        // XÓA SẢN PHẨM
        // =====================================================

        public IActionResult Delete(int id)
        {
            var product = _context.Products.Find(id);

            if (product != null)
            {
                _context.Products.Remove(product);

                _context.SaveChanges();
            }

            return RedirectToAction("Index");
        }

        // =====================================================
        // CHI TIẾT SẢN PHẨM
        // =====================================================

        public IActionResult Details(int id)
        {
            var product = _context.Products
                .FirstOrDefault(p => p.Id == id);

            if (product == null)
            {
                return NotFound();
            }

            return View(product);
        }
    
    [HttpGet("search")]
        public IActionResult Search(
string keyword)
        {
            var products = _context.Products
                .Where(x =>
                    x.Name.Contains(keyword))
                .ToList();

            return Ok(products);
        }
    }
}
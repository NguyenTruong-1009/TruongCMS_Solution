using CMS.Data;
using CMS.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CMS_Backend.Controllers
{
    public class CategoryProductController : Controller
    {
        private readonly ApplicationDbContext _context;

        public CategoryProductController(ApplicationDbContext context)
        {
            _context = context;
        }

        // DANH SÁCH
        public async Task<IActionResult> Index()
        {
            return View(await _context.CategoriesProducts.ToListAsync());
        }

        // THÊM
        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(CategoryProduct model)
        {
            if (ModelState.IsValid)
            {
                _context.CategoriesProducts.Add(model);
                await _context.SaveChangesAsync();

                return RedirectToAction(nameof(Index));
            }

            return View(model);
        }

        // CHI TIẾT
        public async Task<IActionResult> Details(int id)
        {
            var item = await _context.CategoriesProducts
                .FirstOrDefaultAsync(x => x.Id == id);

            if (item == null)
                return NotFound();

            return View(item);
        }

        // SỬA
        [HttpGet]
        public async Task<IActionResult> Edit(int id)
        {
            var item = await _context.CategoriesProducts.FindAsync(id);

            if (item == null)
                return NotFound();

            return View(item);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(CategoryProduct model)
        {
            if (ModelState.IsValid)
            {
                _context.CategoriesProducts.Update(model);
                await _context.SaveChangesAsync();

                return RedirectToAction(nameof(Index));
            }

            return View(model);
        }

        // XÓA
        public async Task<IActionResult> Delete(int id)
        {
            var item = await _context.CategoriesProducts.FindAsync(id);

            if (item == null)
                return NotFound();

            _context.CategoriesProducts.Remove(item);

            await _context.SaveChangesAsync();

            return RedirectToAction(nameof(Index));
        }
    }
}
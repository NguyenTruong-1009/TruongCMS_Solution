using CMS.Data;

using CMS.Data.Entities;

using Microsoft.AspNetCore.Mvc;

using Microsoft.EntityFrameworkCore;



namespace CMS_Backend.Controllers

{

    public class OrderController : Controller

    {

        private readonly ApplicationDbContext _context;



        public OrderController(ApplicationDbContext context)

        {

            _context = context;

        }



        public IActionResult Index()

        {

            var orders = _context.Orders

                .Include(x => x.Customer)

                .ToList();



            return View(orders);

        }



        public IActionResult Details(int id)

        {

            var order = _context.Orders

                .Include(x => x.Customer)

                .Include(x => x.OrderDetails)

                .ThenInclude(x => x.Product)

                .FirstOrDefault(x => x.Id == id);



            if (order == null)

                return NotFound();



            return View(order);

        }



        public IActionResult Edit(int id)

        {

            var order = _context.Orders

                .FirstOrDefault(x => x.Id == id);



            if (order == null)

                return NotFound();



            return View(order);

        }



        [HttpPost]

        public IActionResult Edit(Order model)

        {

            var order = _context.Orders

                .FirstOrDefault(x => x.Id == model.Id);



            if (order == null)

                return NotFound();



            order.Status = model.Status;



            _context.SaveChanges();



            return RedirectToAction(nameof(Index));

        }

    }

}

using CMS.Data;
using CMS.Data.Entities;
using Microsoft.AspNetCore.Mvc;

namespace CMS_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public OrdersController(ApplicationDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// API nhận đơn hàng từ Frontend
        /// POST: api/Orders
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] OrderInputDTO input)
        {
            if (input == null)
            {
                return BadRequest(new
                {
                    message = "Dữ liệu đơn hàng không hợp lệ"
                });
            }

            try
            {
                // 1. Lưu thông tin khách hàng
                var customer = new Customer
                {
                    FullName = input.CustomerName,
                    Email = input.Email,
                    Phone = input.Phone,
                    Address = input.Address,
                    Password = "123456"
                };

                _context.Customers.Add(customer);
                await _context.SaveChangesAsync();

                // 2. Tạo đơn hàng
                var order = new Order
                {
                    CustomerId = customer.Id,
                    OrderDate = DateTime.Now,
                    Status = 0,
                    Notes = input.Notes,
                    TotalAmount = input.TotalAmount
                };

                _context.Orders.Add(order);
                await _context.SaveChangesAsync();

                // 3. Lưu chi tiết đơn hàng
                foreach (var item in input.OrderDetails)
                {
                    var detail = new OrderDetail
                    {
                        OrderId = order.Id,
                        ProductId = item.ProductId,
                        Quantity = item.Quantity,
                        UnitPrice = item.UnitPrice,
                        TotalAmount = item.Quantity * item.UnitPrice
                    };

                    _context.OrderDetails.Add(detail);
                }

                await _context.SaveChangesAsync();

                return StatusCode(201, new
                {
                    message = "Đặt hàng thành công!",
                    orderId = order.Id
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    message = ex.Message,
                    inner = ex.InnerException?.Message
                });
            }
        }
    }

    // DTO nhận dữ liệu từ Frontend
    public class OrderInputDTO
    {
        public string CustomerName { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public string Notes { get; set; }

        public decimal TotalAmount { get; set; }

        public List<OrderDetailDTO> OrderDetails { get; set; }
    }

    public class OrderDetailDTO
    {
        public int ProductId { get; set; }

        public int Quantity { get; set; }

        public decimal UnitPrice { get; set; }
    }
}
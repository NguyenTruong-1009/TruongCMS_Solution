namespace CMS_Backend.Models
{
    public class CheckoutRequest
    {
        public int CustomerId { get; set; }

        public string FullName { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public List<CartItem> Items { get; set; }
    }

    public class CartItem
    {
        public int ProductId { get; set; }

        public int Quantity { get; set; }
    }
}
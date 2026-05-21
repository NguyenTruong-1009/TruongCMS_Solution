/*
 * Sinh vien :Mguyen Xuan Truong
 * Ma so:2123110005
 * gay thuc hien:14/05/2026
 * Version 1.0
 * 
 */

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CMS.Data.Entities
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string FullName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        public string? Phone { get; set; }

        public string? Address { get; set; }

        [Required]
        public string Password { get; set; }

        public virtual ICollection<Order>? Orders { get; set; }
    }
}
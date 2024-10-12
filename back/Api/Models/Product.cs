using System;

namespace Api.Models
{
    public class Product
    {
        public int id { get; set; }
        public required string name { get; set; }
        public decimal price { get; set; }
    }
}
using System;

namespace Api.Models
{
public class Product
{
    public int id { get; set; }

    public required string name { get; set; }
    public decimal price { get; set; }

    public int quantity_in_stock { get; set; }
    public int reorder_level { get; set; }
    public string? category { get; set; }
    public string? supplier { get; set; }
    public string? description { get; set; }
}
}
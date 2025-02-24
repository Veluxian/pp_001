namespace back_pp_001.Models
{
    public class Item
    {
        public int IdItem { get; set; }
        public string? ItemName { get; set; }
        public string? ItemDescription { get; set; }
        public int ItemWeight { get; set; }
        public int ItemPrice { get; set; }
        public int IdItemType { get; set; }

        public required ItemType ItemType { get; set; }
        public required ICollection<ItemsCollection> ItemCollection { get; set; }
    }
}

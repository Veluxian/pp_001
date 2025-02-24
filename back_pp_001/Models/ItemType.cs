namespace back_pp_001.Models
{
    public class ItemType
    {
        public int IdItemType {  get; set; }
        public string? NameItemType { get; set; }

        public required ICollection<Item> Item { get; set; }
    }
}

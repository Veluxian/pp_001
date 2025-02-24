namespace back_pp_001.Models
{
    public class ItemsCollection
    {
        public int IdContainer { get; set; }
        public int IdItem { get; set; }
        public int ItemQuantity { get; set; }

        public required Item Item { get; set; }
        public required Container Container { get; set; }
    }
}

namespace back_pp_001.Models
{
    public class Container
    {
        public int IdContainer { get; set; }
        public string? NameContainer {  get; set; }
        public int ContainerCapacity { get; set; }
        public string? ContainerDescription { get; set; }

        public required ICollection<ItemsCollection> ItemCollection { get; set; }
        public required Inventory Inventory { get; set; }
    }
}

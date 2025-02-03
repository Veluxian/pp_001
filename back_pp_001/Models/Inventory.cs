using System.ComponentModel.DataAnnotations;

namespace back_pp_001.Models
{
    public class Inventory
    {
        [Required]
        public int IdInventory {  get; set; }
        [Required]
        public int TotalWeight { get; set; }
        [Required]
        public int IdPurse { get; set; }

        public required Purse Purse { get; set; }

    }
}

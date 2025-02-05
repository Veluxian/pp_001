using System.ComponentModel.DataAnnotations;

namespace back_pp_001.Models
{
    public class Purse
    {
        [Required]
        public int IdPurse { get; set; }

        public required ICollection<Inventory> Inventory { get; set; }
        public required ICollection<PurseContent> PurseContent { get; set; }
    }
}

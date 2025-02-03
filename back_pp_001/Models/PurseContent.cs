using System.ComponentModel.DataAnnotations;

namespace back_pp_001.Models
{
    public class PurseContent
    {
        [Required]
        public int IdPurse { get; set; }
        [Required]
        public int IdCoinType { get; set; }
        [Required]
        public int Quantity { get; set; }
    }
}

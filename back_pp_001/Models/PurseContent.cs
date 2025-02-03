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
        
        public required Purse Purse { get; set; }
        public required CoinType CoinType { get; set; }
    }
}

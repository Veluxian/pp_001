using System.ComponentModel.DataAnnotations;

namespace back_pp_001.Models
{
    public class CoinType
    {
        [Required]
        public int IdCoinType {  get; set; }
       
        public required string NameCoinType { get; set; }

        public required ICollection<PurseContent> PurseContent { get; set; }
    }
}

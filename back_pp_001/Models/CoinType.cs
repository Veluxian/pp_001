using System.ComponentModel.DataAnnotations;

namespace back_pp_001.Models
{
    public class CoinType
    {
        [Required]
        public int IdCoinType {  get; set; }
       
        [Required]
        public string NameCoinType { get; set; }
    }
}

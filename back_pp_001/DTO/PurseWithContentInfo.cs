namespace back_pp_001.DTO
{
    public class PurseWithContentInfo
    {
        public required int IdPurse { get; set; }
        public required List<CoinQuantity> Coins { get; set; }
    }
}

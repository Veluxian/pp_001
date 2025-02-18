using back_pp_001.DTO;

namespace back_pp_001.Interfaces
{
    public interface ICurrencyInterface
    {
        IEnumerable<PurseWithContentInfo> GetActualCurrency();

        Task<PurseWithContentInfo?> GetCurrencyById(int id);

        Task<PurseWithContentInfo?> AddSelledItem(int id);
    }
}

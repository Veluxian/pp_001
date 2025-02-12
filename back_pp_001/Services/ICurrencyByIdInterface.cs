using back_pp_001.DTO;

namespace back_pp_001.Services
{
    public interface ICurrencyByIdInterface
    {
        IEnumerable<PurseWithContentInfo> GetCurrencyById(int id);
    }
}

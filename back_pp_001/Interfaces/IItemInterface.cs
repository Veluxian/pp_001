using back_pp_001.DTO;

namespace back_pp_001.Interfaces
{
    public interface IItemInterface
    {
        IEnumerable<ItemInfo> GetItems();
        //Task<ItemInfo> GetItemById(int id);
        //Task<ItemInfo> DeleteItemById(int id);

    }
}

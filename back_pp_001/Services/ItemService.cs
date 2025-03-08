using Microsoft.EntityFrameworkCore;
using back_pp_001.Interfaces;
using back_pp_001.Data;
using back_pp_001.DTO;

namespace back_pp_001.Services
{
    public class ItemService :IItemInterface
    {
        private readonly ApplicationDbContext _context;

        public ItemService(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<ItemInfo> GetItems()
        {
            var allItems = _context.items
                .Select(pc => new ItemInfo
                {
                    ItemName = pc.ItemName,
                    ItemDescription = pc.ItemDescription,
                    ItemPrice = pc.ItemPrice
                }).ToList();
            return allItems;
        }
    }
}

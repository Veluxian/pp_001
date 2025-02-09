using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using back_pp_001.Data;
using back_pp_001.Models;
using back_pp_001.DTO;

namespace back_pp_001.Services
{
    public class CurrencyService :ICurrencyInterface
    {
        private readonly ApplicationDbContext _context;

        public CurrencyService(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<PurseWithContentInfo> GetActualCurrency()
        {
            var pursesWithCoins = _context.Purses
                .Include(p => p.PurseContent)
                .ThenInclude(p => p.CoinType)
                .Select(pc => new PurseWithContentInfo
                {
                    IdPurse = pc.IdPurse,
                    Coins = pc.PurseContent.Select(pc => new CoinQuantity
                    {
                      CoinName = pc.CoinType.NameCoinType,
                      Quantity =pc.Quantity
                    }).ToList()
                })
                .ToList();
            return pursesWithCoins;
        }
    }
}

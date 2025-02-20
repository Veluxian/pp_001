using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using back_pp_001.Data;
using back_pp_001.Models;
using back_pp_001.DTO;
using back_pp_001.Interfaces;

namespace back_pp_001.Services
{
    public class CurrencyService : ICurrencyInterface
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
                        Quantity = pc.Quantity
                    }).ToList()
                }).ToList();
            return pursesWithCoins;
        }
        public async Task<PurseWithContentInfo?> GetCurrencyById(int id)
        {
            var currencyById = await _context.Purses
                .Include(p => p.PurseContent)
                .ThenInclude(p => p.CoinType)
                .Where(p => p.IdPurse == id)
                .Select(pc => new PurseWithContentInfo
                {
                    IdPurse = pc.IdPurse,
                    Coins = pc.PurseContent.Select(pc => new CoinQuantity
                    {
                        CoinName = pc.CoinType.NameCoinType,
                        Quantity = pc.Quantity
                    }).ToList()
                }).FirstOrDefaultAsync();
            return currencyById;
        }

        public async Task<PurseWithContentInfo> AddSelledItem(int idPurse, int idItem)
        {
            var sellById = _context.
        }
    }
}

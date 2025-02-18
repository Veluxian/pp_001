using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using back_pp_001.Data;
using back_pp_001.Models;
using back_pp_001.DTO;
using back_pp_001.Interfaces;

namespace back_pp_001.Services
{
    public class CurrencyByIdService : ICurrencyByIdInterface
    {
        private readonly ApplicationDbContext _context;

        public CurrencyByIdService(ApplicationDbContext context)
        {
            _context = context;
        }
        
        public IEnumerable<PurseWithContentInfo> GetCurrencyById(int id)
        {
            var currencyById = _context.Purses
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
                }).ToList();
            return currencyById;
        }
    }
}

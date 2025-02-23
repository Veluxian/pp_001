using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using back_pp_001.Data;
using back_pp_001.Models;
using back_pp_001.DTO;
using back_pp_001.Interfaces;
using Microsoft.AspNetCore.Http.HttpResults;

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
                .Select(pc => new PurseWithContentInfo
                {
                    IdPurse = pc.IdPurse,
                    Quantity = pc.Quantity
                }).ToList();
            return pursesWithCoins;
        }
        public async Task<PurseWithContentInfo?> GetCurrencyById(int id)
        {
            var currencyById = await _context.Purses
                .Where(p => p.IdPurse == id)
                .Select(pc => new PurseWithContentInfo
                {
                    IdPurse = pc.IdPurse,
                    Quantity = pc.Quantity
                }).FirstOrDefaultAsync();
            return currencyById;
        }

        public async Task<PurseWithContentInfo?> AddSelledItem(PurseWithContentInfo updatedPurse)
        {
            var actualCurrency = await _context.Purses
                .FirstOrDefaultAsync(p => p.IdPurse == updatedPurse.IdPurse);

            actualCurrency.Quantity = updatedPurse.Quantity;

            _context.Purses.Update(actualCurrency);

            await _context.SaveChangesAsync();

            return updatedPurse;
            
        }
    }
}

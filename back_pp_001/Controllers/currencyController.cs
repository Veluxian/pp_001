using back_pp_001.Data;
using back_pp_001.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace back_pp_001.Controllers
{
    [ApiController]
    [Route("api/currency")]
    public class currencyController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public currencyController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CoinType>>> GetCoins()
        {
            var coins = await _context.CoinTypes.ToListAsync();

            if (coins == null)
            {
                return NotFound();
            }

            return Ok(coins);
        }
    }
}

using back_pp_001.Models;
using back_pp_001.Data;
using Microsoft.AspNetCore.Mvc;

namespace back_pp_001.Controllers
{
    [ApiController]
    [Route("api/Inventory")]
    public class InventoriesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public InventoriesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Inventory>>> getInventory()
        {
            return null;
        }
    }
}

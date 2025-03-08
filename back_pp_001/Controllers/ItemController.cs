using back_pp_001.DTO;
using back_pp_001.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace back_pp_001.Controllers
{
    [ApiController]
    [Route("api/items")]
    public class ItemController : ControllerBase
    {
        private readonly IItemInterface _ItemService;
        
        public ItemController(IItemInterface itemService)
        {
            _ItemService = itemService;
        }

        [HttpGet("allItems")]
        public ActionResult<IEnumerable<ItemInfo>> GetItems()
        {
            var items = _ItemService.GetItems();
            return Ok(items);
        }
    }
}

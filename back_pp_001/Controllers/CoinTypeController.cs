using Microsoft.AspNetCore.Mvc;

namespace back_pp_001.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoinTypeController : ControllerBase
    {
        public CoinTypeController() {
        }

        [HttpGet]
        public IActionResult GetAll() {
            return Ok("Endpoint working");
        }
    }
}

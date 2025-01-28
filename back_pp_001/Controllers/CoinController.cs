using Microsoft.AspNetCore.Mvc;

namespace back_pp_001.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoinController : ControllerBase
    {
        public CoinController() {
        }

        [HttpGet]
        public IActionResult GetAll() {
            return Ok("Endpoint working");
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id) {
            return Ok($"getting the coins {id}");
        }
    }
}

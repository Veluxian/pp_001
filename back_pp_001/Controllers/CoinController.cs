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

        //[HttpPost]

        //[HttpPut]

        //[HttpDelete]

    }
}

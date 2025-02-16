using back_pp_001.Data;
using back_pp_001.DTO;
using back_pp_001.Models;
using back_pp_001.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace back_pp_001.Controllers
{
    [ApiController]
    [Route("api/currencyid")]
    public class currencyBiIdController : ControllerBase
    {
        private readonly ICurrencyByIdInterface _CurrencyByIdService;

        public currencyBiIdController(ICurrencyByIdInterface CurrencyByIdService)
        {
            _CurrencyByIdService = CurrencyByIdService;
        }

        [HttpGet("{id}")]
        public ActionResult<IEnumerable<PurseWithContentInfo>> GetCurrencyById(int id)
        {
            var actualCurrencyById = _CurrencyByIdService.GetCurrencyById(id);
            return Ok(actualCurrencyById);
        }

    }
}

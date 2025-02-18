using back_pp_001.Data;
using back_pp_001.DTO;
using back_pp_001.Interfaces;
using back_pp_001.Models;
using back_pp_001.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace back_pp_001.Controllers
{
    [ApiController]
    [Route("api/currency")]
    public class currencyController : ControllerBase
    {
        private readonly ICurrencyInterface _CurrencyService;

        public currencyController(ICurrencyInterface CurrencyService)
        {
            _CurrencyService = CurrencyService;
        }

        [HttpGet("acutalCurrency")]
        public ActionResult<IEnumerable<PurseWithContentInfo>> GetActualCurrency()
        {
            var actualCurrency = _CurrencyService.GetActualCurrency();
            return Ok(actualCurrency);
        }

        [HttpGet("{id}")]
        public ActionResult<Task<PurseWithContentInfo?>> GetCurrencyById(int id)
        {
            var actualCurrencyById = _CurrencyService.GetCurrencyById(id);
            return Ok(actualCurrencyById);
        }
    }
}
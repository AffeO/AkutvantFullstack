using AkutvantAPI.Models;
using AkutvantAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace AkutvantAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HospitalsController(IHospitalService hospitalService
    ) : ControllerBase
{
    // GET: api/hospitals
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Hospital>>> GetHospitals()
    {
        var hospitals = await hospitalService.GetAllHospitalsAsync();
        return Ok(hospitals);
    }

    // GET: api/hospitals/5
    [HttpGet("hospitals/{id}")]
    public async Task<ActionResult<Hospital>> GetHospital(int id)
    {
        var hospital = await hospitalService.GetHospitalByIdAsync(id);

        if (hospital == null)
        {
            return NotFound();
        }

        return hospital;
    }

    // GET: api/hospitals/search?query=karolinska
    [HttpGet("search")]
    public async Task<ActionResult<IEnumerable<Hospital>>> SearchHospitals([FromQuery] string query)
    {
       var hospital = await hospitalService.SearchHospitalsAsync(query);
        return Ok(hospital);
    }

    // PUT: api/hospitals/5/waittime
    [HttpPut("{id}/waittime")]
    public async Task<IActionResult> UpdateWaitTime(int id, [FromBody] int newWaitTime)
    {
        var hospital = await hospitalService.UpdateWaitTimeAsync(id, newWaitTime);
        return Ok(hospital);
    }
}

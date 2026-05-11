using AkutvantAPI.Data;
using AkutvantAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AkutvantAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HospitalsController(ApplicationDbContext context
    ) : ControllerBase
{
    // GET: api/hospitals
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Hospital>>> GetHospitals()
    {
        return await context.Hospitals.ToListAsync();
    }

    // GET: api/hospitals/5
    [HttpGet("hospitals/{id}")]
    public async Task<ActionResult<Hospital>> GetHospital(int id)
    {
        var hospital = await context.Hospitals.FindAsync(id);

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
        if (string.IsNullOrWhiteSpace(query))
        {
            return await GetHospitals();
        }

        var hospitals = await context.Hospitals
            .Where(h => h.Name.Contains(query) || h.Area.Contains(query))
            .ToListAsync();

        return hospitals;
    }

    // PUT: api/hospitals/5/waittime
    [HttpPut("{id}/waittime")]
    public async Task<IActionResult> UpdateWaitTime(int id, [FromBody] int newWaitTime)
    {
        var hospital = await context.Hospitals.FindAsync(id);

        if (hospital == null)
        {
            return NotFound();
        }

        hospital.WaitTime = newWaitTime;
        hospital.UpdatedAt = DateTime.UtcNow;

        // Uppdatera status baserat på väntetid
        hospital.WaitStatus = newWaitTime switch
        {
            < 60 => "low",
            < 120 => "medium",
            _ => "high"
        };

        await context.SaveChangesAsync();

        return NoContent();
    }
}

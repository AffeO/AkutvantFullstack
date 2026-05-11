using AkutvantAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AkutvantAPI.Controllers;

public class StatisticsController(ApplicationDbContext context
    ) : ControllerBase
{
    // GET: api/statistics/hospital/1/history?hours=24
    [HttpGet("hospital/{id:int}/history")]
    public async Task<IActionResult> GetWaitTimeHistory(int id, [FromQuery] int hours = 24)
    {
        var cutoff = DateTime.UtcNow.AddHours(-hours);

        var history = await context.WaitTimeHistory
            .Where(w => w.HospitalId == id && w.RecordedAt >= cutoff)
            .OrderBy(w => w.RecordedAt)
            .Select(w => new { w.WaitTime, w.RecordedAt })
            .ToListAsync();

        return Ok(history);
    }

    // GET: api/statistics/all-hospitals/latest
    [HttpGet("all-hospitals/latest")]
    public async Task<IActionResult> GetLatestForAllHospitals()
    {
        var hospitals = await context.Hospitals
            .Select(h => new
            {
                h.Id,
                h.Name,
                CurrentWaitTime = h.WaitTime,
                LastRecorded = context.WaitTimeHistory
                    .Where(w => w.HospitalId == h.Id)
                    .OrderByDescending(w => w.RecordedAt)
                    .Select(w => w.RecordedAt)
                    .FirstOrDefault()
            })
            .ToListAsync();

        return Ok(hospitals);
    }
}

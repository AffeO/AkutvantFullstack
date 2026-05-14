using AkutvantAPI.Data;
using AkutvantAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AkutvantAPI.Services;

public class HospitalService(ApplicationDbContext context) : IHospitalService
{
    public async Task<IEnumerable<Hospital>> GetAllHospitalsAsync()
    {
        return await context.Hospitals.ToListAsync();
    }

    public async Task<Hospital?> GetHospitalByIdAsync(int id)
    {
        return await context.Hospitals.FindAsync(id);
    }

    public async Task<IEnumerable<Hospital>> SearchHospitalsAsync(string query)
    {
        if (string.IsNullOrWhiteSpace(query))
        {
            return await GetAllHospitalsAsync();
        }

        return await context.Hospitals
            .Where(h => h.Name.Contains(query) || h.Area.Contains(query))
            .ToListAsync();
    }

    public async Task<bool> UpdateWaitTimeAsync(int id, int newWaitTime)
    {
        var hospital = await context.Hospitals.FindAsync(id);

        if (hospital == null)
        {
            return false;
        }

        hospital.WaitTime = newWaitTime;
        hospital.UpdatedAt = DateTime.UtcNow;

        hospital.WaitStatus = newWaitTime switch
        {
            < 60 => "low",
            < 120 => "medium",
            _ => "high"
        };

        await context.SaveChangesAsync();
        return true;
    }
}

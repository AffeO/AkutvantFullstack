using AkutvantAPI.Data;
using AkutvantAPI.Models;
using Microsoft.Build.Framework;
using Microsoft.EntityFrameworkCore;

namespace AkutvantAPI.Services;

public class WaitTimeLoggerService(IServiceProvider serviceProvider,
    ILogger<WaitTimeLoggerService> logger) : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        logger.LogInformation("WaitTimeLoggerService started");

        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                await LogWaitTimes();
                logger.LogInformation("Wait times logged at {time}", DateTime.UtcNow);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error logging wait times");
            }

            // Logga var 10:e minut
            await Task.Delay(TimeSpan.FromMinutes(10), stoppingToken);
        }
    }

    private async Task LogWaitTimes()
    {
        using var scope = serviceProvider.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

        var hospitals = await context.Hospitals.ToListAsync();

        foreach (var hospital in hospitals)
        {
            var historyEntry = new WaitTimeHistory
            {
                HospitalId = hospital.Id,
                WaitTime = hospital.WaitTime,
                RecordedAt = DateTime.UtcNow
            };
            context.WaitTimeHistory.Add(historyEntry);
        }

        await context.SaveChangesAsync();
    }
}

namespace AkutvantAPI.Models;

public class WaitTimeHistory
{
    public int Id { get; set; }
    public int HospitalId { get; set; }
    public Hospital Hospital { get; set; } = null!;
    public int WaitTime { get; set; }
    public DateTime RecordedAt { get; set; } = DateTime.UtcNow;
}

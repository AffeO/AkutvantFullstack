namespace AkutvantAPI.Models;

public class Hospital
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Area { get; set; } = string.Empty;
    public double Distance { get; set; }
    public int WaitTime { get; set; }
    public string WaitStatus { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public List<string> Departments { get; set; } = new();
    public int LastUpdated { get; set; }
    public DateTime UpdatedAt { get; set; }

    // Utökade fält för detaljvy
    public string Address { get; set; } = string.Empty;
    public bool IsOpen24Hours { get; set; } = true;
    public List<string> Facilities { get; set; } = new();
}

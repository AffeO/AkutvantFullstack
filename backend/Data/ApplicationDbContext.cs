using AkutvantAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Text.Json;

namespace AkutvantAPI.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    { }

    public ApplicationDbContext()
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            // Ändra till SQL Server här också!
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=AkutvantDB;Trusted_Connection=True;");
        }
    }

    public DbSet<Hospital> Hospitals { get; set; }
    public DbSet<BookingRequest> BookingRequests { get; set; }
    public DbSet<ContactRequest> ContactRequests { get; set; }
    public DbSet<WaitTimeHistory> WaitTimeHistory { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        var stringListComparer = new ValueComparer<List<string>>(
       (c1, c2) => c1.SequenceEqual(c2),
       c => c.Aggregate(0, (a, v) => HashCode.Combine(a, v.GetHashCode())),
       c => c.ToList());

        // Konfigurera List<string> att sparas som JSON
        modelBuilder.Entity<Hospital>()
            .Property(h => h.Departments)
            .HasConversion(
                v => JsonSerializer.Serialize(v, (JsonSerializerOptions)null),
                v => JsonSerializer.Deserialize<List<string>>(v, (JsonSerializerOptions)null));

        modelBuilder.Entity<Hospital>()
            .Property(h => h.Facilities)
            .HasConversion(
                v => JsonSerializer.Serialize(v, (JsonSerializerOptions)null),
                v => JsonSerializer.Deserialize<List<string>>(v, (JsonSerializerOptions)null));

        // Seed data - mockdata för utveckling
        modelBuilder.Entity<Hospital>().HasData(
            new Hospital
            {
                Id = 1,
                Name = "Sankt Görans Sjukhus",
                Area = "Kungsholmen, Stockholm",
                Distance = 2.3,
                WaitTime = 25,
                WaitStatus = "low",
                Phone = "08-587 010 00",
                Departments = ["Akutmedicin", "Kirurgi", "Intensivvård"],
                LastUpdated = 55,
                Address = "Sankt Göransgatan 1, 112 81 Stockholm",
                Facilities = ["Röntgen", "Laboratorium", "CT", "Barnakut"],
                UpdatedAt = new DateTime(2026,1,1)
            },
            new Hospital
            {
                Id = 2,
                Name = "Karolinska Universitetssjukhuset",
                Area = "Solna, Stockholm",
                Distance = 3.0,
                WaitTime = 160,
                WaitStatus = "high",
                Phone = "08-517 700 00",
                Departments = ["Akutmedicin", "Trauma", "Kardiologi"],
                LastUpdated = 55,
                Address = "Karolinskavägen, 171 76 Solna",
                Facilities = ["Röntgen", "Laboratorium", "CT", "MR"],
                UpdatedAt = new DateTime(2026,3,1)
            }
        );
    }
}
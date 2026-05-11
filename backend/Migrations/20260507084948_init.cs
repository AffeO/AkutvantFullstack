using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace AkutvantAPI.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BookingRequests",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Organization = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookingRequests", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ContactRequests",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Subject = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactRequests", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Hospitals",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Area = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Distance = table.Column<double>(type: "float", nullable: false),
                    WaitTime = table.Column<int>(type: "int", nullable: false),
                    WaitStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Departments = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastUpdated = table.Column<int>(type: "int", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsOpen24Hours = table.Column<bool>(type: "bit", nullable: false),
                    Facilities = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hospitals", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Hospitals",
                columns: new[] { "Id", "Address", "Area", "Departments", "Distance", "Facilities", "IsOpen24Hours", "LastUpdated", "Name", "Phone", "UpdatedAt", "WaitStatus", "WaitTime" },
                values: new object[,]
                {
                    { 1, "Sankt Göransgatan 1, 112 81 Stockholm", "Kungsholmen, Stockholm", "[\"Akutmedicin\",\"Kirurgi\",\"Intensivv\\u00E5rd\"]", 2.2999999999999998, "[\"R\\u00F6ntgen\",\"Laboratorium\",\"CT\",\"Barnakut\"]", true, 55, "Sankt Görans Sjukhus", "08-587 010 00", new DateTime(2026, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "low", 25 },
                    { 2, "Karolinskavägen, 171 76 Solna", "Solna, Stockholm", "[\"Akutmedicin\",\"Trauma\",\"Kardiologi\"]", 3.0, "[\"R\\u00F6ntgen\",\"Laboratorium\",\"CT\",\"MR\"]", true, 55, "Karolinska Universitetssjukhuset", "08-517 700 00", new DateTime(2026, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "high", 160 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BookingRequests");

            migrationBuilder.DropTable(
                name: "ContactRequests");

            migrationBuilder.DropTable(
                name: "Hospitals");
        }
    }
}

using AkutvantAPI.Data;
using AkutvantAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace AkutvantAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BookingController(ApplicationDbContext context
    ) : ControllerBase
{
    [HttpPost]
    public async Task<ActionResult<BookingRequest>> CreateBooking(BookingRequest request)
    {
        context.BookingRequests.Add(request);
        await context.SaveChangesAsync();

        //Email fubktion senare

        return CreatedAtAction(nameof(GetBooking), new { id = request.Id }, request);
    }

    [HttpGet("bookings/{id}")]
    public async Task<ActionResult<BookingRequest>> GetBooking(int id)
    {
        var booking = await context.BookingRequests.FindAsync(id);

        if (booking == null)
        {
            return NotFound();
        }

        return booking;
    }
}

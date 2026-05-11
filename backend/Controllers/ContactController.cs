using AkutvantAPI.Data;
using AkutvantAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AkutvantAPI.Controllers;

[ApiController]
[Route("api/[controller]")]

public class ContactController(ApplicationDbContext context) : ControllerBase
{
    // POST: api/contact
    [HttpPost]
    public async Task<ActionResult<ContactRequest>> CreateContact(ContactRequest request)
    {
        context.ContactRequests.Add(request);
        await context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetContact), new { id = request.Id }, request);
    }

    // GET: api/contact/5
    [HttpGet("{id:int}")]
    public async Task<ActionResult<ContactRequest>> GetContact(int id)  
    {
        var contact = await context.ContactRequests.FindAsync(id);

        if (contact == null)
        {
            return NotFound();
        }

        return contact;
    }

    // GET: api/contact (lista alla - för admin)
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ContactRequest>>> GetAllContacts()
    {
        return await context.ContactRequests
            .OrderByDescending(c => c.CreatedAt)
            .ToListAsync();
    }
}

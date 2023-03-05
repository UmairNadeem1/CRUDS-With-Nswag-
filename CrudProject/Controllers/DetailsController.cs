using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CrudProject.Models;
using Microsoft.AspNetCore.Authorization;

namespace CrudProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DetailsController : ControllerBase
    {
        private readonly DetailsContext _context;

        public DetailsController(DetailsContext context)
        {
            _context = context;
        }

        //// GET: api/Details
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Details>>> GetDetails()
        {
            return await _context.Details.ToListAsync();
        }

        // GET: api/Details/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Details>> GetDetails(int id)
        {
            var details = await _context.Details.FindAsync(id);

            if (details == null)
            {
                return NotFound();
            }

            return details;
        }

        // PUT: api/Details/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> PutDetails(int id, Details details)
        {
            if (id != details.Detailsid)
            {
                return BadRequest();
            }

            _context.Entry(details).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Details
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<Details>> PostDetails(Details details)
        {
            _context.Details.Add(details);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDetails", new { id = details.Detailsid }, details);
        }

        // DELETE: api/Details/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDetails(int id)
        {
            var details = await _context.Details.FindAsync(id);
            if (details == null)
            {
                return NotFound();
            }

            _context.Details.Remove(details);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DetailsExists(int id)
        {
            return _context.Details.Any(e => e.Detailsid == id);
        }
    }
}

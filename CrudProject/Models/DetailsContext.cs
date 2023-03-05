using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrudProject.Models
{
    public class DetailsContext : DbContext
    {
        public DetailsContext(DbContextOptions<DetailsContext> options) : base(options)
        {
             
        }
        public DbSet<Details> Details { get; set; }
    }
}
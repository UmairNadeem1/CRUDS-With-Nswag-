 using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CrudProject.Models
{
    public class Details
    {
        [Key]
        public int Detailsid { set; get; } 

        [Column(TypeName = "nvarchar(100)")]
        public string Name { set; get; }

        [Column(TypeName = "nvarchar(2)")]
        public string Age { set; get; }

        [Column(TypeName = "nvarchar(10)")]
        public string DateOfBirth { set; get; }

        [Column(TypeName = "nvarchar(100)")]
        public string Address { set; get; }
    }
}

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrudProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DemoController : ControllerBase
    {
        [HttpGet]
        [Authorize]
        public HelloMessage Get(string name)
        {
          return new HelloMessage { Message = $"Hello {name}" };
        }

        //[HttpPost]
        //public HelloMessage Post(string name)
        //{
        //    return new HelloMessage { Message = $"Hello {name}" };
        //}

        //[HttpGet]
        //[Authorize]
        //public IEnumerable<string> Get()
        //  => new string[] { "umair" };

    }

   public class HelloMessage
  {
       public string Message { get; set; }
         
      public string name { get; set; }



   }
}



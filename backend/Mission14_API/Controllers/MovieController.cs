using Microsoft.AspNetCore.Mvc;
using Mission14_API.Data;

namespace Mission14_API.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class MovieController : Controller
    {
        private MovieDbContext context;

        public MovieController(MovieDbContext movieDbContext) 
        {
            context = movieDbContext;
        }

        public IEnumerable<Movie> Get()
        {
            return context.Movies.Where(x => x.Edited == "Yes").OrderBy(x => x.Title).ToArray();
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using Mission14_API.Data;

namespace Mission14_API.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class MovieController : Controller
    {
        private MovieDbContext context;

        public MovieController(MovieDbContext movieDbContext) //Db context connection
        {
            context = movieDbContext;
        }

        public IEnumerable<Movie> Get()
        {
            return context.Movies.Where(x => x.Edited == "Yes").OrderBy(x => x.Title).ToArray(); //Linq to filter for edited movies and alphabetize by title
        }
    }
}

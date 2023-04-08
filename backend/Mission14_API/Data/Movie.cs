using System.ComponentModel.DataAnnotations;

namespace Mission14_API.Data
{
    public class Movie //Movie backend model
    {
        [Key]
        public int MovieID { get; set; }
        public string Category { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
        public string Director { get; set; }
        public string Rating { get; set; }
        public string? Edited { get; set; } //I seem to recall from the original project that Edited, LentTo, and Notes were the fields that were said to be nullable
        public string? LentTo { get; set; }
        public string? Notes { get; set; }
    }
}

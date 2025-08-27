using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class KlijentiKontekst : DbContext
    {
        public KlijentiKontekst()
        {
        }

        public KlijentiKontekst(DbContextOptions<KlijentiKontekst> options)
            : base(options)
        {
        }
        public DbSet<Klijent> Klijenti { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (optionsBuilder.IsConfigured == false)
            {
                optionsBuilder.UseSqlite("Data Source=FONContacts.db");
            }
        }
    }
}
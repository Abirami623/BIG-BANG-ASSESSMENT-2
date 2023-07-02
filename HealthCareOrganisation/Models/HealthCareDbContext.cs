using Microsoft.EntityFrameworkCore;

namespace HealthCareOrganisation.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }

        public DbSet<Patient> Patients { get; set; }

        public DbSet<Doctor> Doctors { get; set; }

        public DbSet<Admin> Admins { get; set; }

    }
}

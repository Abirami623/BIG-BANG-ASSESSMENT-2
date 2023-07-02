using HealthCareOrganisation.Models.DTO;

namespace HealthCareOrganisation.Interfaces
{
    public interface IGenerateToken
    {
        public string GenerateToken(UserDTO user);

    }
}

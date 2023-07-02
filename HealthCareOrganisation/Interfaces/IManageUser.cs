using HealthCareOrganisation.Models.DTO;
using HealthCareOrganisation.Models;

namespace HealthCareOrganisation.Interfaces
{
    public interface IManageUser
    {
        public Task<UserDTO> Login(UserDTO user);
        public Task<UserDTO> RegisterPatient(Patient patient);
        public Task<UserDTO> RegisterDoctor(Doctor doctor);
        public Task<Doctor> Approval(int DoctorId);

    }
}


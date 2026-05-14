using AkutvantAPI.Models;

namespace AkutvantAPI.Services;

public interface IHospitalService
{
    Task<IEnumerable<Hospital>> GetAllHospitalsAsync();
    Task<Hospital?> GetHospitalByIdAsync(int id);
    Task<IEnumerable<Hospital>> SearchHospitalsAsync(string query);
    Task<bool> UpdateWaitTimeAsync(int id, int newWaitTime);
}

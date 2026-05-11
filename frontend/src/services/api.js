// src/services/api.js
const API_BASE_URL = 'https://localhost:7081'; // Byt till din API-URL

class ApiService {
  // Hämta alla sjukhus
  async getHospitals() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/hospitals`);
      if (!response.ok) throw new Error('Failed to fetch hospitals');
      return await response.json();
    } catch (error) {
      console.error('Error fetching hospitals:', error);
      throw error;
    }
  }

  // Sök sjukhus
  async searchHospitals(query) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/hospitals/search?query=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('Failed to search hospitals');
      return await response.json();
    } catch (error) {
      console.error('Error searching hospitals:', error);
      throw error;
    }
  }

  // Hämta ett specifikt sjukhus
  async getHospital(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/hospitals/${id}`);
      if (!response.ok) throw new Error('Failed to fetch hospital');
      return await response.json();
    } catch (error) {
      console.error('Error fetching hospital:', error);
      throw error;
    }
  }

  // Skicka bokningsförfrågan
  async submitBooking(bookingData) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
      if (!response.ok) throw new Error('Failed to submit booking');
      return await response.json();
    } catch (error) {
      console.error('Error submitting booking:', error);
      throw error;
    }
  }

  // Skicka kontaktförfrågan
  async submitContact(contactData) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });
      if (!response.ok) throw new Error('Failed to submit contact');
      return await response.json();
    } catch (error) {
      console.error('Error submitting contact:', error);
      throw error;
    }
  }
}

export default new ApiService();

// Date conversion utilities for esoteric systems

export interface BirthDetails {
  birthDate: Date;
  birthTime: string;
  birthCity: string;
  userGoal?: string;
  latLong?: { lat: number; long: number };
}

// Convert city to geocoordinates (dummy implementation - would normally use a real geocoding API)
export const cityToCoordinates = (city: string): { lat: number; long: number } => {
  // This is a simplified mapping - in a real app, you would use a geocoding service
  const cityMap: Record<string, { lat: number; long: number }> = {
    "Moscow": { lat: 55.7558, long: 37.6173 },
    "New York": { lat: 40.7128, long: -74.0060 },
    "Tokyo": { lat: 35.6762, long: 139.6503 },
    "London": { lat: 51.5074, long: -0.1278 },
    "Paris": { lat: 48.8566, long: 2.3522 },
    // Add more cities as needed
  };
  
  return cityMap[city] || { lat: 0, long: 0 };
};

// Format date to DD.MM.YYYY
export const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  
  return `${day}.${month}.${year}`;
};

// Format time to HH:MM
export const formatTime = (timeString: string): string => {
  return timeString;
};

// Parse date string in DD.MM.YYYY format
export const parseDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('.');
  return new Date(Number(year), Number(month) - 1, Number(day));
};

// Get zodiac sign based on date
export const getZodiacSign = (date: Date): string => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
  return "Pisces";
};

// Calculate numerology life path number
export const calculateLifePathNumber = (dateString: string): number => {
  // Remove dots from the date string
  const dateWithoutDots = dateString.replace(/\./g, '');
  
  // Sum all digits
  let sum = 0;
  for (const digit of dateWithoutDots) {
    sum += parseInt(digit, 10);
  }
  
  // Reduce to a single digit (except for master numbers 11, 22, 33)
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    let tempSum = 0;
    while (sum > 0) {
      tempSum += sum % 10;
      sum = Math.floor(sum / 10);
    }
    sum = tempSum;
  }
  
  return sum;
};

// Get recommended dates based on birth details
export const getRecommendedDates = (
  birthDetails: BirthDetails
): Array<{ date: string; reason: string }> => {
  // This is a simplified implementation
  // In a real app, this would use complex calculations across multiple systems
  
  const today = new Date();
  const result = [];
  
  for (let i = 1; i <= 3; i++) {
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + i * 7); // Add weeks
    
    result.push({
      date: formatDate(futureDate),
      reason: `Favorable alignment with your ${getZodiacSign(birthDetails.birthDate)} energy and numerology pattern ${calculateLifePathNumber(formatDate(birthDetails.birthDate))}`
    });
  }
  
  return result;
};

export const getAddressSuggestions = async (query: string) => {
    if (query.length < 3) return [];
  
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1`
      );
      const data = await response.json();
  
      return Array.isArray(data)
        ? data.map((item: any) => ({
            display_name: item.display_name,
            street: item.address?.road || "",
            city: item.address?.city || item.address?.town || item.address?.village || "",
            postalCode: item.address?.postcode || "",
            province: item.address?.state || "",
            country: item.address?.country || "",
          }))
        : [];
    } catch (error) {
      console.error("Error fetching address suggestions:", error);
      return [];
    }
  };
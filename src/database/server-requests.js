// require("dotenv").config();
const apiUrl =
  "https://technical-project-5fc11-default-rtdb.europe-west1.firebasedatabase.app/sectors.json";
export async function fetchSectors() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

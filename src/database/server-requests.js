export const apiUrl =
  "https://technical-project-5fc11-default-rtdb.europe-west1.firebasedatabase.app";
export async function fetchSectors() {
  try {
    const response = await fetch(apiUrl + "/sectors.json");
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function setUserData(data) {
  const postData = data;
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  };
  try {
    const response = await fetch(apiUrl + "/userData.json", requestOptions);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
export async function updateUserData(apiKey, data) {
  const Url = `${apiUrl}/userData/${apiKey}.json`;
  const requestOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(Url, requestOptions);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error;
  }
}

import axios from "axios";

const get = async (othersId = "") => {
  try {
    const response = await axios.get(
      "https://my-json-server.typicode.com/CedarMan04/demo/othersData",
      {
        params: { othersId }
      }
    );
    return response;
  } catch (error) {
    if (error.response) {
      return {
        name: error.response.name,
        message: error.response.message,
      };
    } else {
      console.error(error);
    }
  }
};

export default get
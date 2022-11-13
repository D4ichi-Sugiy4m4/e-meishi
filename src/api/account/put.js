import axios from "axios";

const put = async ({params = {}}) => {
  try {
    const response = await axios.put(
      "https://my-json-server.typicode.com/CedarMan04/demo/othersData",
      {
        params: { params }
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

export default put
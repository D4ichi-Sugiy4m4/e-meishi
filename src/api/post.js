import axios from "axios";

const post = async ({params = {}}) => {
  try {
    const response = await axios.post(
      "https://my-json-server.typicode.com/CedarMan04/demo/othersList",
      { params }
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

export default post
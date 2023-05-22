import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID -y80ad676ameJZPN0StgHFrj8qWPz2b-dXWlqQqqByk",
      },
      params: {
        query: term,
      },
    });

    debugger;
    return response.data.results;
  };

  export default searchImages;
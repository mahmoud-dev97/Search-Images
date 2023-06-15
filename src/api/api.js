import axios from "axios";

const searchImages = async (term, page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID IDMNWPPrgLntRkhHtXZR6cFYazZlQ6PbFEkfadwW_Go",
    },
    params: {
      query: term,
      per_page: 100,
      page: page,
    },
  });
  return response.data;
};

export default searchImages;

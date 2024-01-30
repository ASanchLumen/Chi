import Vue from 'vue';
import axios from 'axios';

async function getDocs() {
  // TODO: this needs to account for prod...
  return await axios
    // .get(`${process.env.BASE_URL}docs.json`)
    .get("https://lib.lumen.com/chi/5.46.0/js/ce/docs.json")
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
}

export default async () => {
  const chiDocs = await getDocs();

  Vue.prototype.$chiDocs = chiDocs;
};

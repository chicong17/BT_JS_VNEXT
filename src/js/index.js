import axios from "axios";
import "../style/reset.css";
import "../style/style.scss";
import getDataApi from "./callData";
import getDetail from "./GetdataDetail";
import getDataTable from "./GetDataTable";

const URL_API = "https://625ce66795cd5855d61789dc.mockapi.io/table";

getDataApi(URL_API, {}, "get")
  .then(getDataTable)
  .then(getDetail)
  .catch((thrown) => {
    if (axios.isCancel(thrown)) {
      console.log("Request canceled", thrown.message);
    } else {
      console.log("Cancel error");
    }
  });

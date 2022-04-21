import axios from "axios";

let cancelToken;

function getDataApi(url, params, methodName, ms) {
  if (typeof cancelToken != typeof undefined) {
    cancelToken.cancel("Click");
  }
  cancelToken = axios.CancelToken.source();
  const config = {
    method: methodName,
    params: params,
    url: url,
    timeout: 1000 * 5,
    cancelToken: cancelToken.token,
  };

  if (ms) {
    return new Promise((resolve) => {
      axios(config).then((result) => {
        resolve(result);
      }, ms);
    });
  }
  return axios(config);
}
export default getDataApi;

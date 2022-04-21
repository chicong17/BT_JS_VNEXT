import moment from "moment";
const URL_API = "https://625ce66795cd5855d61789dc.mockapi.io/table";

function getDataTable({ data }) {
  const table = document.querySelector("table tbody");
  const datasetHtml = data.map(
    ({
      Name,
      Shares,
      Percentage,
      Lastupdate,
      PriceRange,
      ShareVolume,
      TransactionDate,
    }) => {
      return ` <tr>
        <td class = "hasPopup">
          ${Name}
          <div class="popup">
          <table>
              <thead>
                  <tr>
                      <th>Ticker</th>
                      <th>Quantity</th>
                      <th>Percentage</th>
                      <th>Update date</th>
                      <th>Value</th>
            
                    </tr>
              </thead>
             <tbody>
             </tbody>
            </table>
           </div> 
        </td>
        <td> ${Shares} </td>
        <td> ${Percentage} % </td>
        <td> ${moment(Lastupdate).format("MM/DD/YYYY")}
        <td ${ShareVolume < 53 ? 'style = "color : red"' : ""} >
              ${ShareVolume}
        </td> 
        <td> ${PriceRange.start} - ${PriceRange.end}</td>
        <td>${moment(TransactionDate).format("MM/DD/YYYY")}</td> 
      </tr>
      `;
    }
  );
  table.innerHTML = datasetHtml.join("");
  return new Promise((resolve) => {
    const nameEle = document.querySelectorAll(".hasPopup");
    resolve(nameEle);
  });
}
export default getDataTable;

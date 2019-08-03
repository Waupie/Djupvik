const API_ADRESS = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json";

export const fetchTableData = function() {
    const myResponse = fetch(API_ADRESS)
        .then(result => result.json())
        .then(data => {
            return data;
        })
    return myResponse;
}
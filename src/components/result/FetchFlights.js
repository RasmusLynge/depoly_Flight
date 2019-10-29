const flightURL = "https://rasmuslynge.com/Flights-1.0/api/flight";
const userURL = "https://rasmuslynge.com/jwtbackend/api";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

class flightFetch {
  fetchData = async url => {
    const options = await this.makeOptions("GET");
    console.log(flightURL + url)
    return fetch(flightURL + url, options).then(handleHttpErrors);
  };

  directions = (fromCountry, toCountry, date) => {
    date = date.toLocaleDateString();
    date = date.replace(/\./g, "-");
    let url = `/country/date/${fromCountry}/${toCountry}/${date}`;
    return url;
  };

  postData = async id => {
    const options = await this.makeOptionsToken("POST");
    fetch(userURL + "/info/user/wishpost/" + id, options)
  };

  deleteData = async id => {
    const options = await this.makeOptionsToken("DELETE");
    fetch(userURL + "/info/user/wishdelete/" + id, options);
  };

  makeOptionsToken(method, body) {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        "x-access-token": localStorage.getItem("jwtToken")
      }
    };
    console.log(opts);
    if (body) {
      opts.body = JSON.stringify(body);
    }

    return opts;
  }

  makeOptions(method) {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    };
    console.log(opts)
    return opts;
  }
}

const flightFacade = new flightFetch();
export default flightFacade;

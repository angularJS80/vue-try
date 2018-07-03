import axios from 'axios'
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
var requestPost = function (suburl,param) {
  //var baseUrl = "http://211.249.60.229:38080";
  var baseUrl = "http://localhost:48080";

  var headers= {
    'Content-Type': 'application/json'
  }
  console.log(localStorage);

  if(JSON.parse(localStorage.getItem('currentUser'))){
    headers.Authorization = JSON.parse(localStorage.getItem('currentUser')).token;
  }
  return Observable.fromPromise(
    axios.post(baseUrl+suburl,
    param,
    {headers:headers})
  );

}


export {requestPost}

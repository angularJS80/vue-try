import axios from 'axios'
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
var requestPost = function (suburl,param) {
  var baseUrl = "http://211.249.60.229:38080";


  var headers= {
    'Content-Type': 'application/json'
  }
  var token = JSON.parse(localStorage.getItem('currentUser')).token;
  if(token){
    headers.Authorization = token;
  }


console.log(headers);
  return Observable.fromPromise(axios.post(baseUrl+suburl,
    param,
    {headers:headers}));
}


export {requestPost}

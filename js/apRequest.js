import axios from 'axios'
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
var requestPost = function () {
  var baseUrl = "http://211.249.60.229:38080";
  var param = { username: "1", password: "1"};
  var headers= {
    'Content-Type': 'application/json',
  }

  return Observable.fromPromise(axios.post(baseUrl+"/openapi/authenticate",
    param,
    headers));
}


export {requestPost}

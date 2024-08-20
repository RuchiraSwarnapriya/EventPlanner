import {BaseService} from '../baseService';
import {Images, Users} from '../constants/types/home';
import {endPoints} from '../endpoints';

class HomeService extends BaseService {
  images(): Promise<Images> {
    return this.makeRequest(endPoints.home.images).then(r => r.data);
  }
  users(): Promise<Users> {
    return this.makeRequest(endPoints.home.users).then(r => r.data);
  }
}

export default new HomeService();

import {BaseService} from '../baseService';
import {Images, Users} from '../constants/types/home';
import {endPoints} from '../endpoints';

class TestHomeService extends BaseService {
  public requestFunction = this.makeRequest; // Expose makeRequest for testing

  images(): Promise<Images> {
    return this.requestFunction(endPoints.home.images).then(r => r.data);
  }

  users(): Promise<Users> {
    return this.requestFunction(endPoints.home.users).then(r => r.data);
  }
}

export default new TestHomeService();

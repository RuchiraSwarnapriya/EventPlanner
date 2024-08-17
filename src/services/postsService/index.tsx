import {BaseService} from '../baseService';
import {Posts} from '../constants/types/posts';
import {endPoints} from '../endpoints';

class PostsService extends BaseService {
  posts(): Promise<Posts> {
    return this.makeRequest(endPoints.posts).then(r => r.data);
  }
}

export default new PostsService();

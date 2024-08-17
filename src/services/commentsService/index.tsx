import {BaseService} from '../baseService';
import {Comments} from '../constants/types/comments';
import {endPoints} from '../endpoints';

class CommentsService extends BaseService {
  comments(): Promise<Comments> {
    return this.makeRequest(endPoints.comments).then(r => r.data);
  }
}

export default new CommentsService();

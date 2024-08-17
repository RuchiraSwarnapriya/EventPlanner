import Config from 'react-native-config';
import axios from 'axios';

import {Endpoint} from '../constants/types';

const ROOT_ENDPOINT = Config.APP_API_BASE;

console.log(ROOT_ENDPOINT);

export class BaseService {
  private authAction: any;

  setAuthAction(action: any) {
    this.authAction = action;
  }

  protected makeRequest(
    route: Endpoint,
    body: any = null,
    timeout: number = 60,
  ): Promise<any> {
    return this.makeRequestWithCustomHeaders(route, body, timeout);
  }

  protected makeRequestWithCustomHeaders(
    route: Endpoint,
    body: any = null,
    timeout: number = 60,
  ): Promise<any> {
    if (['PUT', 'DELETE', 'POST', 'GET'].indexOf(route.verb) === -1) {
      return Promise.reject(new Error('Invalid verb'));
    }
    if (!route.path) {
      return Promise.reject(new Error('Path was not specified'));
    }

    //Axios timeout not support for android devices(Axios Bug)
    let cancelSource = axios.CancelToken.source();
    setTimeout(() => {
      cancelSource.cancel('Timeout of ' + timeout + ' seconds exceeded');
    }, timeout * 1000);

    var params: any = {
      method: route.verb,
      url: this.replaceParameters(route.path, body),
      timeout: timeout * 1000,
      headers: {...axios.defaults.headers},
      //Axios timeout not support for android devices(Axios Bug)
      cancelToken: cancelSource.token,
    };
    // iOS simulator complains if data is empty object.
    if (body !== null && Object.values(body).length > 0) {
      params.data = body;
      console.log(params.data);
    }

    return axios(params).catch(error => {
      console.log(error);
      return Promise.reject(error);
    });
  }

  private replaceParameters(url: string, data: any) {
    if (!data) {
      return url;
    }
    // match patterns like foo/{bar}/{?baz}{/?foobar} and replace {bar} with supplied params
    var paramsToReplace = url.match(/\{(([^?}]+)?\?)?[a-z0-9-_]+\}/gi);
    if (paramsToReplace) {
      var lastMissingOptionalKey;
      for (var i = 0; i < paramsToReplace.length; i++) {
        var key = paramsToReplace[i].slice(1, -1);
        var parts = key.split('?');
        var isOptional = parts.length > 1;
        var param = parts.pop();
        var prePath = parts.pop();
        var hasParamToReplaceKey = data.hasOwnProperty(param);
        var paramToReplaceKey = '';

        if (isOptional && hasParamToReplaceKey && lastMissingOptionalKey) {
          throw new Error(
            'Missing previous optional key ' + lastMissingOptionalKey,
          );
        }
        if (!isOptional && !hasParamToReplaceKey) {
          throw new Error('Missing parameter ' + param);
        } else if (hasParamToReplaceKey) {
          paramToReplaceKey = data[param ? param : 0];
          if (prePath) {
            paramToReplaceKey = prePath + paramToReplaceKey;
          }
          delete data[param ? param : 0];
        }

        url = url.replace('{' + key + '}', paramToReplaceKey);

        if (isOptional && !hasParamToReplaceKey) {
          lastMissingOptionalKey = param;
        }
      }
    }
    return url;
  }
}

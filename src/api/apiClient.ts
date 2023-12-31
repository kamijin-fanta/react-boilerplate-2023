//
// Generated by @himenon/openapi-typescript-code-generator v0.27.1
//
// OpenApi : 3.0.0
//
//

import { Schemas, RequestBodies, Responses } from './types';
export interface Response$getSample$Status$200 {
  'application/json': Schemas.Sample;
}
export type ResponseContentType$getSample = keyof Response$getSample$Status$200;
export type HttpMethod =
  | 'GET'
  | 'PUT'
  | 'POST'
  | 'DELETE'
  | 'OPTIONS'
  | 'HEAD'
  | 'PATCH'
  | 'TRACE';
export interface ObjectLike {
  [key: string]: any;
}
export interface QueryParameter {
  value: any;
  style?: 'form' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject';
  explode: boolean;
}
export interface QueryParameters {
  [key: string]: QueryParameter;
}
export type SuccessResponses = Response$getSample$Status$200;
export namespace ErrorResponse {
  export type getSample = void;
}
export interface Encoding {
  readonly contentType?: string;
  headers?: Record<string, any>;
  readonly style?: 'form' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject';
  readonly explode?: boolean;
  readonly allowReserved?: boolean;
}
export interface RequestArgs {
  readonly httpMethod: HttpMethod;
  readonly url: string;
  headers: ObjectLike | any;
  requestBody?: ObjectLike | any;
  requestBodyEncoding?: Record<string, Encoding>;
  queryParameters?: QueryParameters | undefined;
}
export interface ApiClient<RequestOption> {
  request: <T = SuccessResponses>(
    requestArgs: RequestArgs,
    options?: RequestOption,
  ) => Promise<T>;
}
export class Client<RequestOption> {
  private baseUrl: string;
  constructor(
    private apiClient: ApiClient<RequestOption>,
    baseUrl: string,
  ) {
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }
  public async getSample(
    option?: RequestOption,
  ): Promise<Response$getSample$Status$200['application/json']> {
    const url = this.baseUrl + `/api/sample.json`;
    const headers = {
      Accept: 'application/json',
    };
    return this.apiClient.request(
      {
        httpMethod: 'GET',
        url,
        headers,
      },
      option,
    );
  }
}

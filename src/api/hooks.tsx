/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import useSWR, { type SWRConfiguration } from 'swr';
import { apiClient } from './client';

export function useSample(config?: SWRConfiguration) {
  return useSWR(`/api/sample.json`, () => apiClient.getSample({}), config);
}

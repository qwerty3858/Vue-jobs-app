import { describe, test, expect } from 'vitest';
import { parseLinkHeader } from '../parseHelper';

describe('parseLinkHeader', () => {
  test('parseLinkHeader works expected that includes first, next, last', () => {
    const linkHeader =
      '<http://localhost:3000/job-list?_limit=4&_page=1>; rel="first", <http://localhost:3000/job-list?_limit=4&_page=2>; rel="next", <http://localhost:3000/job-list?_limit=4&_page=4>; rel="last';
    expect(parseLinkHeader(linkHeader)).toEqual({
      first: '/job-list?_limit=4&_page=1',
      next: '/job-list?_limit=4&_page=2',
      last: '/job-list?_limit=4&_page=4',
    });
  });

  test('parseLinkHeader returns all pagination values including prev correctly', () => {
    const linkHeader =
      '<http://localhost:3000/job-list?_limit=4&_page=1>; rel="first", <http://localhost:3000/job-list?_limit=4&_page=2>; rel="prev", <http://localhost:3000/job-list?_limit=4&_page=4>; rel="next", <http://localhost:3000/job-list?_limit=4&_page=4>; rel="last';

    expect(parseLinkHeader(linkHeader)).toEqual({
      first: '/job-list?_limit=4&_page=1',
      prev: '/job-list?_limit=4&_page=2',
      next: '/job-list?_limit=4&_page=4',
      last: '/job-list?_limit=4&_page=4',
    });
  });
});

/* globals describe, it, expect, beforeEach, afterEach, before, after, spyOn, jasmine */
describe('Hello World', () => {
  it('should not be Hello World', () => {
    expect('Hello world').not.toBe('hello world');
  });

  it('should be Hello World', () => {
    expect('Hello world').toBe('Hello world');
  });
});

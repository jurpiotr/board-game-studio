import { ToHexdecimalPipe } from './to-hexdecimal.pipe';

describe('ToHexdecimalPipe', () => {
  it('create an instance', () => {
    const pipe = new ToHexdecimalPipe();
    expect(pipe).toBeTruthy();
  });
});

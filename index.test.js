const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('Handles 0 mins - 8:00', () => {
    const timeInWords = convertTimeToWords('8:00');
    expect(timeInWords).toBe("eight o'clock");
  });

  it('Handles 15 - 8:15', () => {
    const timeInWords = convertTimeToWords('8:15');
    expect(timeInWords).toBe('quarter past eight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles 45 - 8:45', () => {
    const timeInWords = convertTimeToWords('8:45');
    expect(timeInWords).toBe('quarter to nine');
  });

  it('Handles times after 30 mins - 2:43', () => {
    const timeInWords = convertTimeToWords('2:43');
    expect(timeInWords).toBe('seventeen to three');
  });

  it('Handles times before 30 mins - 1:12', () => {
    const timeInWords = convertTimeToWords('1:12');
    expect(timeInWords).toBe('twelve past one');
  });

  it('Handles midnight times - 0:12', () => {
    const timeInWords = convertTimeToWords('0:12');
    expect(timeInWords).toBe('twelve past midnight');
  });
});

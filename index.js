// splitting time into hours and minutes
function splitTimeToHrMins(time) {
  const timeParts = time.split(':')

  // handling 24 hour formats
  const hours = Number(timeParts[0] % 12) || 0
  const mins = Number(timeParts[1])

  return {
    hours,
    mins
  };
}

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!

  //edge cases
  if (time === '0:00') {
    return 'midnight';
  }

  if (time === '12:00') {
    return 'midday';
  }

  // mapping the numbers (be it hours or minutes) to english words
  const mapNumberToWords = {
    0: 'midnight',  // edge case
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty',
    21: 'twenty one', 22: 'twenty two', 23: 'twenty three', 24: 'twenty four', 25: 'twenty five', 26: 'twenty six', 27: 'twenty seven', 28: 'twenty eight', 29: 'twenty nine'
  }

  const { hours, mins } = splitTimeToHrMins(time)
  // handling hour and half hour marks
  if (mins === 0) {
    return `${mapNumberToWords[hours]} o'clock`
  }
  if (mins === 30) {
    return `half past ${mapNumberToWords[hours]}`
  }

  // handling quarter marks
  if (mins === 15) {
    return `quarter past ${mapNumberToWords[hours]}`
  }
  if (mins === 45) {
    const nextHour = hours + 1
    return `quarter to ${mapNumberToWords[nextHour]}`
  }

  // handling all other minutes
  if (mins < 30) {
    return `${mapNumberToWords[mins]} past ${mapNumberToWords[hours]}`
  }
  if (mins > 30) {
    const minutesRemaining = 60 - mins
    const nextHour = hours + 1
    return `${mapNumberToWords[minutesRemaining]} to ${mapNumberToWords[nextHour]}`
  }

  return 'half past eight';
}

module.exports = { convertTimeToWords };
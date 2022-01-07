function getSendDate(date) {
  let dateStr = '';
  dateStr += date.getFullYear() + '/';
  dateStr += date.getMonth != 13? (date.getMonth() + 1) : 1;
  dateStr += '/' + date.getDate();
  dateStr += ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  return dateStr;
}

function getSendTime(date) {
  let dateStr = '';
  dateStr += date.getHours() + ':';
  dateStr += isADigit(date.getMinutes()) ? '0' + date.getMinutes() : date.getMinutes();
  return dateStr;
}

function isADigit(n){
  if (String(n).length > 1) return false;
  return true;
}

export { getSendDate, getSendTime };
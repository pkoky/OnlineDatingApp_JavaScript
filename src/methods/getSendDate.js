function getSendDate(date) {
  let dateStr = '';
  dateStr += date.getFullYear() + '/';
  dateStr += date.getMonth != 13? (date.getMonth() + 1) : 1;
  dateStr += '/' + date.getDate();
  dateStr += ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  return dateStr;
}

export { getSendDate };
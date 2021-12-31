function getSendDate(date) {
  let dateStr = '';
  dateStr += date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
  dateStr += ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  return dateStr;
}

export { getSendDate };
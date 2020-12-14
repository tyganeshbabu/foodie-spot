function formatDate(date) {
  return new Intl.DateTimeFormat('en-in', { dateStyle: 'full', timeStyle: 'short' }).format(new Date(date));
}

export default formatDate;

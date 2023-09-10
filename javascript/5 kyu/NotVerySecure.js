function alphanumeric(string) {
  return string.length > 0 && /^[a-zA-Z0-9_.-]*$/.test(string) && string.indexOf('_') === -1;
}
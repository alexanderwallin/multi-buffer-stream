export default {
  warn: (...args) => console.warn.apply(console, args),
  debug: (...args) => console.log.apply(console, args),
}

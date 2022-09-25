export default function isNight () {
  const date = new Date()
  return date.getHours() >= 20 || date.getHours() <= 5
}

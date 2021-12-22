export const formatTime = (timer) => {
  const getSeconds = `0${(timer % 60)}`.slice(-2)
  const minutes = `${Math.floor(timer / 60)}`
  const getMinutes = `0${(minutes)}`.slice(-2)

  return `${getMinutes}m:${getSeconds}s`
}
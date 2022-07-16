let counter = 0

export function waifu () {
  return `https://poulton.fun/placewaifu?seed=${counter++}`
}

export function husbando () {
  return `https://poulton.fun/placewaifu/male?seed=${counter++}`
}

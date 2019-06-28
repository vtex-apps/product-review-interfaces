export default function randomReview(productName: string = 'a') {
  return {
    rating: randomRating(productName),
    numberOfReviews: randomNumberOfReviews(productName)
  }
}

function randomRating(name: string): number {
  const x = name.charCodeAt(0)
  let value: string|number = x > 100 ? `${x}`.slice(2,3) : `${x}`.slice(1,2)
  value = parseFloat(value)
  return value > 5 ? 5 : value
}

function randomNumberOfReviews(name: string): number {
  return name.charCodeAt(0)
}
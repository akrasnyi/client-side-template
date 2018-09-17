import AP from 'AP'

export default async function showErrorMessage (errorMessage) {
  const ap = await AP
  return ap.flag.create({
    title: 'Something went wrong',
    body: errorMessage,
    type: 'error'
  })
}

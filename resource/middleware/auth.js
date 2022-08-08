export default function (context) {
  console.log(123)
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
}

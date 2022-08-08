const middleware = {}

middleware['auth'] = require('..\\resource\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

export default middleware

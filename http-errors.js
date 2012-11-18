var errorMap = {
  400: 'Bad request',
  401: 'Unauthorized',
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not found',
  405: 'Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  408: 'Request Timeout',
  409: 'Resource Conflict',
  410: 'Resource Gone',
  411: 'Length Required',
  412: 'Precondition Failed',
  413: 'Request Entity Too Large',
  414: 'Request-URI Too Long',
  415: 'Unsupported Media Type',
  416: 'Requested Range Not Satisfiable',
  417: 'Expectation Failed',
  418: 'I\'m a teapot',
  420: 'Enhance Your Calm',
  428: 'Precondition Required',
  429: 'Too Many Requests',
  431: 'Request Header Fields Too Large',
  500: 'Server error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'HTTP Version Not Supported',
  506: 'Variant Also Negotiates',
  511: 'Network Authentication Required'
}

var HTTPErrors = {}

for (var status in errorMap) {
  var message = errorMap[status]
    , HTTPError = function() { Error.apply(this, arguments) }
  HTTPError.prototype = new Error
  HTTPError.prototype.status = status
  HTTPError.prototype.message = message
  HTTPError.prototype.constructor = HTTPError
  HTTPErrors[status] = HTTPError
}

module.exports = HTTPErrors
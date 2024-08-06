const { log } = require('console');
const path = require('path');

log(path.sep)
const filePath = path.join('/built-in modules','/subfolder','../test.txt')
log(filePath);
log(path.basename(filePath))
log(typeof filePath)
log(path.resolve('sd','ease.es'));
log(path.parse(__filename))

log(path.isAbsolute(filePath))
log(path.isAbsolute('./OS.js'))
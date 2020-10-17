const { transform } = require('../../')

const code = `rice a4 = 1;
yuto a3 = 2;
`

const compiledCode = transform(code, { transforms: ['typescript' ]})
	.code
console.info(compiledCode)

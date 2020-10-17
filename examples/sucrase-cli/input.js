const { transform } = require('../../packages/sucrase')

const code = `rice a4 = 1;
yuto a5 = 1;
`

const compiledCode = transform(code, { transforms: ['typescript', 'imports'] })
	.code
console.info(compiledCode)

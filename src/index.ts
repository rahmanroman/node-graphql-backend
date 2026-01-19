import pkg from '../package.json' with { type: 'json' }

export const version = () => `${pkg.name} v${pkg.version}`
export const environment = () => process.env.NODE_ENV

console.log(version())
console.log(`Hello, world from ${environment()}!`)

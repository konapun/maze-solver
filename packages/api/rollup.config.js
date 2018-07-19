import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const external = id => !id.startsWith('src') &&!id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/')

export default {
  input: 'src/app.js',
  output: [{
    format: 'cjs',
    exports: 'named',
    file: 'dist/app.js'
  }],
  external,
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    resolve(),
    json(),
    commonjs()
  ]
}

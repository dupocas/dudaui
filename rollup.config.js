import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'


export default {
    input: 'src/index.js',
    output: [
        {
            dir: 'dist',
            format: 'cjs',
        },
        {
            file: pkg.module,
            format: 'es',
        }
    ],
    plugins: [
        external(),
        url(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-arrow-functions']
        }),
        resolve(),
        typescript({
            rollupCommonJSResolveHack: true,
            clean: true
        }),
        commonjs(),
        /*
            external(),

    url(),
    svgr(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true
    }),
    commonjs()
        */
    ]
}
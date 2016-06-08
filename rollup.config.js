import babel from 'rollup-plugin-babel';
export default {
    format: 'cjs',
    entry: 'index.jsx',
    dest: 'index.js',
    plugins: [
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [
                'es2015-rollup',
                'react'
            ],
            plugins: [
                'transform-object-rest-spread'
            ]
        })
    ]
}
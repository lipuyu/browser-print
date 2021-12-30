const path = require('path');

module.exports = [
    {
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'browser-print.min.js',
            libraryTarget: 'commonjs2',
            libraryExport: 'default'
        },
    }, {
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'browser-print.js',
            libraryTarget: 'commonjs2',
            libraryExport: 'default'
        },
    }
];

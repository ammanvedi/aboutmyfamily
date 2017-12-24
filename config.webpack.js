const config = require( './config.project.js' );
const path = require( 'path' );

module.exports = {
    entry: config.src.entry,
    output: {
        path: path.resolve( __dirname, config.dist.location ),
        filename: config.dist.bundleName
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                      ["es2015", {
                        "targets": {
                          "browsers": ["last 2 versions", "safari >= 7"]
                        }
                      }]
                    ]
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};

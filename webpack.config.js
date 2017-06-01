module.exports ={
    entry: './src/app.js',
    output: {
        filename: './build/app.bundle.js'
    },
    devServer: {
        inline : true,
        contentBase: './',
        port: 9000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader', 
                query:{
                    presets: ['es2015', 'react']
                }
            }
        ] 
    },
};
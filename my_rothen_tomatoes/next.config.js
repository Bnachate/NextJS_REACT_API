const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  env: {
    MONGO_URI: "mongodb+srv://brahim:WCgPjT2aFUQwaDJd@test.ifjqe.mongodb.net/test?retryWrites=true&w=majority"
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(jpe?g|png|gif|svg)$/i,
  //       use: [
  //         'url-loader?limit=10000',
  //         {
  //           loader: 'img-loader',
  //           options: {
  //             plugins(context) {
  //               if (process.env.NODE_ENV === 'production') return []
  //               return [
  //                 require('imagemin-svgo')({
  //                   plugins: [
  //                     { cleanupIDs: false },
  //                     {
  //                       prefixIds: {
  //                         prefix: path.basename(context.resourcePath, 'svg')
  //                       }
  //                     }
  //                   ]
  //                 })
  //               ]
  //             }
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // },
}
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

  return {
    entry: "./src/index.js",

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProd ? "[name].[contenthash].js" : "[name].js",
      clean: true,
      publicPath: "/",
    },

    // Code splitting: vendor bundle separate from app code
    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },

    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@store": path.resolve(__dirname, "src/store"),
        "@services": path.resolve(__dirname, "src/services"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@pages": path.resolve(__dirname, "src/pages"),
      },
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/favicon.ico",
      }),
    ],

    devServer: {
      port: 3000,
      hot: true,
      historyApiFallback: true, // Needed for React Router
      open: true,
    },

    devtool: isProd ? "source-map" : "eval-source-map",
  };
};

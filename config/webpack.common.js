const path = require("path");
const config = require("../config");
const os = require("os");

const __root = path.resolve(__dirname, "..");

module.exports = {
  node: false,
  entry: {
    "auto-menu": "./src/entry/auto-menu.ts",
    debug: "./src/entry/debug.ts",
  },
  output: {
    library: "auto_menu",
    filename: "[name].js",
    path: path.resolve(__root, "dist"),
    publicPath: config.staticRoot + config.editorVersion,
  },
  plugins: [],
  resolve: {
    alias: {
      "@": path.resolve(__root, "src"),
      "@assets": path.resolve(__root, "src/assets"),
      "@api": path.resolve(__root, "src/api"),
      "@utils": path.resolve(__root, "src/api"),
    },
    extensions: [".ts", ".tsx", ".json", ".css", ".js", ".less"],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: require.resolve("style-loader"),
          },
          {
            loader: require.resolve("css-loader"),
            options: {
              modules: { localIdentName: "[local]__[hash:base64:5]" },
            },
          },
          {
            loader: require.resolve("less-loader"),
          },
        ],
      },
      {
        test: /\.(jsx?|tsx?)$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
          target: "es2017",
        },
      },
      {
        test: /\.(png|jpe?g|bmp|gif|svg|woff2?|eot|ttf|data)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 1e10,
          },
        },
      },
    ],
  },
  devServer: {
    allowedHosts: "all",
    static: { directory: path.resolve(__root, "dist") },
    host: os.hostname().toLowerCase(),
    port: config.httpPort,
    hot: "only",
    devMiddleware: {
      writeToDisk: true,
    },
  },
};

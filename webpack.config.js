/*eslint-env node */

const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const GenerateJsonPlugin = require("generate-json-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const APP_FILE_SERVE_PREFIX = "http://files.archiveweb.page/";

const PACKAGE = require("./package.json");
const WARCIO_PACKAGE = require("./node_modules/warcio/package.json");

const IPFS_CORE_URL = "/ipfs-core.min.js";

const BANNER = "[name].js is part of the Webrecorder Extension (https://replayweb.page) Copyright (C) 2020-2021, Webrecorder Software. Licensed under the Affero General Public License v3.";

const manifest = require("./src/ext/manifest.json");

const defaultDefines = {
  __AWP_VERSION__: JSON.stringify(PACKAGE.version),
  __VERSION__: JSON.stringify(PACKAGE.version),
  __WARCIO_VERSION__: JSON.stringify(WARCIO_PACKAGE.version),
  __SW_NAME__: JSON.stringify("sw.js"),
  __IPFS_CORE_URL__: JSON.stringify(""),
  __IPFS_HTTP_CLIENT_URL__: JSON.stringify(""),
  __APP_FILE_SERVE_PREFIX__ : JSON.stringify(APP_FILE_SERVE_PREFIX),
};


const moduleSettings =  {
  rules: [
    {
      test:  /\.svg$/,
      use: "svg-inline-loader"
    },
    {
      test: /\.s(a|c)ss$/,
      use: ["css-loader", "sass-loader"]
    },
    {
      test: /(dist\/wombat.js|src\/wombatWorkers.js|behaviors.js|extractPDF.js|ruffle.js)$/i,
      use: "raw-loader",
    }
  ]
};


const fallback = {
  "stream": require.resolve("stream-browserify"),
  "querystring": require.resolve("querystring-es3"),
  "url": require.resolve("url/")
};

const optimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      extractComments: false,
    }),
  ],
};

const electronMainConfig = (/*env, argv*/) => {
  return {
    target: "electron-main",
    mode: "production",
    entry: {
      "electron": "./src/electron/electron-rec-main.js",
    },
    optimization,
    resolve: {
      alias: {
        "abort-controller": "abort-controller/dist/abort-controller.js",
        "dlv": "dlv/dist/dlv.js",
        "bignumber.js": "bignumber.js/bignumber.js",
        //"multiformats/hashes/sha2": "multiformats/cjs/src/hashes/sha2.js"
      }
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].js"
    },
    node: {
      __dirname: false,
      __filename: false,
    },
    plugins: [
      new webpack.DefinePlugin(defaultDefines),
      new webpack.BannerPlugin(BANNER),
      new CopyPlugin({
        patterns: [
          { from: "wr-ext/replay/", to: "replay/" },
          { from: "wr-ext/ruffle/", to: "ruffle/" },
          { from: "wr-ext/pdf/", to: "pdf/" },
          { from: "node_modules/leveldown/prebuilds/", to: "prebuilds" },
          { from: "build/extra_prebuilds/", to: "prebuilds" },
        ],
      }),
    ],
    externals: {
      "bufferutil": "bufferutil",
      "utf-8-validate": "utf-8-validate",
    },
    module: moduleSettings,
  };
};


const electronPreloadConfig = (/*env, argv*/) => {
  return {
    target: "electron-preload",
    mode: "production",
    entry: {
      "preload": "./src/electron/electron-rec-preload.js",
    },
    optimization,
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].js"
    },
    plugins: [
      new webpack.DefinePlugin(defaultDefines),
    ]
  };
};

const electronRendererConfig = (/*env, argv*/) => {
  return {
    mode: "production",
    target: "web",
    entry: {
      "rec-window": "./src/electron/rec-window.js",
    },
    optimization,
    resolve: {fallback},
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].js",
      libraryTarget: "global",
      globalObject: "self"
    },

    plugins: [
      new webpack.ProvidePlugin({
        process: "process/browser.js",
        Buffer: ["buffer", "Buffer"],
      }),
      new MiniCssExtractPlugin(),
      new CopyPlugin({
        patterns: [
          { from: "src/electron/rec-preload.js", to: "" },
          { from: "src/electron/rec-window.html", to: "" },
        ]
      }),
      new webpack.DefinePlugin(defaultDefines),
    ],

    module: moduleSettings,
  };
};


const extensionConfig = (env, argv) => {
  const icon = (argv.mode === "production") ? "icon.png" : "icon-dev.png";

  const generateManifest = (name, value) => {
    switch (value) {
    case "$VERSION":
      return PACKAGE.version;

    case "$ICON":
      return icon;
    }

    return value;
  };

  return {
    mode: "production",
    target: "web",
    entry: {
      "bg": "./src/ext/bg.js",
      "ui": "./src/ui/app.js",
      "popup": "./src/popup.js",
      "sw": "./src/sw/main.js"
    },
    optimization,
    resolve: {fallback},
    output: {
      path: path.join(__dirname, "wr-ext"),
      filename: (chunkData) => {
        return !["sw", "ui"].includes(chunkData.chunk.name) ? "[name].js": "./replay/[name].js";
      },
      libraryTarget: "global",
      globalObject: "self"
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: "process/browser.js",
        Buffer: ["buffer", "Buffer"],
      }),
      new MiniCssExtractPlugin(),
      new webpack.BannerPlugin(BANNER),
      new GenerateJsonPlugin("manifest.json", manifest, generateManifest, 2),
      new webpack.DefinePlugin({...defaultDefines,
        __IPFS_CORE_URL__: JSON.stringify(IPFS_CORE_URL),
      }),
      new CopyPlugin({
        patterns: [
          { from: "node_modules/ipfs-core/dist/index.min.js", to: "ipfs-core.min.js" },
        ]
      })
    ],

    module: moduleSettings,
  };
};


module.exports = [ extensionConfig, electronRendererConfig, electronMainConfig, electronPreloadConfig ];


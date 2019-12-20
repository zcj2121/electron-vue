const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  devServer: {
    // can be overwritten by process.env.HOST
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    open: true, // 配置自动启动浏览器
    proxy: {
      '/fs-factoring-web': {
        target: 'http://ycetest.yeepay.com:30531/fs-factoring-web',
        changeOrigin: true,
        pathRewrite: {
          '^/fs-factoring-web': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'));
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'com.example.app',
        productName: '测试商服', // 项目名，也是生成的安装文件名
        copyright: 'Copyright © 2019', // 版权信息
        // directories: {
        //   output: './dist'// 输出文件路径
        // },
        win: {
          icon: './public/app.png',
          target: ['zip', 'nsis']
        },
        mac: {
          icon: './public/app.png',
          target: ['zip', 'dmg']
        },
        nsis: {
          oneClick: false, // 是否一键安装
          allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowToChangeInstallationDirectory: true, // 允许修改安装目录
          installerIcon: './app.jpg', // 安装图标
          uninstallerIcon: './app.jpg', // 卸载图标
          installerHeaderIcon: './app.jpg', // 安装时头部图标
          createDesktopShortcut: true, // 创建桌面图标
          createStartMenuShortcut: true, // 创建开始菜单图标
          shortcutName: 'demo' // 图标名称
        }
      }
    }
  }
};

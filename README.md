## Config 公共模块 ##

config 模块默认导出一个单例对象，通过设置路径读取不同开发环境下的配置文件，并提供获取配置属性方法。

1. 路径设置： config.set(path.join(__dirname, 'config_folder_path'))
1. 获取属性： config.get(prop_name);

## 命令行构建 ##
1. 运行 `yarn build` 编译ts文件
1. 运行 `yarn test` 运行单元测试

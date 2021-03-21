## 百度统计
1. 登录 [百度统计](http://tongji.baidu.com/)，定位到站点的代码获取页面
2. 复制 hm.js? 后面那串统计脚本 id，如下图所示
3. 编辑根目录下的配置文件 `_config.yml`， 添加/修改字段 `baidu_analytics`，值设置成你的百度统计脚本 id。

![img](http://theme-next.iissnan.com/uploads/five-minutes-setup/analytics-baidu-id.png)

## Google Analytics
1. 登录 [谷歌分析](https://analytics.google.com)，获取到你的跟踪 ID，如：`UA-97471234-1`
2. 编辑根目录下的配置文件 `_config.yml`， 添加/修改字段 `google_analytics `，值设置成你的跟踪 ID

## 配置示例：

```yml
# 百度统计
baidu_analytics: d746c8559f0fadb1401723e8606ea2ef
# Google Analytics
google_analytics: UA-97471234-1
```
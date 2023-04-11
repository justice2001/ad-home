# AD HOME (暂定)

🚧 项目正在施工中，当前仅为测试阶段

## 这是什么

一个基于node.js开发的可拓展导航面板，成为你的家庭服务器的入口，帮助你整理归纳站点，即使你没有家庭服务器，也可以通过这个来搭建一个属于你个人的导航主页

## 相较于其他项目有何优点

- 界面美观
- 快速拓展
- 卡片化布局

## 如何拓展插件

我们提供了非常易用的组件加载方式，所有的加载过程都会由框架自动完成，完全无需您的侵入核心代码，您只需要关注业务逻辑即可。

### 前端卡片

您只需要在`@component/widget`目录下创建您的卡片界面，并实现您的卡片展示效果即可。

我们的框架会向组件传递下面几项参数:

- `position`: 位置信息，包含卡片的其实x/y和占用的宽度和高度
- `meta`: 元数据，这里包含了在Widget中定义的所有可填写元数据

### 后端接口

后端的组件位于`/widget`目录下，在此目录创建您的组件目录。

在组件目录下必须包含`info.json`文件，以便于WidgetLoader加载组件组件，这个文件的标准格式如下:

```json
{
    "id": "widget-demo",
    "name": "DEMO",
    "widget_type": "external",
    "version": "1.0.0",
    "meta": [
        {"key": "word", "type": "string", "name": "展示单词"}
    ]
}
```

每个键值对应的信息如下:

- `id`: 组件的唯一可识别id,将被用于系统组件识别
- `name`: 组件名称,用于向客户端展示组件的信息
- `widget_type`: 暂未使用：计划用于标记区分外置组件与内置组件
- `version`: 组件版本
- `meta`: 定义组件所需求的参数，将会保存到数据库并在前端进行传输
    - `key`： 键名称，用于软件识别
    - `type`: 属性类型，暂时计划string/number/enum/image/color无种类型，用于创建对话框
    - `name`: 用于向用户展示的文本

**拓展接口**

如果您的组件需要拓展接口，您可以在插件目录下创建`route.js`来创建KoaRoute, 注意, 应当在最后导出router。

建议路由格式为`/api/widget/<插件id>/<接口>`, 当然, 您也可以在此处定义任何的路径。

此处给出基本示例:

```js
import KoaRouter from '@koa/router'

const router = new KoaRouter()

router.get("/api/widget/widget-demo/", async (ctx) => {
    ctx.body = "Hello Widget"
})

export default router
```

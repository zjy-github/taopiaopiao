# 基于React16全家桶的仿淘票票

## 概述

使用React16制作的的WebApp,通过React-Router4实现页面跳转完成单页面应用，UI通过scss实现。

## 功能

* 主页————获取当前播放电影，在主页展示，热门信息通过轮播图展示

* 定位地址————获取全国城市信息展示，并可选择定位地址

* 电影详情————展示电影详细信息

* 电影剧照————以轮播图方式展示电影剧照

* 购票————以canvas模拟电影院购票,并使用Redux管理状态

* 展示电影详细内容

## 功能演示

**主页**

![主页](./public/主页.gif)

**定位地址**

![定位地址](./public/location.gif)

**电影详情**

![电影详情](./public/电影详情.gif)

**电影剧照**

![电影剧照](./public/电影剧照.gif)

**购票**

![购票](./public/购票.gif)

## 技术栈

* 使用React官方提供的构建工具create-react-app构建项目
* React16
* 使用React-Router4做路由跳转
* 使用Redux状态管理，React-Redux连接React和Redux
* 使用React16新抽取的prop-types指定context对象、props类型
* sass

## 项目结构
<pre>
.
├── README.md
├── .editorconfig
├── .editorconfig.js
├── .eslintigonre
├── .eslintrc
├── .gitignore
├── .project
├── package.json
├── public // 公共资源
├── src
│   ├── components // 通用组件库
│   │   ├── CollapsibleText //文本展示 超出部分隐藏
│   │   ├── LineLink //单元模块
│   │   ├── RenderToBody
│   │   ├── Star  //评分
│   │   └── TabMenu  //顶部菜单
│   ├── icons // 图标库
│   ├── helpers
│   │   └── request.js
│   ├── routes // 路由页面
│   │   ├── detail  //内容展示页面
│   │   │   ├── components
│   │   │   │   ├── Artist //演员列表
│   │   │   │   ├── BaseInfo //电影信息
│   │   │   │   ├── CommentList //评论列表
│   │   │   │   ├── ScoreDistribute //电影纵评分
│   │   │   │   ├── ScoreSummary //电影推荐度
│   │   │   │   └── TagList //评论分类
│   │   │   ├── container
│   │   │   │   ├── Comment //热门评论
│   │   │   │   └── ImageSlider //剧照展示
│   │   │   ├── index.jsx 
│   │   │   ├── index.scss
│   │   │   └── index.css
│   │   ├── home  //界面页面
│   │   │   ├── components
│   │   │   │   ├── CityLayer //定位城市列表
│   │   │   │   ├── MovieItem //主页电影列表
│   │   │   │   ├── Slide //轮播图
│   │   │   │   └── TopBar //顶部功能按钮
│   │   │   ├── index.jsx 
│   │   │   ├── index.scss
│   │   │   └── index.css
│   │   ├── seat  //选座界面
│   │   │   ├── action
│   │   │   │   └── action.js //action
│   │   │   ├── components
│   │   │   │   ├── MovieInfo //电影信息
│   │   │   │   └── SeatSelectd //已选座位
│   │   │   ├── container
│   │   │   │   └──SeatSelector.jsx //购票座位
│   │   │   ├── mock //模拟已售座位数据
│   │   │   ├── reducers
│   │   │   │   └── reducer.js //reducer
│   │   │   ├── index.jsx 
│   │   │   ├── index.scss
│   │   │   └── index.css
│   │   └── user  //用户页面
│   ├── index.css
│   ├── index.js
│   ├── normalize.css //格式化样式
│   └── _uitl.scss //scss通用样式
└── package-lock.json
</pre>

## 总结

主要学会对React-Router4的使用以及了解了React、React-Router4和之前版本的不同，更加深入的理解Redux和React-Router的原理，对React组件的优化也加深了了解

## 运行

```
# clone 

git colne https://github.com/zjy-github/taopiaopiao.git

cd talk

# dev

npm start

# build

npm build
```
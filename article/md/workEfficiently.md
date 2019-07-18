## 高效工作

### 一个思考框架
1. Where are we?（现状）
2. Where are we going?（目标）
3. How Can we get there?（实现路径）

### 四个践行原则
1. 以终为始。
2. 任务分解。
3. 沟通反馈。
4. 自动化。

以终为始确定目标，任务分解拆分目标，形成实现路径，沟通反馈和自动化为确定目标和任务分解以及执行分解任务保驾护航。


### 记住践行语录
- 面对问题时，用思考框架问问自己，现状、目标和路径。
- 遇到事情，倒着想。
- 在做任何事之前，先定义完成的标准。
- 在做任何需求或任务之前，先定好验收标准。
- 尽早提交代码去集成。
- 默认所有需求都不做，直到弄清楚为什么要做这件事。 
- 扩大自己工作的上下文，别把自己局限在一个“程序员”的角色上。
- 在动手做一件事之前，先推演一番。
- 问一下自己，我的工作是不是可以用数字衡量。
- 设计你的迭代 0 清单，给自己的项目做体检。
- 动手做一个工作之前，请先对它进行任务分解。
- 多写单元测试。
- 我们应该编写可测的代码。
- 将任务拆小，越小越好。
- 按照完整实现一个需求的顺序去安排分解出来的任务。
- 要想写好测试，就要写简单的测试。
- 想要管理好需求，先把需求拆小。
- 尽量做最重要的事。
- 做好产品开发，最可行的方式是采用 MVP（Minimum Viable Product）。
- 通过沟通反馈，不断升级自己的编解码能力。
- 用业务的语言写代码。
- 多面对面沟通，少开会。
- 多尝试用可视化的方式进行沟通。
- 做好持续集成的关键在于，快速反馈。
- 定期复盘，找准问题根因，不断改善。
- 多走近用户。
- 事情往前做，有问题尽早暴露。
- 多输出，让知识更有结构。
- 锤炼你的重构技能。
- 请谨慎地将工作自动化。
- 将你的工作过程自动化。
- 有体系地学习运维知识。
- 将部署纳入开发的考量。
- 将验收测试自动化。
- 把函数写短。
- 构建好你的领域模型。
- 用简单技术解决问题，直到问题变复杂。
- 学习领域驱动设计。
- 了解一个项目，从大图景开始。
- 小步改造遗留系统，不要回到老路上。
- 在学习区工作和成长。



### 践行图谱
思考框架：
![](../../images/workEfficiently/thinkingFrame.jpg)

快速了解一个项目：
![](../../images/workEfficiently/quicklyUnderstandProject.jpg)
迭代0清单：
![](../../images/workEfficiently/iteration0List.jpg)
任务分解（简单登录功能）：
![](../../images/workEfficiently/taskDecomposition.jpg)

测试金字塔：
![](../../images/workEfficiently/testPyramid.jpg)
测试驱动开发（测试驱动设计）：
![](../../images/workEfficiently/TDD.png)

测试范例：
```
@Test
void should_extract_HTTP_method_from_HTTP_request() {
  // 前置准备
  request = mock(HttpRequest.class);
  when(request.getMethod()).thenReturn(HttpMethod.GET);
  HttpMethodExtractor extractor = new HttpMethodExtractor();
  
  // 执行
  HttpMethod method = extractor.extract(request);
  
  // 断言
  assertThat(method, is(HttpMethod.GET);
  
  // 清理
}

```
这段代码分成了四段，分别是**前置准备、执行、断言和清理**，这也是一般测试要具备的四段。
- 这几段的核心是中间的执行部分，它就是测试的目标，但实际上，它往往也是最短小的，一般就是一行代码调用。其他的部分都是围绕它展开的，在这里就是调用 HTTP 方法提取器提取 HTTP 方法。
- 前置准备，就是准备执行部分所需的依赖。比如，一个类所依赖的组件，或是调用方法所需要的参数。在这个测试里面，我们准备了一个 HTTP 请求，设置了它的方法是一个 GET 方法，这里面还用到了之前提到的 Mock 框架，因为完整地设置一个 HTTP 请求很麻烦，而且与这个测试也没什么关系。
- 断言是我们的预期，就是这段代码执行出来怎么算是对的。这里我们判断了提取出来的方法是否是 GET 方法。另外补充一点，断言并不仅仅是 assert，如果你用 Mock 框架的话，用以校验 mock 对象行为的 verify 也是一种断言。
- 清理是一个可能会有的部分，如果你的测试用到任何资源，都可以在这里释放掉。不过，如果你利用好现有的测试基础设施（比如，JUnit 的 Rule），遵循好测试规范的话，很多情况下，这个部分就会省掉了。

持续集成：
![](../../images/workEfficiently/CI.jpg)
![](../../images/workEfficiently/CI.png)
持续交付（持续部署）：
![](../../images/workEfficiently/CDM.jpg)
![](../../images/workEfficiently/CDA.jpg)

运维知识体系：
![](../../images/workEfficiently/knowledgeSystem.jpg)
领域驱动设计：
![](../../images/workEfficiently/DDD.png)
用业务语言写代码：
![](../../images/workEfficiently/businessLanguage.png)

精益创业：
![](../../images/workEfficiently/leanStartup.jpg)
看板：
![](../../images/workEfficiently/billboard.png)

一专多能：
![](../../images/workEfficiently/T.jpg)
学习模型：
![](../../images/workEfficiently/learnModel.jpg)






## 一篇文章了解 Java 核心技术

### Java 异常处理机制

#### Throwable 类图
![](../../images/javaCore/throwable.png)

#### 简述
Exception 和 Error 都继承了 Throwable 类，在 Java 中只有 Throwable 的实例才可以被抛出或捕获，它是异常处理机制的基本组成类型。

Exception 和 Error 体现了 Java 平台设计者对不同异常情况的分类。
- Exception 是程序正常运行中，可以预料的意外情况，可能并且应该被捕获，进行相应处理。Exception 又分为可检查异常和不检查异常。可检查异常在源代码里必须显示地进行捕获处理，这是编译期检查的一部分。不检查异常就是所谓的运行时异常，如 ：NullPointerException、ArrayIndeOutOfBoundsException 等，通常是可以编码避免的逻辑错误，具体根据需要来判断是否需要捕获处理，编译期不检查运行时异常。
- Error 指在正常情况下，不大可能出现的情况，绝大部分的 Error 都会导致程序处于非正常的、不可恢复状态。所以不便于也不需要捕获。如：OutOfMemoryError。

#### 异常处理的两个基本原则
1. 尽量不要捕获类似 Exception 这样的通用异常，而是应该捕获特定异常。
2. 不要生吞异常。

如以下代码：
```
try {
  // 业务代码
  // …
  Thread.sleep(1000L);
} catch (Exception e) {
  // Ignore it
}

```

```
try {
   // 业务代码
   // …
} catch (IOException e) {
    e.printStackTrace();
}

```


---
### Java引用
Java引用分为：强引用、软引用、弱引用、幻想引用。不同的引用类型，主要体现的是对象的可达性状态和对垃圾收集的影响。
- 强引用：就是我们通常使用的普通引用，可以通过强引用访问对象。GC不会收集有强引用指向的对象。 
- 软引用：比强引用弱化一些的引用，它可以豁免一些垃圾收集，GC可以确保在抛出OOM之前清理掉软引用指向的对象。可以用于实现内存敏感的缓存。 
- 弱引用：主要是提供一种在弱引用状态下访问对象的途径。可以用来构建一种没有特定约束的关系，如维护一种非强制性的映射关系。 
- 幻象引用：不能通过它访问对象。仅仅是提供了一种对象被finalize以后，做某些事情的机制，比如：post-mortem清理机制、cleaner机制等。	


---
### 谈谈final、finally、 finalize有什么不同？
final 可以用来修饰类、方法、变量，分别有不同的意义，final 修饰的 class 代表不可以继承扩展，final 的变量是不可以修改的，而 final 的方法也是不可以重写的（override）。

finally 则是 Java 保证重点代码一定要被执行的一种机制。我们可以使用 try-finally 或者 try-catch-finally 来进行类似关闭 JDBC 连接、保证 unlock 锁等动作。

finalize 是基础类 java.lang.Object 的一个方法，它的设计目的是保证对象在被垃圾收集前完成特定资源的回收。finalize 机制现在已经不推荐使用，并且在 JDK 9 开始被标记为 deprecated。





**文章持续更新中！！！**



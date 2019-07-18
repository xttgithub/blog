## 前后端接口规范

### 接口通用规则
**常规登录接口认证：**
请求头信息：
X-Access-Token：登录验证通过后生成的授权Token

**Oauth 接口认证：**
请求头信息：
X-Access-Token：Oauth授权后获取的授权Token

**open 接口认证：**
请求头信息：
X-Timestamp：生成签名使用的时间戳
X-Sign-Type：签名散列算法类型
X-Sign：签名散列的值

**验签规则：**
a，筛除为空的业务参数。
b，获取当前timestamp。
c，将非空业务参数，timestamp，secret（被调用方和调用方约定好的一个字符串，一般从开放平台获取appId、appSecret），signType（签名散列算法名称，当前使用MD5）按key名首字母升序排序。
d，将排序好的参数以参数名=参数值的形式加&进行拼接。
e，将排序好的字符串进行MD5散列加密，生成 sign 参数。
例如：请求参数x=1，y=2，timestamp=1514380514846，secret=ace221c545d9318c814fab12264e38e9，signType=MD5。生成签名sign=MD5("secret=ace221c545d9318c814fab12264e38e9&signType=MD5&timestamp=1514380514846&x=1&y=2")

**敏感数据传输加密：**
使用 secret（被调用方和调用方约定好的一个字符串，一般从开放平台获取appId、appSecret）进行对称加密。

**拦截器AccessInterceptor或者AccessFilter：**
1、校验 accessToken 或 sign 合法性（如果是开放平台注册应用，需先校验应用合法性）。
2、获取用户信息并放入 authContext。
3、敏感数据解密。
4、校验数据权限。


### 通用格式

#### request data
```
{
  "paramA": 11,
  "paramB": "111"
}
```

#### response data

- 正常情况
```
{
  "code": 0,  //0 表示成功
  "message": "success",
  "data": {}
}
```

- 错误情况
```
{
  "code": 100,  //错误码
  "message": "参数不能为空", //错误信息
}
```

---

### 分页场景

#### request data

```
{
  "pageNum":1,	//页码
  "pageSize":10,	//每页条数
}
```

#### response data

- 正常情况：有数据
```
{
  "code":0,
  "message":"success",
  "data":{
    "list":[1,2,3,4],
    "total": 100
  }
}
```

- 正常情况：无数据
```
{
  "code":0,
  "message":"success",
  "data":{
    "list": [],
    "total": 0
  }
}
```

- 错误情况
```
{
  "code": 100,  //错误码
  "message": "参数不能为空", //错误信息
}
```

---

### 下拉框数据

#### request data
```
{
  "paramA": 11,
  "paramB": "111"
}
```

#### response data

- 正常情况：有数据
```
{
   "code":0,
   "message":"success",
   "data":[
      {"value":"标题","key":"a"},
      {"value":"标题2","key":"a2"}
   ]
}
```

- 正常情况：无数据
```
{
   "code":0,
   "message":"success",
   "data":[]
}
```

- 错误情况
```
{
  "code": 100,  //错误码
  "message": "参数不能为空", //错误信息
}
```









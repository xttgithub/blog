## 前后端接口规范

### 通用格式

#### request data
```
{
  "paramA": 11,
  "paramB": "111"
}
```

#### response data
```
{
  "code": 0,  //0 表示成功
  "message": "success",
  "data": {}
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

- 有数据
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

- 无数据
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

- 有数据
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

- 无数据
```
{
   "code":0,
   "message":"success",
   "data":[]
}
```









## 接口参数及返回值封装处理

### 接口返回值包装类
```
import lombok.ToString;

import java.io.Serializable;

/**
 * 业务返回结果包装类，其中code为业务处理状态码，与http状态码无关
 *
 * @param <T>
 */
@ToString
public class RespResult<T> implements Serializable {
    private static final long serialVersionUID = 9171112614006166072L;

    private int code = 0;
    private String message = "success";
    private T data = null;

    public RespResult() {
    }

    public RespResult(T data) {
        this.data = data;
    }

    public RespResult(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public RespResult success() {
        return this;
    }

    public RespResult success(T t) {
        this.data = t;
        return this;
    }

    /**
     * 前端要求处理成功状态码为200
     * @return
     */
    public RespResult toHttpResult(){
        if(this.code == 0){
            this.code = 200;
        }
        return this;
    }

    public RespResult fail(int code, String message) {
        this.code = code;
        this.message = message;
        return this;
    }

    public RespResult fail(ErrorCode errorCode) {
        this.code = errorCode.getCode();
        this.message = errorCode.getMessage();
        return this;
    }

}
```

### 分页包装类

- 请求分页信息类
```
import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * 请求分页信息
 */
@Data
@Accessors(chain = true)
public class ReqPage implements Serializable {
    private static final long serialVersionUID = -6545154165335483496L;
    //页码
    private int pageNum = 1;
    //每页显示数量
    private int pageSize = 10;
    //排序字段名称
    private String orderByStr;
    //排序，默认降序
    private String seqStr = "desc";

}
```

- 响应分页信息类
```
import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.util.List;

/**
 * 响应分页信息
 */
@Data
@Accessors(chain = true)
public class RespPage<T> implements Serializable {
    private static final long serialVersionUID = -6271056807202054373L;
    //查询结果总数量
    private long total;
    //查询页结果列表
    private List<T> list;

}
```









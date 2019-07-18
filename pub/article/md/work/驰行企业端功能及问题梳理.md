## 驰行企业端功能及问题梳理

### 问题详情

1. 接口请求类型要求前端使用指定类型，然服务端没有做请求类型限制，且没有对输入输出做限制(consumes、produces)。如：company/addLogo 接口
2. rest 成熟度模型，使用到哪一个层次。接口是添加操作，使用的是GET请求，我认为这种使用方式不太好。
3. 如果确定 service 层只有自己使用的话，只需在 controller 入口做参数判断就可以了，不需要在 service 层做重复判断。
4. 企业钱包页面和接口对应？充值流水 finance/queryAccountDetailList?pageSize=10&pageNum=1&type=1，授信管理finance/queryAccountDetailList?pageSize=10&pageNum=1&type=2，费解。（rap 接口文档中 授信记录查询是 finance/queryCreditRecord；公司账户流水查询是  finance/queryAccountDetailList，type 值是 1:信用卡;2:支付宝;3:现金;4:优惠券;5:微信;6:招商银行;7:通联;8:余额;14:连连信用卡;15:连连借记卡;99:手动（线下汇款）1001：赠送 1002：注册赠送 1003：分享赠送 1004：活动赠送 1005：充值赠）
5. 对象属性拷贝为什么不使用 SpringFramwork 中提供的 BeanUtils 或者 apach commons3 中提供的拷贝工具，一般这些工具相对来说是比较可靠的，为什么要自己重复造轮子呢？还有的地方将BeanUtils提供的属性拷贝方法包装了一下再提供出来使用，这样做的目的是什么？
6. RegexValidateUtil 类中异常处理，捕获通用异常，且生吞异常，可能导致无法定位问题。
7. IndexController-getLoginVerifyCode：问题一：硬编码问题。问题二：判断手机号未注册因该直接返回，不应该再发短信验证码。问题三：异常捕获范围应尽量只捕获可能发生异常的代码段（性能问题），捕获异常类型应该捕获特定异常；问题四：短信风控是否有
8. RandomValidateCode 类中异常应该输出到分布式日志系统中，不要使用 e.printStackTrace();
9. RegUserController-regUserAndCompany：问题一：硬编码问题。问题二：在基础服务层upms和聚合层 daimler-company-web 都定义了相同意义的错误码，在聚合层做错误码映射。问题三：聚合层调用基础层写库，却在聚合层直接读从库，且在基础层也提供读操作。
10. IndexController-loginByVerifyCode：问题一：登录次数判断目的是什么？登录错误次数判断；问题二：代码优化
11. getLoginMenu：问题一：一个用户是否同时具有多个角色？
12. 单个方法代码行数太多，建议拆分
13. 



### 问题总结
1. 接口定义问题（接口命名、http动词（rest）、接口请求类型限制、输入输出类型限制、接口参数重复判断）
2. 工具类使用问题（重复造轮子）
3. 异常处理问题（捕获范围、捕获类型、异常处理）
4. 代码可读性问题（硬编码）
5. 项目架构问题（项目边界划分，数据库操作）
6. 错误码问题（使用规范、简化等）
7. 业务逻辑问题（避免不必要的操作）
8. 



### 验证码功能
1. 发送短信验证码（index/getLoginVerifyCode）
2. 获取图片验证码（index/getVerify）。 备注：页面没看到使用


### 注册登录登出功能
1. 获取城市编码列表（reguser/getCityCode）。备注：通过配置服务config-service（crud），该接口通过调用配置服务提供的dubbo接口查询城市编码列表。
2. 企业注册（reguser/regUserAndCompany）
3. 短信验证码登录（index/loginByVerifyCode）
4. 密码登录（index/login）
5. 登出（index/logout）


### 导航（含首页）
1. 获取登录菜单（roleMenu/getLoginMenu）
2. 查询企业账户信息（finance/queryAccountByCompanyId）
3. 查询企业基础信息（company/queryCompanyBaseInfo）
4. 上传logo（company/addLogo）
5. 上传营业执照（https://testgd-company.caocaoglobal.com/rubick/9/upload）
6. 企业资质提交（company/submitAuditCompany）


### 订单管理
1. 获取部门列表（department/getNeighborSubDept）
2. 查询订单列表（orderHistory/queryOrderList）。备注：rap 接口文档中没有找到该接口
3. 导出订单列表功能由前端自己实现。


### 企业员工
#### 部门管理
1. 获取部门列表（department/getNeighborSubDept）
2. 新增部门（department/addADept）
3. 修改部门名称（department/updateADept）
4. 删除部门（department/deleteADept）


#### 员工管理
1. 查询员工列表（employess/queryByCompanyId）
2. 查询已离职员工列表（employess/queryDepartureEmp）。备注：rap 接口文档中没有找到该接口
3. 增加企业员工（employess/addCompanyEmps）
4. 修改员工部门（department/moveEmp2Dept）
5. 删除员工（employess/deleteEmployeeByIds）
6. 将员工添加到离职员工列表（employess/addDepartureEmp）
7. 员工从离职恢复正常（employess/restoreDeletedEmployees）


#### 批量导入员工
1. 下载批量导入模板（employess/downTemplate）
2. 批量导入（employess/addCompanyEmpsBatch）


### 企业钱包
1. 查询公司账户信息（finance/queryAccountByCompanyId）
2. 查询公司账户流水（finance/queryAccountDetailList）
3. 设置企业提醒金额（company/setWaringAmount）






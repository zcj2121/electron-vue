import request from '@/utils/request'

// 数字证书 流程数组
export function getBorrower(data) {
  return request({
    url: '/cfca/getBorrower',
    method: 'post',
    data
  })
}

// 是否 开通数字证书
export function checkOpenAccount(data) {
  return request({
    url: '/cfca/checkOpenAccount',
    method: 'post',
    data
  })
}

// 打款申请
export function payApply(data) {
  return request({
    url: '/cfca/payApply',
    method: 'post',
    data
  })
}

// 验证打款金额
export function payAuth(data) {
  return request({
    url: '/cfca/payAuth',
    method: 'post',
    data
  })
}

// 确认开通数字证书
export function openAccount(data) {
  return request({
    url: '/cfca/openAccount',
    method: 'post',
    data
  })
}

// 银行列表
export function getBankList() {
  return [
    {"id":"100","text":"中国邮政储蓄银行"},
    {"id":"102","text":"中国工商银行"},
    {"id":"103","text":"中国农业银行"},
    {"id":"104","text":"中国银行"},
    {"id":"105","text":"中国建设银行"},
    {"id":"301","text":"交通银行"},
    {"id":"302","text":"中信银行"},
    {"id":"303","text":"中国光大银行"},
    {"id":"304","text":"华夏银行"},
    {"id":"305","text":"中国民生银行"},
    {"id":"306","text":"广发银行"},
    {"id":"307","text":"平安银行"},
    {"id":"308","text":"招商银行"},
    {"id":"309","text":"兴业银行"},
    {"id":"310","text":"上海浦东发展银行"},
    {"id":"311","text":"恒丰银行"},
    {"id":"316","text":"浙商银行"},
    {"id":"317","text":"渤海银行"},
    {"id":"401","text":"上海银行"},
    {"id":"403","text":"北京银行"},
    {"id":"404","text":"烟台银行"},
    {"id":"405","text":"福建海峡银行"},
    {"id":"408","text":"宁波银行"},
    {"id":"409","text":"齐鲁银行"},
    {"id":"411","text":"焦作市商业银行"},
    {"id":"412","text":"温州银行"},
    {"id":"413","text":"广州银行"},
    {"id":"415","text":"甘肃银行"},
    {"id":"418","text":"洛阳银行"},
    {"id":"420","text":"大连银行"},
    {"id":"421","text":"苏州银行"},
    {"id":"422","text":"河北银行"},
    {"id":"423","text":"杭州银行"},
    {"id":"424","text":"南京银行"},
    {"id":"425","text":"东莞银行"},
    {"id":"427","text":"乌鲁木齐市商业银行"},
    {"id":"431","text":"临商银行"},
    {"id":"434","text":"天津银行"},
    {"id":"435","text":"郑州银行"},
    {"id":"437","text":"珠海华润银行"},
    {"id":"439","text":"锦州银行"},
    {"id":"440","text":"徽商银行"},
    {"id":"442","text":"哈尔滨银行"},
    {"id":"443","text":"贵阳银行"},
    {"id":"446","text":"丹东银行"},
    {"id":"447","text":"兰州银行"},
    {"id":"448","text":"江西银行"},
    {"id":"449","text":"晋商银行"},
    {"id":"450","text":"青岛银行"},
    {"id":"451","text":"吉林银行"},
    {"id":"455","text":"日照银行"},
    {"id":"459","text":"台州银行"},
    {"id":"461","text":"长沙银行"},
    {"id":"462","text":"潍坊银行"},
    {"id":"466","text":"富滇银行"},
    {"id":"472","text":"廊坊银行"},
    {"id":"473","text":"浙江泰隆商业银行"},
    {"id":"474","text":"内蒙古银行"},
    {"id":"478","text":"广西北部湾银行"},
    {"id":"479","text":"包商银行"},
    {"id":"481","text":"威海市商业银行"},
    {"id":"485","text":"绵阳市商业银行"},
    {"id":"487","text":"大同市商业银行"},
    {"id":"489","text":"广东南粤银行"},
    {"id":"490","text":"张家口市商业银行"},
    {"id":"491","text":"桂林银行"},
    {"id":"497","text":"莱商银行"},
    {"id":"499","text":"新疆银行"},
    {"id":"701","text":"昆仑银行"},
    {"id":"1402","text":"昆山农村商业银行"},
    {"id":"1403","text":"江苏常熟农村商业银行"},
    {"id":"1404","text":"深圳农村商业银行"},
    {"id":"1405","text":"广州农村商业银行"},
    {"id":"1408","text":"佛山顺德农村商业银行"},
    {"id":"1410","text":"湖北省农村信用社联合社"},
    {"id":"1413","text":"重庆农村商业银行"},
    {"id":"1414","text":"山东省农村信用社联合社"},
    {"id":"1416","text":"张家港农村商业银行"},
    {"id":"1417","text":"福建省农村信用社联合社"},
    {"id":"1418","text":"北京农村商业银行"},
    {"id":"1419","text":"天津农商银行"},
    {"id":"1420","text":"宁波鄞州农村合作银行"},
    {"id":"1424","text":"江苏省农村信用合作社联合社"},
    {"id":"1434","text":"山西尧都农村商业银行"},
    {"id":"1438","text":"湖南省农村信用社联合社"},
    {"id":"1442","text":"陕西省农村信用社联合社"},
    {"id":"1502","text":"邯郸市商业银行"},
    {"id":"1504","text":"承德银行"},
    {"id":"1505","text":"沧州银行"},
    {"id":"1506","text":"晋城市商业银行"},
    {"id":"1507","text":"鄂尔多斯银行"},
    {"id":"1509","text":"东营市商业银行"},
    {"id":"1510","text":"济宁银行"},
    {"id":"1511","text":"泰安市商业银行"},
    {"id":"1512","text":"德州银行"},
    {"id":"1518","text":"龙江银行"},
    {"id":"1519","text":"浙江稠州商业银行"},
    {"id":"1520","text":"安徽省农村信用联社"},
    {"id":"1521","text":"广西壮族自治区农村信用社联合社"},
    {"id":"1523","text":"云南省农村信用社联合社"},
    {"id":"1529","text":"广东农村信用社"},
    {"id":"1530","text":"河北省农村信用社联合社"},
    {"id":"1532","text":"衡水市商业银行"},
    {"id":"1539","text":"山西省农村信用社"},
    {"id":"1549","text":"宜宾市商业银行"},
    {"id":"1552","text":"自贡市商业银行"},
    {"id":"1565","text":"颍淮农村商业银行"},
    {"id":"1569","text":"贵州银行"},
    {"id":"1570","text":"长治银行"},
    {"id":"1572","text":"江苏江南农村商业银行"},
    {"id":"1584","text":"黑龙江省农村信用社联合社"},
    {"id":"1616","text":"中原银行"},
    {"id":"1645","text":"长治潞州农村商业银行"},
    {"id":"1671","text":"晋城农村商业银行"},
    {"id":"1672","text":"河南省农村信用社"},
    {"id":"1678","text":"吉林环城农村商业银行"},
    {"id":"1699","text":"新疆汇和银行"},
    {"id":"1717","text":"深圳前海微众银行"},
    {"id":"1731","text":"重庆富民银行"},
    {"id":"1733","text":"扬州农村商业银行"},
    {"id":"1747","text":"四川新网银行股份有限公司"},
    {"id":"1758","text":"湖南攸县农村商业银行股份有限公司"},
    {"id":"1763","text":"长沙农商银行"},
    {"id":"1771","text":"蓝海银行"},
    {"id":"1772","text":"江苏南通农村商业银行"},
    {"id":"1774","text":"中信百信银行"},
    {"id":"1804","text":"四川天府银行股份有限公司"},
    {"id":"1821","text":"营口沿海银行"}
  ]
}

// 服务协议
export function getServiceAgreement() {
  return `<div style="color: #2c2c2c">
  <p style="line-height:18pt; margin:2.5pt 0pt 11.3pt; text-align:center"><span
  style="  font-size:13.5pt; font-weight:bold">CFCA数字证书服务协议</span>
</p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >（本协议包含CFCA的免责条款，请认真阅读，尤其是粗体字内容）</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">尊敬的网上用户：</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >中金金融认证中心有限公司(即中国金融认证中心，简称“CFCA”)是经国家有关管理机关审批设立的电子认证服务机构，作为权威的第三方安全认证机构，通过数字证书注册机构（以下简称“RA”）向网上用户（以下简称“订户”）发放数字证书，为订户网上交易提供信息安全保障。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >订户在申请使用CFCA签发的数字证书之前，应先阅读并同意"CFCA数字证书服务协议"(以下简称"本协议")。本协议构成订户与中金金融认证中心有限公司之间的权利义务约定，若不同意本协议全部或部分条款，请勿申请使用CFCA数字证书。</span><span
    style=" color:#333333;; font-weight:bold">订户一旦完成CFCA数字证书的下载或初次使用，即表明同意接受并愿意遵守本协议的所有条款。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    style=" color:#333333;; font-weight:bold">一、证书订户的权利和义务</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">1、订户应遵循诚实、信用原则，在向RA申请数字证书时，应当提供其真实、完整、准确的信息和资料，并在这些信息、资料发生改变时及时通知原RA。如因订户故意或过失提供的资料不真实、不完整、不准确或资料改变后未及时通知CFCA或原RA，造成的损失由订户自己承担。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">2、在通过RA的审核、信息注册后，订户即可获得数字证书的下载凭证，订户应妥善保管下载凭证，亲自用该凭证从相关网站将数字证书下载在安全的容器里；订户也可以委托或授权他人通过其他安全的方式获得数字证书。</span><span
   >订户获得的下载凭证为一次性使用，有效期为14天。如果在14天内没有下载数字证书，订户需要到RA重新获得下载凭证。订户应对获得的数字证书信息进行确认，首次使用，视为确认生效。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >3、 订户须使用经合法途径获得的相关软件。 </span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >4、 订户应合法使用CFCA发放的数字证书，并对使用数字证书的行为负责：</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >①使用证书的行为应符合全部适用的法律法规；</span></p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >②使用证书的行为应符合订户真实意愿或者仅为了处理已获得授权的事务；</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >③使用证书的行为应符合本协议约定的使用范围和条件。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">5、 订户应采取必要手段来保障证书的私钥和相关密码的安全存储、使用备份等。EV代码签名证书必须被保存在满足FIPS-140-2或相应级别的安全介质中；如初次使用智能密码钥匙时，应修改初始的缺省密码。订户如因故意或过失导致他人盗用、冒用数字证书私钥和密码时，订户应自行承担由此产生的责任。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">6、 如订户使用的数字证书私钥和密码泄漏、丢失，或者订户不希望继续使用数字证书，或者订户主体不存在，订户或法定权利人应当立即到原RA申请废止该数字证书，相关手续遵循RA的规定。</span><span
   >CFCA收到RA的废止请求后，应在4小时之内废止该订户的数字证书。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >7、 订户损害CFCA利益的，须向CFCA赔偿全部损失。这些情形包括但不限于：</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >①订户在申请数字证书时没有提供真实、完整、准确信息，或在这些信息变更时未及时通知RA；</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >②订户知道自己的私钥已经失密或者可能已经失密而未及时告知有关各方、并终止使用；</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >③订户有其他过错或未履行本协议的相关约定。 </span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >8、 订户有按期缴纳数字证书服务费的义务，费用标准请咨询RA。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >9、 CFCA有权因安全风险因素要求订户更换数字证书。订户在收到数字证书更换通知后，应在规定的期限内到原RA更换。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">10、订户申请代码签名证书后，一旦发现如下情况之一时，应当立即向CA申请吊销此证书：</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">①证据表明，此代码签名证书被用于签署可疑代码，包括但不限于病毒，木马，或者其他不恰当的程序。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">②证书中内容不再正确或不再准确。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">③此证书私钥信息已被泄露、丢失，或者其他相关部分已被错误使用。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">11、证书一旦被吊销，订户将不能再使用该证书。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">12、订户明确了解，如果CFCA发现了订户证书的不当使用，或者订户证书被用于违法甚至犯罪行为，CFCA有权直接吊销订户证书。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">13、订户在发现或怀疑由CFCA提供的认证服务造成订户的网上交易信息的泄漏和/或篡改时，应在3个月内向CFCA提出争议处理请求并通知有关各方。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    style=" color:#333333;; font-weight:bold">二、CFCA的服务、权利、义务、责任限制和免责</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >1、 CFCA依法制定《电子认证业务规则》（简称CPS），并公布于CFCA网站（www.cfca.com.cn），明确CFCA数字证书的功能、使用证书各方的权利、义务以及CFCA的责任范围，本协议的相关条款源自CPS。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >2、 CFCA为订户提供7X24小时热线支持服务（4008809888）。为保证我们的服务质量，CFCA设立了投诉电话（010-83519756），CFCA将在1个工作日内对订户的意见和建议做出响应。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >3、 在订户通过安全工具使用数字证书对交易信息进行加密和签名的条件下，CFCA将保证交易信息的保密性、完整性、抗抵赖性。如果发生纠纷，CFCA将依据不同情形承担下述义务：</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >①提供签发订户数字证书的CA证书；</span></p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >②提供订户数字证书在交易发生时，在或不在CFCA发布的数字证书废止列表内的证明；</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >③对数字证书、数字签名、时间戳的真实性、有效性进行技术确认。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">4、 有下列情形之一的，CFCA有权撤销所签发的数字证书：</span><span
   > </span></p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">①订户申请数字证书时，提供的资料不真实；</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">②订户未履行本协议约定的义务；</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">③订户书面申请撤销数字证书；</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">④证书的安全性不能得到保证；</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">⑤法律、行政法规规定的其他情况。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">5、 CFCA将对订户申请数字证书时提交的信息进行审核，提供证书生命周期內的相关服务，同时向相关方提供查询服务。CFCA及其注册机构均有义务保护订户隐私信息安全性。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">6、根据《电子签名法》的规定，如果订户依法使用CFCA提供的认证服务进行民事活动而遭受损失的，CFCA将给予相应赔偿，除非CFCA能够证明其提供的服务是按照《电子签名法》等相关法律法规和CFCA向主管部门备案的CPS实施的。以下损失不在赔偿之列：</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">①任何直接或间接的利润或收入损失、信誉或商誉损害、任何商机或契机损失、失去项目、以及失去或无法使用任何数据、无法使用任何设备、无法使用任何软件；</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">②由上述损失相应生成或附带引起的损失或损害。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">7、 以下损失CFCA将不承担责任：</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">①非因CFCA的行为而导致的损失；</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">②因不可抗力而导致的损失，如罢工、战争、灾害、恶意代码病毒等。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
    style=" color:#333333;; font-weight:bold">8、 CFCA对企业订户申请的数字证书的赔偿上限为人民币伍拾万元整，即￥500,000.00元；对个人订户申请的数字证书的赔偿上限为人民币贰万元整，即￥20,000.00元。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    style=" color:#333333;; font-weight:bold">三、其他</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >1、 本协议中涉及“原RA”的条款若因原RA合并或撤销，即原RA不存在，则业务的受理与开展应到另行指定的RA进行。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >2、 建议订户经常浏览CFCA网站（www.cfca.com.cn），以便及时了解CFCA有关证书管理、CPS和本协议变更公示等方面的信息。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >3、 CFCA有权对本协议进行修订，修订后的本协议将公布于CFCA网站（www.cfca.com.cn）。如订户在本协议公布修订的1个月后继续使用CFCA提供的数字证书服务，即表明同意接受此等修订的约束。如果订户不予接受本协议中的约束，订户可以在上述期限内单方以书面形式向RA申请停止使用证书。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >4、 因依据CFCA的电子认证服务而发生的争议，双方应当先通过友好协商的方式解决（必要时CFCA将召集业内专家组成专家小组，详细流程参见CPS的相关条款），双方不能达成一致意见的，任何一方可以向北京仲裁委员会申请仲裁，按照该会的规则在（北京）进行仲裁，仲裁裁决是终局的，对任何一方均有约束力。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span>&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >&#xa0;</span><span
   >5、 本协议在订户完成CFCA数字证书的下载或初次使用时即为生效。</span>
  </p>
  <p style="line-height:18pt; margin:127.5pt 0pt 11.3pt; text-align:right"><span
   >中金金融认证中心有限公司</span></p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt; text-align:right"><span
   >(中国金融认证中心)</span></p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt; text-align:right"><span
   >2015年8月4日</span></p>
  <p style="font-size:10.5pt; line-height:115%; margin:0pt 0pt 10pt; orphans:0; text-align:justify; widows:0"><span
    style="font-family:Calibri;">&#xa0;</span></p></div>`
}

// 安心签平台服务协议
export function getAnxinAgreement() {
  return `<div style="color:#2c2c2c">
  <p style="line-height:18pt; margin:3.8pt 0pt 11.3pt; text-align:center"><span
    style="font-size:13.5pt; font-weight:bold">安心签平台服务协议</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >安心签平台服务（以下简称“本服务”）是由中国金融认证中心全资子公司北京中金国信科技有限公司（以下简称“本公司”）向其注册用户提供的一种第三方电子缔约服务。本公司提供的安心签平台服务包括但不限于通过您持有的数字证书在安心签平台上对各类数据电文或电子缔约文件等进行电子签名和验签、对签名后的数据电文或电子缔约文件进行存储、提取和管理。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >本公司采用的电子缔约技术符合中国法律及其相关法规，其形成的数据电文或电子缔约文件符合中国法律规定，与纸质文件具有同样的法律效力。采用本公司的安心签平台服务可以极大的提升个人事务和企业整体管理水平，实现缔约的线上签署、存储、提取、管理等功能。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >一、接受</span></p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
    style=" font-weight:bold">1.1本协议已对与您的权益有或可能具有重大关系的条款，及对本公司具有或可能具有免责或限制责任的条款予以标注。在您接受本服务之前，请确认您已充分阅读、理解并接受本协议的全部内容，一旦您使用本服务，即表示您同意遵循本协议之所有约定。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
    style=" font-weight:bold">1.2您同意，本公司有权随时对本协议内容进行单方面的变更，并在本网站予以公布，无需另行单独通知您；若您在本协议内容变更后继续使用本服务，表示您已充分阅读、理解并接受修改后的协议内容，也将遵循修改后的协议内容使用本服务；若您不同意修改后的协议内容，您应停止使用本服务。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >1.3 您同意接受本协议并使用此服务时，您是具有法律规定的完全民事权利能力和民事行为能力，能够独立承担民事责任的自然人（中华人民共和国境内（香港、澳门除外）的用户应年满18周岁），或者是在中国大陆地区合法开展经营活动或其他业务的法人或其他组织；本协议内容不受您所属国家或地区法律的排斥。不具备前述条件的，您应立即终止注册或停止使用本服务。您在使用本服务时，应自行判断对方是否是完全民事行为能力人并自行决定是否与对方进行数据电文或电子缔约文件的签署，且您应自行承担与此相关的所有风险。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >1.4您同意您在本公司域名为www.anxinsign.com上进行的所有电子缔约行为，您不可撤销的授权由本公司按照公布的安心签服务流程规则进行处理。您同意本公司一旦认为有必要修改安心签服务流程，无须单独另行通知您。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >1.5您知悉并承认凡是在您账户下，数据电文或电子缔约文件签署各方已经完成电子签名的电子缔约文件，均具备法律效力。您将按照电子缔约文件内容，依法履行电子缔约文件相关义务，行使电子缔约文件相关权利。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
    style=" font-weight:bold">1.6 您知悉并同意本公司是第三方电子缔约服务提供商，并不介入任何您和您的缔约对象之间的业务行为。本公司不能控制缔约对象履行其在数据电文或电子缔约文件下的各项义务的能力。本公司不能也不会控制缔约各方履行协议义务。本公司对您与您的缔约对象之间就缔约的内容和缔约执行情况等产生的任何纠纷不承担任何法律责任或者连带法律责任。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >1.7您知悉并同意本公司对本服务具备完全自主的知识产权，对安心签平台或其相关内容采用任何复制或者反向工程手段皆是侵犯我公司权益的行为，我公司对此保留一切法律追诉的权利。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
    style=" font-weight:bold">1.8您知悉并同意在使用本服务的过程中，本公司或者电子缔约关联方可能通过主动或者被动的方式获知相关信息。您同意本公司将按照公布的隐私政策声明进行处理。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
    style=" font-weight:bold">1.9您知悉并同意您在注册时填写的信息是您申请数字证书的重要依据，并充分保证该信息的真实性、准确性、完整性。一旦您勾选了同意《CFCA数字证书服务协议》的内容，即表示您认可遵守本公司公布的《CFCA数字证书服务协议》中规定的相关义务。在您提出申请数字证书之后，本公司将根据您的注册信息制作您的数字证书。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
    style=" font-weight:bold">1.10您知悉并同意您所专有并控制的数字证书是在安心签平台签署电子缔约文件的重要工具，且您认可您有义务对您所专有并控制的数字证书及安心签账户绑定的手机和邮箱进行妥善保管，牢记该数字证书的PIN码并承担保密义务，当您收到安心签账户绑定的手机和邮箱收到授权签署验证码时，确保签署请求由本人发起，且对验证码承担保密义务。同时，您确认已了解数字证书或安心签账户绑定的手机和邮箱的遗失可能对您或您的缔约对象带来不利的后果。因此，无论任何原因可能或已经危及您的数字证书安全，您应该立即通过安心签平台公布的联系方式和本公司取得联系。因数字证书未被您妥善保管或数字证书安全受到威胁而未被您及时告知本公司所引起的不利后果与本公司无关。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
    style=" font-weight:bold">1.11您知悉并同意在您在使用本服务时，本公司将免费为您所产生的数据电文或电子缔约文件存储5年，存储的起始时间为创建数据电文或电子缔约文件的时间。期满后，本公司无必须义务为您或您的关联方永久保存各类数据电文或电子缔约文件。任何您或您的关联方未及时按照服务提示自行保存相关数据电文或电子缔约文件，本公司不承担您或者您的关联方因此而造成的任何损失。您可以根据自身需要，向本公司申请额外存储期限或申请提供超过存储期限合同找回服务。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >1.12本协议内容包括协议正文及所有安心签平台已经发布的各类规则、公告或通知。所有规则为协议不可分割的一部分，与协议正文具有同等法律效力。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >1.13您知悉并同意互联网支付可能对您的利益存在风险，您同意完全承担可能造成的一切后果。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >二、服务对象</span></p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >2.1以安心签官方网站www.anxinsign.com及其所属网页内容为准。 </span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >2.2本协议针对的对象是所有安心签平台的注册用户。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >三、费用 </span></p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >3.1本服务为付费服务，具体服务类型和价格，您可登陆安心签官方网站及其所属页面内容或咨询客服人员了解价格详情。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >3.2您根据安心签平台付款要求向本公司支付所申请服务的费用后，方可享受相应服务内容。 </span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >3.3本公司有权根据实际情况单方调整服务价格标准和支付条件。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >3.4您若已开通相应的平台服务，在该服务开通至期满续约之前，不受在此期间服务价格调整的影响。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >3.5您若在服务期满前请求终止服务，服务费用不予退还。 </span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >四、服务起止日期</span></p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >安心签平台服务起始日期为自本公司收到客户资料信息并审核通过的次日零点起计算（以北京时间为准）；本服务终止日期根据用户约定的服务期限而定。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >五、用户的权利和义务</span></p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >5.1用户在使用安心签平台提供的相关服务时必须保证遵守中国有关法律法规的规定，不得利用安心签平台进行任何非法活动，遵守所有与使用安心签平台有关的协议、规定、程序和惯例。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >5.2用户需对其在安心签平台上的所有行为及注册时向本公司提供的任何形式的材料、信息的合法性、真实性、准确性、完整性以及由此产生的所有问题承担责任。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >5.3用户如因违反本协议规定的义务给本公司造成损失，必须负责相应赔偿。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >六、安心签的权利和义务</span></p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >6.1我公司将对您在注册时提交的任何形式的材料、信息，包括但不限于《安心签开户及管理授权书》、用户身份证明文件等进行严格审核，但并不对文件的真实性负责，不承担由此产生的法律责任。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >6.2对于因不可抗力造成的服务中断或其他缺陷（包括但不限于自然灾害、社会事件以及因网站所具有的特殊性质而产生的包括黑客攻击、电信部门技术调整导致的影响、政府管制而造成的暂时性关闭在内的任何影响网络正常运营的因素），本公司不承担任何责任，但将尽力减少因此而给用户造成的损失和影响。 如因本公司原因，造成用户服务的不正常中断，用户有权向安心签平台申请顺延被中断的服务时间。本公司不承担用户的其他任何损失。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >6.3用户发生合同纠纷时，本公司将配合司法机关进行相关数据电文或电子缔约文件的鉴证鉴权。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >七、服务终止</span></p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >7.1本公司有权在用户违反了本协议的任一条款的情形下拒绝用户的订购或终止、取消用户服务。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >7.2本公司有权根据本协议第一项、第四项、第五项相关说明终止服务。 </span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >八、责任声明</span></p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >8.1本公司对其网站上提供的信息及服务之有效性、准确性、正确性、可靠性、质量、稳定、完整和及时性等均不作承诺和保证。用户理解并接受任何信息资料的传输取决于用户自己并由其承担系统受损或资料丢失的所有风险和责任。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >8.2用户就使用安心签平台的第三方电子缔约服务与本公司签订了其他协议，若本协议内容与其他协议有冲突的，以其他协议内容为主。本协议任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >8.3鉴于电子缔约的特殊形式，根据我国《电子签名法》规定，本服务不适用于涉及以下内容的数据电文或电子缔约文件：（a）涉及婚姻、收养、继承等人身关系的；（b）涉及土地、房屋等不动产权益转让的；（c）涉及停止供水、供热、供气、供电等公用事业服务的；（d）法律、行政法规规定的不适用电子文书的其他情形。本公司不因您签署涉及上述内容的数据电文或电子缔约文件而导致的效力瑕疵而承担任何责任。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >九、争议的解决</span></p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >&#xa0;</span><span
  >本协议之效力、解释、变更、执行与争议解决均适用中华人民共和国法律，没有相关法律规定的，参照通用国际商业惯例和（或）行业惯例。因本协议产生之争议，应尽量友好协商解决。如协商不成，均应依照中华人民共和国法律予以处理。</span>
  </p>
  <p style="font-size:10.5pt; line-height:115%; margin:0pt 0pt 10pt; orphans:0; text-align:justify; widows:0"><span
    style="font-family:Calibri; font-size:10.5pt">&#xa0;</span></p>
</div>`
}

// 隐私声明
export function getPrivacyAgreement() {
  return `<div style="color:#2c2c2c">
  <p style="line-height:18pt; margin:2.5pt 0pt 11.3pt; text-align:center"><span
  style="font-size:13.5pt; font-weight:bold">隐私声明</span></p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >欢迎访问安心签平台！对于您的隐私，我们绝对尊重并予以保护，本隐私声明将告诉您，安心签平台（所涉域名为：www.anxinsign.com）收集资料与运用的方式以及我们的隐私保护政策。本站的隐私声明正在不断改进中，随着我站服务范围的扩大，我们会随时更新我们的隐私声明。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    > 在同意安心签平台服务协议（以下简称“协议”）之时，您已经同意我们按照本隐私声明来使用和披露您的个人信息。本隐私声明的全部条款属于协议的一部份。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    style="color:#333333; font-size:10.5pt; font-weight:bold">未成年人的特别注意事项</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    > 如果您未满18周岁，您无权使用本公司服务，因此我们希望您不要向我们提供任何个人信息。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    style="color:#333333; font-size:10.5pt; font-weight:bold">数字证书、用户名和密码</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    > 当您注册成用户时，我们要求您选择一个用户名和密码。您可以通过（a）使用您专有的数字证书和PIN码（b）您的用户名和密码，两种方式登录平台。如果您丢失了数字证书或泄漏了PIN码/密码，您可能丢失了您的个人识别信息，并且可能出现对您不利的后果。因此，无论任何原因危及您的数字证书安全或PIN/密码安全，您应该立即通过安心签平台公布的联系方式和我们取得联系。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    style="color:#333333; font-size:10.5pt; font-weight:bold">注册信息</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    > 当您在注册为用户时，我们要求您填写注册信息。如果您是个人用户，注册信息包括您的真实姓名、证件类型、证件号码、电话号码、地址和电子邮件地址；如果您是企业用户，注册信息包括公司名称、证件类型、证件号、公司电话、公司地址、公司邮箱、法人代表真实姓名、经办人真实姓名、经办人的证件类型、经办人的证件号码、经办人的电话号码、经办人的地址和经办人的电子邮件地址。另外，您还被要求提供法人代表对经办人的注册和运营安心签平台账户的授权书原件。我们通过（a）比较您的注册信息和您专有的数字证书的信息来判断您的真实身份，作为是否为您提供服务的依据；（b）比较您的注册信息和您提交的相关证件复印件/原件来判断是否给您颁发有效的数字证书，并作为是否为您提供服务的依据；（c）在获得您本人同意的情况下，委托有合法资质的第三方机构对您的身份信息进行核实，作为是否为您提供服务的依据。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    style="color:#333333; font-size:10.5pt; font-weight:bold">银行账号</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    > 我们的一些服务需要付费，我们会合理获取您的银行账号信息。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    style="color:#333333; font-size:10.5pt; font-weight:bold">您的用户行为</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    > 为了提供并优化您需要的服务，我们会根据合理性、必要性原则收集您使用服务的相关信息，这类信息包括：在您使用安心签服务访问网页时，自动接收并记录您的浏览器和计算机上的信息，包括您的IP地址、浏览器的类型、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；如您下载或使用安心签客户端软件，或访问移动网页使用安心签服务时，我们可能会读取与您位置和移动设备相关的信息，包括设备型号、设备识别码 、操作系统、分辨率、电信运营商等。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    > 除上述信息外，我们还可能为了提供服务及改进服务质量的合理需要而收集您的其他信息，包括您与我们的客户服务团队联系时您提供的相关信息，您参与问卷调查时向我们发送的问卷答复信息。与此同时，为提高您使用安心签提供的服务的安全性，更准确地预防钓鱼网站欺诈和木马病毒，我们可能会通过了解一些您的网络使用习惯等手段来判断您账户的风险。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    > 我们保证将采取严格的保密措施保护您的信息不被泄露，并仅将该信息用于上述目的。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    style="color:#333333; font-size:10.5pt; font-weight:bold">Cookie的使用</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    > cookies是少量的数据，在您未拒绝接受cookies的情况下，cookies将被发送到您的浏览器，并储存在您的计算机硬盘中。我们使用cookies储存您访问我们平台的相关数据，在您访问或再次访问我们的平台时，我们能识别您的身份，并通过分析数据为您提供更好更多的服务。 </span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >您有权选择接受或拒绝接受cookies。您可以通过修改浏览器的设置以拒绝接受cookies，但是我们需要提醒您，因为您拒绝接受cookies，您可能无法使用依赖于cookies的我们网站的部分功能。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    style="color:#333333; font-size:10.5pt; font-weight:bold">信息的披露和使用</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >我们不会向任何无关第三方提供、出售、出租、分享和交易用户信息，但为方便您使用安心签平台服务及安心签平台关联公司或其他组织的服务（以下称“其他服务”），您同意并授权安心签平台将您的用户信息传递给您同时接受其他服务的安心签平台关联公司或其他组织，或从为您提供其他服务的安心签平台关联公司或其他组织获取您的用户信息，法律禁止的除外。如您不同意该等信息共享，您可向本公司发送书面声明，本公司将尊重您的意愿及选择。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >您同意我们可批露或使用您及（或）您的公司的用户信息以用于识别和（或）确认您的身份，或解决争议，或有助于确保网站安全、限制欺诈、非法或其他刑事犯罪活动，以执行我们的服务协议。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >您同意我们可批露或使用您及（或）您的公司的用户信息以保护您的生命、财产之安全或为防止严重侵害他人之合法权益或为公共利益之需要。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >您同意我们可批露或使用您及（或）您的公司的用户信息以改进我们的服务，并使我们的服务更能符合您的要求，从而使您在使用我们服务时得到更好的用户体验。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >您同意我们利用您及（或）您的公司的用户信息与您联络，并向您提供您感兴趣的信息，如：服务到期提醒。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >当我们被法律强制或依照政府或依权利人因识别涉嫌侵权行为人的要求而提供您的信息时，我们将善意地披露您的资料。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    style="color:#333333; font-size:10.5pt; font-weight:bold">信息的存储和交换</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >所收集的用户信息和资料将加密保存在安心签平台及（或）其关联公司的服务器上。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    style="color:#333333; font-size:10.5pt; font-weight:bold">外部链接</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >平台可能含有到其他网站的链接。我们对那些网站的隐私保护措施不负任何责任。我们可能在任何需要的时候增加商业伙伴或共用品牌的网站。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    style="color:#333333; font-size:10.5pt; font-weight:bold">安全</span></p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >我们平台有相应的安全措施来确保我们掌握的信息不丢失，不被滥用和篡改。这些安全措施包括向其它服务器备份数据和对用户信息加密。尽管我们有这些安全措施，但请注意，在因特网上不存在“绝对安全的安全措施”。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    style="color:#333333; font-size:10.5pt; font-weight:bold">修改您的资料</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >您可以在安心签平台上修改或者更新您的登录密码、电话号码、地址和电子邮件地址（在成功登录之后）。若您为公司用户，变更法人代表、经办人时，我们需要您重新提交相应的证明文件复印件和授权书原件。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    style="color:#333333; font-size:10.5pt; font-weight:bold">联系我们</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >如果您对本隐私声明或安心签平台的隐私保护措施以及您在使用时有任何意见和建议，欢迎通过安心签平台公布的联系方式和我们联系。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    style="color:#333333; font-size:10.5pt; font-weight:bold">法律声明</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >若要访问和使用安心签平台服务，您必须不加修改地完全接受本协议中所包含的条款、条件和安心签平台即时刊登的通告，并且遵守有关互联网及/或本平台的相关法律、规定与规则。一旦您使用安心签平台服务，即表示您同意并接受了所有该等条款、条件及通告。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    style="color:#333333; font-size:10.5pt; font-weight:bold">版权和商标</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >安心签平台所有的版权权利均在全世界范围内受到法律保护，除非有其他的标注或在此等条款和规则中被允许使用，本网站上可阅读和可见的所有资料都受到知识产权法的保护。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >安心签平台拥有的所有版权和商标未经书面同意，不得以任何非法手段侵犯。对于已经授权的版权或者商标用途，只能使用于授权时指定的范围。任何人不得利用工作之便获取版权和商标。</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    style="color:#333333; font-size:10.5pt; font-weight:bold">保密条款</span>
  </p>
  <p style="line-height:18pt; margin:33.8pt 0pt 11.3pt"><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >&#xa0;</span><span
    >任何人均需严格遵守安全保密条款，保护各方商业秘密及相关权益，包括但不限于产品知识产权、策划方案、客户资料、协议合同、技术文档、程序文件、程序控件或源代码、各种账户密码。任何人不得泄漏他人的任何商业秘密，同时不得利用工作之便获取他人技术秘密。对于授权使用的技术，只能使用于授权时指定的范围，不得用于它途。</span>
  </p>
  <p style="font-size:10.5pt; line-height:115%; margin:0pt 0pt 10pt; orphans:0; text-align:justify; widows:0"><span
    style="font-family:Calibri; font-size:10.5pt">&#xa0;</span></p>
</div>`
}


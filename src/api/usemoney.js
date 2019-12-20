import request from '@/utils/request'

// 获取 用款列表数据
export function selectLoanApply(data) {
  return request({
    url: '/loan/selectLoanApply',
    method: 'post',
    data
  })
}

// 获取 用款列表数据
export function selectLoanApplyNoError(data) {
  return request({
    url: '/loan/selectLoanApply',
    method: 'post',
    data,
    isErrorShow: true
  })
}

// 获取 用款列表数据 已完成
export function selectCompletedLoan(data) {
  return request({
    url: '/loan/selectCompletedLoan',
    method: 'post',
    data
  })
}

// 获取 用款列表数据 已失效
export function selectAbortLoan(data) {
  return request({
    url: '/loan/selectAbortLoan',
    method: 'post',
    data
  })
}

// 下载
export function down(data) {
  return request({
    url: '/contract/down',
    method: 'post',
    data
  })
}

// 查看
export function view(data) {
  return request({
    url: '/contract/view',
    method: 'post',
    data
  })
}

// 借款信息确认
export function selectLoanApplyByApplyNum(data) {
  return request({
    url: '/loan/selectLoanApplyByApplyNum',
    method: 'post',
    data
  })
}

// 获取 借款相关合同信息
export function contract(data) {
  return request({
    url: '/loan/preview/contract',
    method: 'post',
    data
  })
}

// 确认、拒绝
export function confirm(data) {
  return request({
    url: '/loan/confirm',
    method: 'post',
    data
  })
}

// 发送短信
export function sendSms(data) {
  return request({
    url: '/loan/sendSms',
    method: 'post',
    data
  })
}

// 获取 借款人信息 合同信息
export function beforeConfirm(data) {
  return request({
    url: '/loan/preview-contract-msg/before-confirm',
    method: 'post',
    data
  })
}

// 还款计划、还款记录
export function selectRepaymentByApplyNum(data) {
  return request({
    url: '/repayment/selectRepaymentByApplyNum',
    method: 'post',
    data
  })
}
// 借款相关协议
export function selectAllContractByLoanApplyNum(data) {
  return request({
    url: '/repayment/selectAllContractByLoanApplyNum',
    method: 'post',
    data
  })
}

// 获取 用款列表数据 已完成 条件查询
export function selectCompletedLoanByStatement(data) {
  return request({
    url: '/loan/selectCompletedLoanByStatement',
    method: 'post',
    data
  })
}

// 还款记录
export function repaymentRecordList(data) {
  return request({
    url: '/repayment/repaymentRecordList',
    method: 'post',
    data
  })
}

// 借款 借贷辅助服务确认单
export function getAgreement() {
  /* eslint-disable */
  return `<div style="line-height:1.8;padding: 0 20px;"><p style="line-height:3; text-align:center;"><span
  style="font-size: 16px;font-weight: bold">借贷辅助服务确认单</span></p>
  <p style=" text-align:right;"><span
    style="">确认单编号【                 】</span></p>
  <p style=" text-align:right;"><span
   >&#xa0;</span></p>
  <p style=" text-align:justify;"><span
   >甲方：【     】</span></p>
  <p style=" text-align:justify;"><span
   >乙方：天津和智量化科技有限公司</span></p>
  <p style=" text-align:justify;"><span
   >&#xa0;</span></p>
  <p style=" margin:5pt 0pt; text-align:justify"><span
    style="font-weight:bold">【审慎阅读】甲方在点击同意本确认单之前，应当审慎阅读、充分理解各条款内容。如甲方对授权书有任何疑问，可向乙方客服咨询，咨询电话：【                】。</span>
  </p>
  <p style=" text-align:justify;"><span
   >&#xa0;</span></p>
  <p style=" text-align:justify; text-indent:21pt;">
    <span>鉴于甲乙双方签署了编号为【                】的《借贷辅助服务协议》，甲方通过乙方运营的【             】平台向资金出借方申请借款，现双方对甲方本次申请借款的情况以及双方履行《借贷辅助服务协议》项下各自权责所需信息进行确认如下：</span>
  </p>
  <ol type="1" style="margin:0pt; padding-left:0pt;">
    <li
      style="list-style-position:inside; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt;">
      <span>1. 甲方本次申请的借款信息如下：</span>
    </li>
  </ol>
  <p
    style=" margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt;">
    <span>(1)</span><span
    style="font:7.0pt 'Times New Roman'">&#xa0; </span><span
   >综合借贷成本：年化【       】%；</span></p>
  <p
    style=" margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt;">
    <span>(2)</span><span
    style="font:7.0pt 'Times New Roman'">&#xa0; </span><span>资金出借方：【               】；</span>
  </p>
  <p
    style=" margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt;">
    <span>(3)</span><span
    style="font:7.0pt 'Times New Roman'">&#xa0; </span><span>借款本金：人民币【            】元；</span>
  </p>
  <p
    style=" margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt;">
    <span>(4)</span><span
    style="font:7.0pt 'Times New Roman'">&#xa0; </span><span>借款期限：【 】；</span>
  </p>
  <p
    style=" margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt;">
    <span>(5)</span><span
    style="font:7.0pt 'Times New Roman'">&#xa0; </span><span
   >借款利率：年化【       】%；</span></p>
  <p
    style=" margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt;">
    <span>(6)</span><span
    style="font:7.0pt 'Times New Roman'">&#xa0; </span><span>还款方式：【              】。</span>
  </p>
  <ol start="2" type="1" style="margin:0pt; padding-left:0pt;">
    <li
      style="list-style-position:inside; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt;">
     <span>2. 影响甲方本次借款额度的授信机票应收账款来源情况如下：</span>
    </li>
  </ol>
  <table cellspacing="0" cellpadding="0" style="border-collapse:collapse; margin-left:0pt;margin: auto;width: 90%;">
    <tr>
      <td
        style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top">
        <p style=" text-align:justify;"><span
          style="vertical-align:baseline">应收账款来源</span></p></td>
      <td
        style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top">
        <p style=" text-align:justify;"><span
          style="vertical-align:baseline">所影响的借款额度</span></p></td>
      <td
        style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top">
        <p style=" text-align:justify;"><span
          style="vertical-align:baseline">占借款总额度的比例</span></p></td>
    </tr>
    <tr>
      <td
        style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top">
        <p style=" text-align:justify;"><span
          style="vertical-align:baseline">&#xa0;</span></p></td>
      <td
        style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top">
        <p style=" text-align:justify;"><span
          style="vertical-align:baseline">&#xa0;</span></p></td>
      <td
        style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top">
        <p style=" text-align:justify;"><span
          style="vertical-align:baseline">&#xa0;</span></p></td>
    </tr>
  </table>
  <ol start="3" type="1" style="margin:0pt; padding-left:0pt;">
    <li
      style="list-style-position:inside; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt;">
      <span>3. 甲方本次借款对应的《借贷辅助服务协议》项下共管账户信息如下：</span>
    </li>
  </ol>
  <p style=" margin:0pt 0pt 0pt 21pt; text-align:justify;"><span
   >账户名：</span><span>【     】</span>
  </p>
  <p style=" margin:0pt 0pt 0pt 21pt; text-align:justify;"><span
   >账  号：</span><span>【     】</span>
  </p>
  <p style=" margin:0pt 0pt 0pt 21pt; text-align:justify;"><span
   >开户行：</span><span>【     】</span>
  </p>
  <ol start="4" type="1" style="margin:0pt; padding-left:0pt;">
    <li
      style="list-style-position:inside; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt;">
      <span>4. 甲方本次借款对应的《借贷辅助服务协议》项下购票账户信息如下：</span>
    </li>
  </ol>
  <p style=" margin:0pt 0pt 0pt 21pt; text-align:justify;"><span
   >支付公司名称：易宝支付有限公司</span></p>
  <p style=" margin:0pt 0pt 0pt 21pt; text-align:justify;"><span
   >商户名称：</span><span
   >【 】</span></p>
  <p style=" margin:0pt 0pt 0pt 21pt; text-align:justify;"><span
   >商户账户编号：</span><span>【 】</span>
  </p>
  <ol start="5" type="1" style="margin:0pt; padding-left:0pt;">
    <li
      style="list-style-position:inside; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt;">
      <span>5. 甲方本次借款对应的《借贷辅助服务协议》扣款计划详见本确认单附表，乙方将按照该扣款计划及《借贷辅助服务协议》中约定的规则扣划甲方资金用于向资金出借方归还借款本金以及向资金出借方及乙方支付因本次借款而产生的各项息费。</span>
    </li>
    <li
      style="list-style-position:inside; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt;">
      <span>6. 甲方接受乙方提供的《借贷辅助服务协议》项下服务自资金出借方取得</span><span
     >本次借款后，需向乙方支付服务费，服务费=借款本金*综合借贷成本*借款使用时间（日）/360-借款本金*借款利率*借款使用时间（日）/360。</span>
    </li>
    <li
      style="list-style-position:inside; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt;">
      <span>7. 本确认单的签署仅为确认甲方本次申请借款的情况及针对本次借款甲乙双方履行《借贷辅助服务协议》项下权责所需的相关信息，并不表明甲方一定能够自资金出借方处获得借款。</span>
    </li>
    <li
      style="list-style-position:inside; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt;">
      <span>8. 本确认单作为《借贷辅助服务协议》不可分割的一部分，与《借贷辅助服务协议》具有同等法律效力，本确认单中未予明确的事宜适用《借贷辅助服务协议》中的相关约定。</span>
    </li>
  </ol>
  <p style=" text-align:justify;"><span
   >&#xa0;</span></p>
  <p style=" text-align:justify;"><span
    style="font-weight:bold">【特别提示】甲方通过点击确认按键的方式予以确认后，即表示甲方已充分阅读、理解并接受本确认单的全部内容，若甲方不接受本确认单中的任何内容，请切勿进行相应操作。</span>
  </p>
  <p style=" text-align:justify;"><span
    style="font-weight:bold">&#xa0;</span></p>
  <p style=" text-align:justify;"><span
    style="font-weight:bold">&#xa0;</span></p>
  <p style=" text-align:justify;"><span
    style="font-weight:bold">甲方（盖章）：           乙方（盖章）：</span></p>
  <p style=" text-align:justify;"><span
    style="font-weight:bold">&#xa0;</span></p>
  <p style=" text-align:justify;"><span
    style="font-weight:bold">&#xa0;</span></p>
  <p style=" text-align:justify;"><span
    style="font-weight:bold">本确认单签署时间为【     】年【    】月【    】日</span></p>
  <p style=" text-align:justify;"><span
    style="font-weight:bold">&#xa0;</span></p></div>
<div class="cnzz" style="display: none;">
</div>`
}

// 借款 保理融资申请单
export function getLoanApplyAgreement(val) {
  /* eslint-disable */
  return `<div style="color:#2C2C2C;padding: 0 20px;">
  <h2
  style="font-size:14pt; font-weight:normal; line-height:150%; margin:15.6pt 0pt; text-align:center; ">
  <span style=" font-size:14pt; font-weight:bold">保理融资申请单</span></h2>
  <h2
    style="font-size:14pt; font-weight:normal; line-height:150%; margin:15.6pt 0pt; text-align:center; ">
    <span style=" font-size:14pt; font-weight:bold">（编号：${val && val.contractNum || '          '} ） </span></h2>
  <h2
    style="font-size:12pt; font-weight:normal; line-height:150%; margin:15.6pt 0pt; text-align:justify; ">
    <span style=" font-size:12pt; font-weight:bold">致</span><span style=" font-size:12pt"><span style="display:inline-block;min-width: 300px;text-align: left;">${val && val.factoringParty || '          '} </span></span><span
    style=" font-size:12pt; font-weight:bold">（保理商）：</span></h2>
  <p style="font-size:12pt; line-height:150%; margin:15.6pt 0pt; text-align:justify; "><span
    style=" font-size:12pt; font-weight:bold">自</span><span style=" font-size:12pt"><span style="display:inline-block;min-width: 300px;text-align: left;">${val && val.financingParty || '          '} </span></span><span
    style=" font-size:12pt; font-weight:bold">（融资方）：</span></p>
  <h2
    style="font-size:12pt; font-weight:normal; line-height:150%; margin:15.6pt 0pt; text-align:justify; text-indent:21pt; ">
    <span style=" font-size:12pt">根据贵我双方签署的编号为</span><span style=" font-size:12pt"><span style="min-width: 150px;text-align: center"> ${val && val.factoringContractNum || '          '} </span></span><span
    style=" font-size:12pt">《有追索权国内商业保理合同》，现向保理商提交《保理融资申请单》，在保理融资授信额度范围内，申请保理融资款：</span></h2>
  <div style="text-align:center">
    <table cellspacing="0" cellpadding="0" style="border-collapse:collapse; margin:0 auto; width:100%">
      <tr style="height:42.5pt">
        <td
          style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:101.15pt">
          <h2
            style="font-size:12pt; font-weight:normal; line-height:115%; margin:0pt 0pt 10pt; text-align:justify; ">
            <span style=" font-size:12pt; font-weight:bold">保理融资金额</span></h2></td>
        <td colspan="3"
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:303.35pt">
          <h2
            style="font-size:12pt; font-weight:normal; line-height:115%; margin:0pt 0pt 10pt; text-align:justify; ">
            <span style=" font-size:12pt">人民币</span><span style=" font-size:12pt"><span style="min-width: 100px;text-align: center"> ${val && val.loanAmount || '          '} </span>元</span>
          </h2></td>
      </tr>
      <tr style="height:42.5pt">
        <td
          style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:101.15pt">
          <h2
            style="font-size:12pt; font-weight:normal; line-height:115%; margin:7.8pt 0pt; text-align:justify; ">
            <span style=" font-size:12pt; font-weight:bold">保理融资款用途</span></h2></td>
        <td colspan="3"
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:303.35pt">
          <h2
            style="font-size:12pt; font-weight:normal; line-height:115%; margin:7.8pt 0pt; text-align:justify; ">
            <span style=" font-size:12pt">限定用途为</span><span
            style=" font-size:12pt">购买机票</span></h2>
        </td>
      </tr>
      <tr style="height:42.5pt">
        <td
          style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:101.15pt">
          <h2
            style="font-size:12pt; font-weight:normal; line-height:115%; margin:7.8pt 0pt; text-align:justify; ">
            <span style=" font-size:12pt; font-weight:bold">保理手续费</span></h2></td>
        <td colspan="3"
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:303.35pt">
          <h2
            style="font-size:12pt; font-weight:normal; line-height:115%; margin:7.8pt 0pt; text-align:justify; ">
            <span style=" font-size:12pt">无</span></h2></td>
      </tr>
      <tr style="height:42.5pt">
        <td
          style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:101.15pt">
          <h2
            style="font-size:12pt; font-weight:normal; line-height:115%; margin:7.8pt 0pt; text-align:justify; ">
            <span style=" font-size:12pt; font-weight:bold">保理融资利率</span></h2></td>
        <td colspan="3"
          style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:133.8pt">
          <h2 style="font-size:12pt; font-weight:normal; line-height:115%; margin:7.8pt 0pt; text-align:justify; ">
            <span style=" font-size:12pt">年化<span style="min-width: 60px;text-align: center"> ${val && val.interestRate || '          '} </span></span><span
            style=" font-size:12pt">%</span>
          </h2>
        </td>
      </tr>
      <tr style="height:42.1pt">
        <td
          style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:101.15pt">
          <h2
            style="font-size:12pt; font-weight:normal; line-height:115%; margin:7.8pt 0pt; text-align:justify; ">
            <span style=" font-size:12pt; font-weight:bold">保理融资期限</span></h2></td>
        <td colspan="3"
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:303.35pt">
          <h2
            style="font-size:12pt; font-weight:normal; line-height:115%; margin:7.8pt 0pt; text-align:justify; ">
            <span style=" font-size:12pt;"><span style="min-width: 60px;text-align: center"> ${val && val.loanPeriod || '          '} </span></span></h2></td>
      </tr>
      <tr style="height:42.5pt">
        <td
          style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:101.15pt">
          <h2
            style="font-size:12pt; font-weight:normal; line-height:115%; margin:7.8pt 0pt; text-align:justify; ">
            <span style=" font-size:12pt; font-weight:bold">保理融资还款及相关费用支付方式</span></h2></td>
        <td colspan="3"
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:303.35pt">
          <p
            style="font-size:12pt; line-height:115%; margin:2.5pt 0pt; text-align:justify; text-indent:21pt; ">
            <span style=" font-size:12pt">我方到期一次性支付，全部保理手续费、利息与本期保理融资款本金一并结清。提前还款的，按照实际用款天数计收利息。</span></p></td>
      </tr>
      <tr style="height:42.5pt">
        <td
          style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:101.15pt">
          <h2
            style="font-size:12pt; font-weight:normal; line-height:115%; margin:7.8pt 0pt; text-align:justify; ">
            <span style=" font-size:12pt; font-weight:bold">融资方收款账户</span></h2></td>
        <td colspan="3"
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:303.35pt">
          <p
            style="font-size:12pt; line-height:115%; margin:2.5pt 0pt; text-align:justify; text-indent:21pt; ">
            <span style=" font-size:12pt">账户所在机构：${val && val.receiveAccountBank || '          '}</span></p>
          <p
            style="font-size:12pt; line-height:115%; margin:2.5pt 0pt; text-align:justify; text-indent:21pt; ">
            <span style=" font-size:12pt">账户持有人：${val && val.receiveAccountName || '          '}</span></p>
          <p
            style="font-size:12pt; line-height:115%; margin:2.5pt 0pt; text-align:justify; text-indent:21pt; ">
            <span style=" font-size:12pt">账户编号：${val && val.receiveAccountNo || '          '}</span></p></td>
      </tr>
      <tr style="height:42.5pt">
        <td
          style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:101.15pt">
          <h2
            style="font-size:12pt; font-weight:normal; line-height:115%; margin:7.8pt 0pt; text-align:justify; ">
            <span style=" font-size:12pt; font-weight:bold">保理融资还款账户</span></h2></td>
        <td colspan="3"
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:303.35pt">
          <p
            style="font-size:12pt; line-height:115%; margin:2.5pt 0pt; text-align:justify; text-indent:21pt; ">
            <span style=" font-size:12pt">账户所在机构：${val && val.repaymentAccountBank || '          '}</span></p>
          <p
            style="font-size:12pt; line-height:115%; margin:2.5pt 0pt; text-align:justify; text-indent:21pt; ">
            <span style=" font-size:12pt">账户持有人：${val && val.repaymentAccountName || '          '}</span></p>
          <p
            style="font-size:12pt; line-height:115%; margin:2.5pt 0pt; text-align:justify; text-indent:21pt; ">
            <span style=" font-size:12pt">账户编号：${val && val.repaymentAccountNo || '          '}</span></p></td>
      </tr>
      <tr style="height:42.5pt">
        <td
          style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:101.15pt">
          <h2
            style="font-size:12pt; font-weight:normal; line-height:115%; margin:7.8pt 0pt; text-align:justify; ">
            <span style=" font-size:12pt; font-weight:bold">其他条件：</span></h2></td>
        <td colspan="3"
            style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle; width:303.35pt">
          <h2
            style="font-size:12pt; font-weight:normal; line-height:115%; margin:7.8pt 0pt; text-align:justify; ">
            <span style=" font-size:12pt">无</span></h2></td>
      </tr>
      <tr style="height:0pt">
        <td style="width:111.95pt; border:none"></td>
        <td style="width:144.6pt; border:none"></td>
        <td style="width:66.55pt; border:none"></td>
        <td style="width:103pt; border:none"></td>
      </tr>
    </table>
  </div>
  <p style="font-size:12pt; line-height:150%; margin:0pt 0pt 10pt; text-align:justify; "><span
    style=" font-size:12pt">&#xa0;</span></p>
  <h2
    style="font-size:12pt; font-weight:normal; line-height:150%; margin:15.6pt 0pt; text-align:justify; text-indent:21pt; ">
    <span style=" font-size:12pt">1.除非本《保理融资申请单》中另有释义，《有追索权国内商业保理合同》中定义的词语，在本《保理融资申请单》中具有同样的含义。</span></h2>
  <h2
    style="font-size:12pt; font-weight:normal; line-height:150%; margin:15.6pt 0pt; text-align:justify; text-indent:21pt; ">
    <span style=" font-size:12pt">2.</span>
    <span style=" font-size:12pt; font-weight:bold">我方保证在本次保理融资期间，“有效应收账款余额*保理融资比例≥保理融资余款”；如贵司验证发现应收账款池的应收账款不符合贵方要求的，贵司有权行使《有追索权国内商业保理合同》中约定的一项或多项权措施，包括但不限于提前收回融资款项。</span>
  </h2>
  <h2
    style="font-size:12pt; font-weight:normal; line-height:150%; margin:15.6pt 0pt; text-align:justify; text-indent:21pt; ">
    <span style=" font-size:12pt">3.</span><span
    style=" font-size:12pt">我方承诺按照与贵司签署的《有追索权国内商业保理合同》中的约定及本申请书中所列条件和承诺严格履行自身义务并承担相应责任。</span></h2>
  <p style="font-size:12pt; line-height:150%; margin:15.6pt 0pt; text-align:right; "><span
    style=" font-size:12pt; font-weight:bold">申请人（融资方）：${val && val.financingParty || '          '}</span></p>
  <p style="font-size:12pt; line-height:150%; margin:15.6pt 0pt; text-align:right; "><span
    style=" font-size:12pt">&#xa0;</span></p>
  <p style="font-size:12pt; line-height:150%; margin:0pt 0pt 10pt; text-align:right; "><span
    style=" font-size:12pt">签署日期：${val && val.signDate || '          '}</span></p>
  <p style="font-size:12pt; line-height:150%; margin:0pt 0pt 10pt; "><span
    style=" font-size:12pt">&#xa0;</span></p>
</div>`
}

// 借款 融资辅助服务确认单
export function getServiceAgreement(val, source, plan) {
  /* eslint-disable */
  let loanSourceList = '',deductionList = '';
  let sourceLength = source.length >=5 ? source.length : 5 ;

  for (let i =0;i<sourceLength;i++) {
      loanSourceList += `<tr>
      <td style="line-height: 200%;border-bottom-style:solid; height: 27px;border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top">
        ${source[i] && source[i].source || ''}
      </td>
      <td style="line-height: 200%;height: 27px;border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top">
        ${source[i] && source[i].quota || ''}
        </td>
      <td style="line-height: 200%;height: 27px;border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top">
        ${source[i] && source[i].percentage || ''}
        </td>
    </tr>`
  }

  for (let i =0;i<plan.length;i++) {
    if (plan[i]) {
      deductionList += `<tr>
      <td style="line-height: 200%;border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top">
        ${plan[i].time || ''}
      </td>
      <td style="line-height: 200%;border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top">
        ${plan[i].money || ''}
        </td>
    </tr>`
    }
  }

  return `<div style="color:#2C2C2C;margin-top: 20px;padding: 0 20px;">
  <p style="line-height:2.5; margin:0pt; text-align:center; "><span
  style=" font-size:14pt;font-weight: bold;">融资辅助服务确认单</span></p>
  <p style="line-height:200%; margin:0pt; text-align:right; margin-top: 15px;"><span
    style=" font-size:12pt">确认单编号</span><span
    style=" font-size:12pt;min-width: 200px;text-align: center">：${val && val["1"] || '          '} </span></p>
  <p style="line-height:200%; margin:0pt; text-align:right; "><span
    style=" font-size:12pt">&#xa0;</span></p>
  <p style="line-height:200%; margin:0pt; text-align:justify; "><span
    style=" font-size:12pt">甲方：<span style="min-width: 200px;">${val && val["2"] || '          '}</span></span></p>
  <p style="line-height:200%; margin:0pt; text-align:justify; "><span
    style=" font-size:12pt">乙方：天津和智量化科技有限公司</span></p>
  <p style="line-height:200%; margin:0pt; text-align:justify; "><span
    style=" font-size:12pt">&#xa0;</span></p>
  <p style="line-height:16pt; margin:0pt"><span style=" font-weight:bold">【审慎阅读】甲方在点击同意本确认单之前，应当审慎阅读、充分理解各条款内容。如甲方对授权书有任何疑问，可向乙方客服咨询，咨询电话：</span><span
    style="font-family:'Helvetica Neue'; font-size:11pt; font-weight:normal">010-52533532-</span><span
    style="font-family:'Helvetica Neue'; font-size:11pt; font-weight:normal">72。</span></p>
  <p style="line-height:200%; margin:0pt; text-align:justify; "><span
    style=" font-size:12pt">&#xa0;</span></p>
  <p style="line-height:200%; margin:0pt"><span style=" font-size:12pt">鉴于甲乙双方签署了编号为  <span style="min-width: 100px;text-align: center"> ${val && val["3"] || '          '}</span></span><span style=" font-size:12pt">  的《融资辅助服务协议》，甲方通过乙方运营的</span><span
    style=" font-size:12pt">【</span><span style=" font-size:12pt">和智商服</span><span
    style=" font-size:12pt">】</span><span style=" font-size:12pt">平台向资金方申请融资，现双方对甲方本次申请融资的情况以及双方履行《融资辅助服务协议》项下各自权责所需信息进行确认如下：</span>
  </p>
  <ol type="1" style="margin:0pt; padding-left:0pt;list-style-type:decimal;">
    <li
      style=" line-height:200%; list-style-position:inside; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt; ">
      <span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0; </span><span style=" font-size:12pt">甲方本次申请的融资信息如下：</span>
    </li>
  </ol>
  <p
    style="line-height:200%; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt; ">
    <span style=" font-size:12pt">(1)</span><span
    style="font:7.0pt 'Times New Roman'">&#xa0; </span><span
    style=" font-size:12pt">综合融资成本：年化</span><span style=" font-size:12pt;min-width: 100px;">${val && val["4"] || '          '}</span>
  </p>
  <p
    style="line-height:200%; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt; ">
    <span style=" font-size:12pt">(2)</span><span
    style="font:7.0pt 'Times New Roman'">&#xa0; </span><span style=" font-size:12pt">资金提供方：<span style="min-width: 150px;">${val && val["5"] || '          '}</span></span></p>
  <p
    style="line-height:200%; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt; ">
    <span style=" font-size:12pt">(3)</span><span
    style="font:7.0pt 'Times New Roman'">&#xa0; </span><span style=" font-size:12pt">融资本金：人民币 <span style="min-width: 100px;">${val && val["6"] || '          '}</span></span></p>
  <p
    style="line-height:200%; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt; ">
    <span style=" font-size:12pt">(4)</span><span
    style="font:7.0pt 'Times New Roman'">&#xa0; </span><span style=" font-size:12pt">融资期限：<span style="min-width: 100px;">${val && val["7"] || '          '}</span></span></p>
  <p
    style="line-height:200%; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt; ">
    <span style=" font-size:12pt">(5)</span><span
    style="font:7.0pt 'Times New Roman'">&#xa0; </span><span style=" font-size:12pt">融资利率：年化 <span style="min-width: 100px;">${val && val["8"] || '          '}</span></span></p>
  <p
    style="line-height:200%; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt; ">
    <span style=" font-size:12pt">(6)</span><span
    style="font:7.0pt 'Times New Roman'">&#xa0; </span><span style=" font-size:12pt">还款方式：<span style="min-width: 180px;">${val && val["9"] || '          '}</span></span></p>
  <ol start="2" type="1" style="margin:0pt; padding-left:0pt;list-style-type:decimal;">
    <li
      style=" line-height:200%; list-style-position:inside; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt; ">
      <span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0; </span><span style=" font-size:12pt">影响甲方本次融资额度的应收账款来源情况如下：</span>
    </li>
  </ol>
  <table cellspacing="0" cellpadding="0" style="border-collapse:collapse; margin-left:0pt;width: 100%">
    <tr>
      <td
        style="border-bottom-style:solid;width: 45%; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top">
        <p style="line-height:200%; margin:0pt; text-align:justify; "><span
          style="">应收账款来源</span></p></td>
      <td
        style="border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top">
        <p style="line-height:200%; margin:0pt; text-align:justify; "><span
          style="">所影响的融资额度</span></p></td>
      <td
        style="border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top">
        <p style="line-height:200%; margin:0pt; text-align:justify; "><span
          style="">占融资总额度的比例</span></p></td>
    </tr>
    <tbody>
    ${loanSourceList ? loanSourceList : `<tr>
      <td
        style="border-bottom-style:solid;height: 27px; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top">
        <p style="line-height:200%; margin:0pt; text-align:justify; "><span
          style="">&#xa0;</span></p></td>
      <td
        style="border-bottom-style:solid;height: 27px; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top">
        <p style="line-height:200%; margin:0pt; text-align:justify; "><span
          style="">&#xa0;</span></p></td>
      <td
        style="border-bottom-style:solid;height: 27px; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top">
        <p style="line-height:200%; margin:0pt; text-align:justify; "><span
          style="">&#xa0;</span></p></td>
    </tr>`}
    </tbody>
    </table>
  <ol start="3" type="1" style="margin:0pt; padding-left:0pt;list-style-type:decimal;">
    <li
      style=" line-height:200%; list-style-position:inside; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt; ">
      <span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0; </span><span style=" font-size:12pt">甲方本次融资对应的《融资辅助服务协议》项下收取融资款的共管账户信息如下：</span>
    </li>
  </ol>
  <p style="line-height:200%; margin:0pt 0pt 0pt 21pt; text-align:justify; "><span
    style=" font-size:12pt">账户名：<span style="min-width: 150px;">${val && val["10"] || '          '}</span></span></p>
  <p style="line-height:200%; margin:0pt 0pt 0pt 21pt; text-align:justify; "><span
    style=" font-size:12pt">银行账号/商户账户编号</span><span style=" font-size:12pt;min-width: 150px;">：${val && val["11"] || '          '}</span></p>
  <p style="line-height:200%; margin:0pt 0pt 0pt 21pt; text-align:justify; "><span
    style=" font-size:12pt">开户</span><span style=" font-size:12pt">银</span><span
    style=" font-size:12pt">行</span><span style=" font-size:12pt">/支付公司名称：<span style="min-width: 150px;">${val && val["12"] || '          '}</span></span></p>
  <ol start="4" type="1" style="margin:0pt; padding-left:0pt;list-style-type:decimal;">
    <li
      style=" line-height:200%; list-style-position:inside; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt; ">
      <span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0; </span><span style=" font-size:12pt">甲方本次融资对应的《融资辅助服务协议》项下收取对OTA公司应收账款的共管账户信息如下：</span>
    </li>
  </ol>
  <p style="line-height:200%; margin:0pt 0pt 0pt 21pt; text-align:justify; "><span
    style=" font-size:12pt">账户名：<span style="min-width: 150px;">${val && val["13"] || '          '}</span></span></p>
  <p style="line-height:200%; margin:0pt 0pt 0pt 21pt; text-align:justify; "><span
    style=" font-size:12pt">银行账号/商户账户编号</span><span style=" font-size:12pt;min-width: 150px;">：${val && val["14"] || '          '}</span></p>
  <p style="line-height:200%; margin:0pt 0pt 0pt 21pt; text-align:justify; "><span
    style=" font-size:12pt">开户</span><span style=" font-size:12pt">银</span><span
    style=" font-size:12pt">行</span><span style=" font-size:12pt">/支付公司名称：<span style="min-width: 150px;">${val && val["15"] || '          '}</span></span></p>
  <ol start="5" type="1" style="margin:0pt; padding-left:0pt;list-style-type:decimal;">
    <li
      style=" line-height:200%; list-style-position:inside; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt; ">
      <span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0; </span><span style=" font-size:12pt">甲方本次融资对应的《融资辅助服务协议》项下购票账户信息如下：</span>
    </li>
  </ol>
  <p style="line-height:200%; margin:0pt 0pt 0pt 21pt; text-align:justify; "><span
    style=" font-size:12pt">支付公司名称：易宝支付有限公司</span></p>
  <p style="line-height:200%; margin:0pt 0pt 0pt 21pt; text-align:justify; "><span
    style=" font-size:12pt">商户名称：<span style="min-width: 150px;">${val && val["16"] || '          '}</span></span></p>
  <p style="line-height:200%; margin:0pt 0pt 0pt 21pt; text-align:justify; "><span
    style=" font-size:12pt">商户账户编号：<span style="min-width: 150px;">${val && val["17"] || '          '}</span></span>
  </p>
  <ol start="6" type="1" style="margin:0pt; padding-left:0pt;list-style-type:decimal;">
    <li
      style=" line-height:200%; list-style-position:inside; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt; ">
      <span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0; </span><span style=" font-size:12pt">甲方本次融资对应的《融资辅助服务协议》扣款计划详见本确认单附表，乙方将按照该扣款计划及《融资辅助服务协议》中约定的规则扣划甲方资金用于向资金提供方归还融资本金以及向资金提供方及乙方支付因本次融资而产生的各项息费。</span>
    </li>
    <li
      style=" line-height:200%; list-style-position:inside; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt; ">
      <span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0; </span><span style=" font-size:12pt">甲方接受乙方提供的《融资辅助服务协议》项下服务自资金提供方取得</span><span
      style=" font-size:12pt">本次融资后，需向乙方支付服务费，服务费=融资本金*综合融资成本*融资使用时间（日）/360-融资本金*融资利率*融资使用时间（日）/360。</span>
    </li>
    <li
      style=" line-height:200%; list-style-position:inside; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt; ">
      <span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0; </span><span style=" font-size:12pt">本确认单的签署仅为确认甲方本次申请融资的情况及针对本次融资甲乙双方履行《融资辅助服务协议》项下权责所需的相关信息，并不表明甲方一定能够自资金提供方处获得融资。</span>
    </li>
    <li
      style=" line-height:200%; list-style-position:inside; margin:0pt 0pt 0pt 0.25pt; text-align:justify; text-indent:20.75pt; ">
      <span style="font:7.0pt 'Times New Roman'">&#xa0;&#xa0; </span><span style=" font-size:12pt">本确认单作为《融资辅助服务协议》不可分割的一部分，与《融资辅助服务协议》具有同等法律效力，本确认单中未予明确的事宜适用《融资辅助服务协议》中的相关约定。</span>
    </li>
  </ol>
  <p style="line-height:200%; margin:0pt; text-align:justify; "><span
    style=" font-size:12pt">&#xa0;</span></p>
  <p style="line-height:200%; margin:0pt; text-align:justify; "><span
    style=" font-weight:bold">【特别提示】甲方通过点击确认按键的方式予以确认后，即表示甲方已充分阅读、理解并接受本确认单的全部内容，若甲方不接受本确认单中的任何内容，请切勿进行相应操作。</span>
  </p>
  <p style="line-height:200%; margin:0pt; text-align:justify; "><span
    style=" font-weight:bold">&#xa0;</span></p>
  <p style="line-height:200%; margin:0pt; text-align:justify; "><span
    style=" font-weight:bold">&#xa0;</span></p>
  <p style="line-height:200%; margin:0pt; text-align:justify; "><span
    style=" font-weight:bold">甲方（盖章）：</span></p>
  <p style="line-height:200%; margin:0pt; text-align:justify; "><span
    style=" font-weight:bold">&#xa0;</span></p>
  <p style="line-height:200%; margin:0pt; text-align:justify; "><span
    style=" font-weight:bold">&#xa0;</span></p>
  <p style="line-height:200%; margin:0pt; text-align:justify; "><span
    style=" font-weight:bold">&#xa0;</span></p>
  <p style="line-height:200%; margin:0pt; text-align:justify; "><span
    style=" font-weight:bold">乙方（盖章）：</span></p>
  <p style="line-height:200%; margin:0pt; text-align:justify; "><span
    style=" font-weight:bold">&#xa0;</span></p>
  <p style="line-height:200%; margin:0pt; text-align:justify; "><span
    style=" font-weight:bold">&#xa0;</span></p>
  <p style="line-height:200%; margin:0pt; text-align:justify; "><span
    style=" font-weight:bold">本确认单签署时间为  ${val && val["18"] || '          '}</span></p>
  <p style="line-height:200%; margin:0pt; text-align:justify; "><br
    style="page-break-before:always; clear:both"/><span
    style=" font-weight:bold">附表：划扣计划</span></p>
  <table cellspacing="0" cellpadding="0" style="border-collapse:collapse; margin-left:0pt;width: 100%">
    <tr>
      <td
        style="border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle">
        <p style="line-height:200%; margin:0pt;"><span
          style="">计划扣款日期</span></p></td>
      <td
        style="border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle">
        <p style="line-height:200%; margin:0pt;"><span
          style="">计划扣款金额（人民币元）</span></p></td>
    </tr>
    <tbody>
     ${ deductionList ? deductionList : `<tr>
      <td
        style="border-bottom-style:solid;height: 27px; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle">
        <p style="line-height:200%; margin:0pt; text-align:center; "><span
          style="">&#xa0;</span></p></td>
      <td
        style="border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:middle">
        <p style="line-height:200%;height: 27px; margin:0pt; text-align:center; "><span
          style="">&#xa0;</span></p></td>
    </tr>`}
    </tbody>
  </table>
  <p style="line-height:150%; margin:0pt; text-align:justify; "><span
    style=" font-weight:bold">&#xa0;</span></p>
</div>`
}

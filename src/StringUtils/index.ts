/**
 * 手机号码中间4位隐藏为*号
 * @param mobile
 * @example 13812345678
 * @returns 返回处理后的手机号码，其中中间4位被替换为`****`。
 */
const hideMobile = (mobile: string): string => {
    return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2")
}

/**
 * 格式化金钱，每千分位加逗号
 * @param {string} num -需要格式化的数字或数字字符串
 * @returns {string} -格式化后的字符串
 * @example
 * formatMoney(1234567.89) // "1,234,567.89"
 */
const formatMoney = (num: string | number = ''): string => {
    const cleanedNum = num.toString().replace(/\D/g, ''); // 移除非数字字符
    return cleanedNum.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 添加千分位逗号
}

/**
 * 验证手机号是否合格
 * @param {string} phoneStr -需要格式化的数字或数字字符串
 * @returns {boolean} -手机号是否合格
 * @example
 * formatMoney(123456789) // false
 */
const isPhone = (phoneStr: string): boolean => /^[1][3-9][0-9]{9}$/.test(phoneStr);

/**
 * 验证身份证号是否合格
 * @param {string} idCardStr - 身份证号码字符串
 * @returns {boolean} - 是否合格
 */
const isIdCard = (idCardStr: string): boolean =>
    /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))((0[1-9])|([12][0-9])|(3[01]))\d{3}[\dxX]$/.test(idCardStr);


/**
 * 验证车牌号是否合格
 * @param {string} vehicleNumber - 车牌号码字符串
 * @returns {boolean} - 是否合格
 */
const isVehicleNumber = (vehicleNumber: string): boolean =>
    /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$|^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{4}\d$/.test(vehicleNumber);

/**
 * 验证字符串是否为空（也不能为纯空格）
 * @param {string} string - 需要验证的字符串
 * @returns {boolean} - 是否为空
 */
const isEmptyString = (string: string): boolean =>
    !string || string.trim().length === 0;

export {
    hideMobile,
    formatMoney,
    isPhone,
    isIdCard,
    isVehicleNumber,
    isEmptyString
}



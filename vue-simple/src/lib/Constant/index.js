/*常量集*/
export default{
    REGS: {
        'email': /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
        'phone': /^[1][3,4,5,6,7,8][0-9]{9}$/
    },
    STRING_RULE:{ required: true, type: 'string'},
    NUMBER_RULE:{ required: true, type: 'number'},
    UNHREF: 'javascript:;'
}
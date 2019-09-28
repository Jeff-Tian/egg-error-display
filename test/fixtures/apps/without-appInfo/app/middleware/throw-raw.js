module.exports = (ctx, next)=>{
    const error = new Error('raw message')
    error.detail = 'detail'

    throw error;
}

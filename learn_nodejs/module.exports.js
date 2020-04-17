const greeting=name=>`hello ${name}`
//exports 相当与module.exports 但是当数据发生变化后 以module.exports为准
module.exports.greeting=greeting;
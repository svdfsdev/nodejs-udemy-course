const os = require('os')

// Платформа
console.log('Платформа : ', os.platform())

// Архитектура
console.log('Архитектура : ', os.arch())

// Информация о процессоре
console.log('Информация о процессоре : ', os.cpus())

// Свободная память
console.log('Свободная память : ', os.freemem())

// Всего памяти
console.log('Всего памяти : ', os.totalmem())

// Корневая директория
console.log('Корневая директория : ', os.homedir())

// Время работы системы (по умолчанию в секундах)
console.log('Время работы системы : ', os.uptime())

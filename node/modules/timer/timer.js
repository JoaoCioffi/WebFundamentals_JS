const schedule = require('node-schedule')

/*
(https://www.npmjs.com/package/node-schedule)
Cron-style Scheduling
The cron format consists of:

*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
*/

const task1 = schedule.scheduleJob('*/5 * * * * *', function() {
    console.log('Running task 1...', new Date().getSeconds())
})

setTimeout(function() {
    task1.cancel()
    console.log('Task 1 has been canceled')
}, 5000)

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1,5)]
rule.hour = 12
rule.second = 30

const task2 = schedule.scheduleJob(rule, function() {
    console.log('Running task 2...', new Date().getSeconds())
})
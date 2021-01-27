const { Router } = require('express')
const Course = require('../models/course')

const router = Router()

router.get('/', (req, res) => {
  res.render('add', {
    title: 'Add course',
    isAdd: true,
  })
})

router.post('/', async (req, res) => {
  const course = new Course(...Object.values(req.body))

  await course.save()

  res.redirect('/')
})

module.exports = router

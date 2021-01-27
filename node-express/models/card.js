const path = require('path')
const fs = require('fs')

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'card.json'
)

class Card {
  static async add(course) {
    const card = await Card.fetch()

    const index = card.courses.findIndex((c) => c.id == course.id)
    const candidate = card.courses[index]

    if (candidate) {
      // уже есть
      candidate.count += 1
      card.courses[index] = candidate
    } else {
      // надо добавить
      course.count = 1
      card.courses.push(course)
    }

    card.price += +course.price

    return new Promise((resolve, reject) => {
      fs.writeFile(p, JSON.stringify(card), (error) => {
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      })
    })
  }

  static async remove(id) {
    const card = await Card.fetch()

    const index = card.courses.findIndex((c) => c.id == id)
    const course = card.courses[index]

    if (course.count === 1) {
      card.courses = card.courses.filter((c) => c.id != id)
    } else {
      card.courses[index].count -= 1
    }

    card.price -= course.price

    return new Promise((resolve, reject) => {
      fs.writeFile(p, JSON.stringify(card), (error) => {
        if (error) {
          reject(error)
        } else {
          resolve(card)
        }
      })
    })
  }

  static async fetch() {
    return new Promise((resolve, reject) => {
      fs.readFile(p, 'utf-8', (error, content) => {
        if (error) {
          reject(error)
        } else {
          resolve(JSON.parse(content))
        }
      })
    })
  }
}

module.exports = Card

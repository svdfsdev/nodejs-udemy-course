const fs = require('fs')
const path = require('path')

class Course {
  constructor(title, price, img) {
    this.title = title
    this.price = price
    this.img = img
    this.id = Number(Date.now())
  }

  toJSON() {
    return {
      title: this.title,
      price: this.price,
      img: this.img,
      id: this.id,
    }
  }

  async save() {
    const courses = await Course.getAll()

    courses.push(this.toJSON())

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '../data', 'courses.json'),
        JSON.stringify(courses),
        'utf-8',
        (error) => {
          if (error) {
            reject(error)
          } else {
            resolve()
          }
        }
      )
    })

    console.log('Courses : ', courses)
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, '../data', 'courses.json'),
        'utf-8',
        (error, content) => {
          if (error) {
            reject(error)
          } else {
            resolve(JSON.parse(content))
          }
        }
      )
    })
  }
}

module.exports = Course

// src/controllers/hello_controller.js
import { Controller } from "@hotwired/stimulus"
console.log("hellow from test")
export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus!", this.element)
  }
}
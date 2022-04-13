import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ "bar" ]

    connect() {


        this.element.addEventListener("direct-upload:progress", this.updateProgress.bind(this))

        this.element.addEventListener("direct-upload:error", event => {
            event.preventDefault()
            const { id, error } = event.detail
            console.log(error)
        })
    }

    updateProgress() {
        const { id, progress } = event.detail
        this.barTarget.value = `${Math.round(progress)}%`
    }

    disconnect() {
        this.element.removeEventListener("direct-upload:progress", this.updateProgress)
    }
}
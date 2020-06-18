import React from "react"

const Emailform = () => {
  return (
    <div>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="name" placeholder="Your Name" type="hidden" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Emailform

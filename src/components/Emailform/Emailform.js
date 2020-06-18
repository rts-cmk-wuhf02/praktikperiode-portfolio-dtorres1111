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
        <input name="form-name" type="hidden" value="contact" />
        <input type="text" name="name" />
        <input type="text" name="email" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Emailform

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
        <input name="contact" type="hidden" value="contact" />
        <input type="text" name="name" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Emailform

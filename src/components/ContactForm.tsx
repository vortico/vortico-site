import React from 'react'

const LABEL_CLASSES = 'block group relative z-0 w-full'
const INPUT_CLASSES =
  'peer block w-full text-base appearance-none border-0 border-b-2 border-primary-200 bg-transparent py-2.5 px-0 text-sm text-primary-500 focus:border-brand-500 focus:outline-none focus:ring-0'
const SPAN_CLASSES =
  'absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md text-primary-200 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-brand-500'

export default function ContactForm() {
  return (
    <form>
      <div className="grid grid-cols-1 gap-4 text-left">
        <label className={`${LABEL_CLASSES}`}>
          <input className={`form-input ${INPUT_CLASSES}`} type="text" id="name" name="name" placeholder=" " required />
          <span className={`${SPAN_CLASSES}`}>Your name</span>
        </label>
        <label className={`${LABEL_CLASSES}`}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            className={`form-input ${INPUT_CLASSES}`}
            required
          />
          <span className={`${SPAN_CLASSES}`}>Email address</span>
        </label>
        <label className={`${LABEL_CLASSES}`}>
          <input className={`form-input ${INPUT_CLASSES}`} type="tel" id="phone" name="phone" placeholder=" " />
          <span className={`${SPAN_CLASSES}`}>Telephone number</span>
        </label>
        <label className={`${LABEL_CLASSES}`}>
          <textarea
            className={`form-textarea ${INPUT_CLASSES}`}
            id="message"
            name="message"
            placeholder=" "
            required
            rows={4}
          />
          <span className={`${SPAN_CLASSES}`}>How can we help you?</span>
        </label>
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center rounded-full bg-brand-500/75 px-10 py-1 text-lg text-primary-50 hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-800"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

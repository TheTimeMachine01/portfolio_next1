import React from 'react'

export default function Page() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center ">
        <div className="artboard artboard-horizontal bg-slate-600 phone-5 flex items-center justify-center">
          <div className="form-control w-full max-w-xs">
            <h1 className="m-auto text-3xl p-5 font-bold">Notes</h1>
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <label className="label mt-3">
              <span className="label-text">Description</span>
            </label>
            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs " ></textarea>
            <button className="primary btn-primary mt-5 p-2 rounded-3xl ">Submit</button>
          </div>

        </div>
      </section>
    </>
  )
}


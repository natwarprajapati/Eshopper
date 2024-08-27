import React from 'react'

function PHead({h1cn,pnm}) {
  return (
    <>
 <div className="container-fluid bg-secondary mb-5">
  <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 300}}>
    <h1 className="font-weight-semi-bold text-uppercase mb-3">{h1cn}</h1>
    <div className="d-inline-flex">
      <p className="m-0"><a >Home</a></p>
      <p className="m-0 px-2">-</p>
      <p className="m-0">{pnm}</p>
    </div>
  </div>
</div>

    </>
  )
}

export default PHead
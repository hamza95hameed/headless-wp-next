import React from 'react'
import Link from 'next/link'

const Advertisement = () => {
  return (
    <div className="advertisement pt-45 pb-80">
        <div className="container">
            <div className="col-12">
                <div className="advertisement__image text-center">
                    <Link href="#"><img src="/img/others/advertisement.png" alt="advertisement" /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advertisement
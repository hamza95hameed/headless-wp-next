import React from 'react'
import Link from 'next/link'

const Breadcrumb = ({name, type}) => {
  return (
    <div className="breadcrumb-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-content">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li className="breadcrumb-item">{type}</li>
                                <li className="breadcrumb-item active" aria-current="page">{name}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Breadcrumb
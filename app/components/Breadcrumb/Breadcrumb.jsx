import React from 'react'
import Link from 'next/link'

const Breadcrumb = () => {
  return (
    <div class="breadcrumb-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb-content">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li class="breadcrumb-item"><Link href="/category">Category</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Lifestyle</li>
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
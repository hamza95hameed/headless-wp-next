"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

export const Search = () => {
    const router = useRouter()
    const onFormSubmit = (e) => {
        e.preventDefault();
        let value = document.querySelector('#search').value;
        router.push(`/search?s=${value}`);
    }

    return (
        <div className="header__top-search">
            <form className='d-flex' onSubmit={onFormSubmit}>
                <input type="text" id="search" placeholder="Search posts here..." />
                <button className='btn p-0 w-50' type='submit'>Seacrh</button>
            </form>
        </div>
    )
}

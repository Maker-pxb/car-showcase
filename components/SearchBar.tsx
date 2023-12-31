'use client'
import React, { useState } from 'react'
import { SearchButton, SearchManufacturer } from '.'
import Image from 'next/image'
import { deleteSearchParams, updateSearchParams } from '@/utils'
import { useRouter } from 'next/navigation'

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('')
  const [modal, setModal] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    console.log('manufacturer', manufacturer)
    console.log('modal', modal)
    let newPathName = ''
    if (!modal && !manufacturer) {
      return alert('Please enter a manufacturer or model')
    }
    if (modal) {
      newPathName = updateSearchParams('model', modal)
    } else {
      newPathName = deleteSearchParams('model')
    }
    if (manufacturer) {
      newPathName = updateSearchParams('manufacturer', manufacturer)
    } else {
      newPathName = deleteSearchParams('manufacturer')
    }
    router.push(newPathName)
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model icon"
          width={40}
          height={40}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          value={modal}
          onChange={(e) => setModal(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar

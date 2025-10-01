import { Outlet } from "react-router"
import { Header } from "../components/Header/Header"
import { useEffect, useState } from "react"
import { cardArray } from "../constants/constants"

export const Layout = () =>
{
    const [searchText, setSearchText] = useState('')
    const [products, setProducts] = useState([])

    const handlSearch = (event) =>
    {
        setSearchText(event.target.value)
    }

    const handlSearchArray = () =>
    {
        setProducts(cardArray.filter((p) => { return p.title.includes(searchText) || p.price.includes(searchText) }))
    }

    useEffect(() =>
    {
        setProducts(cardArray)
    }, [])

    return (
        <>
            <Header />

            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text" value={searchText} onChange={handlSearch} />
                            <button className="btn btn-primary search-btn" onClick={handlSearchArray}>
                                <img className="search-btn__icon" src="/img/Icons/Search.svg" alt="search" />
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>

                <Outlet context={{ products }} />
            </main>
        </>
    )
}
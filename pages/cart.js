import Head from 'next/head'
import ItemCard from '../components/ItemCard'
import { useUser } from '../context/UserContext'
import { useState } from 'react'
import { ItemContext } from '../context/ItemContext'
import { useItems } from '../context/ItemContext'


export default function Checkout() {

  const { user, setUser } = useUser()

  const { items, setItems } = useItems()

//  const nameCatalog = items.map(jax => jax.name)
  
//  const displayCard = jax =>{
//    if (nameCatalog.includes(jax)) {
//      let item = items.filter(i => i.name == jax)
//      return (
//        <article className>
//          <div className="img-wrapper">
//            <img src={item[0].img}/>
//          </div>
//        </article>
//      )
//    }
//  }
  return (
    <div>
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{user.name}, let's checkout!</h1>
        <p>You have {user.cart.length} items in your cart.</p>
        <div>
          {/* TODO: Style the checkout page so the cart maps through
            * to a component for each item in the cart
          */}
          <p>{JSON.stringify(user.cart)}</p>
        </div>
      </main>
    </div>
  )
}

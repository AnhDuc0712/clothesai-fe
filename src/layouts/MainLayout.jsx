import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function MainLayout({ children }) {
return (
<div className="min-h-screen flex flex-col">
<Navbar />
<main className="flex-1 container py-8">{children}</main>
<Footer />
</div>
)
}
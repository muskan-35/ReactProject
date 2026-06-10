import React, { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Home', href: '#' },
    { name: 'Doctors', href: '#' },
    { name: 'Specialties', href: '#' },
    { name: 'Appointments', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src="/Cards/Logo/doctor.png" alt="doctor logo" className="h-15 transition duration-300 hover:scale-110 cursor-pointer"/>
          </div>

          <div className="hidden md:flex md:space-x-8">
            {links.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 px-2 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="#" className="px-3 py-1 bg-blue-600 text-white rounded">Login</a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="px-4 pb-4">
            <a href="#" className="block w-full text-center px-3 py-2 bg-blue-600 text-white rounded">Login</a>
          </div>
        </div>
      )}
    </nav>
  )
}

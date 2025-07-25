import React, { useEffect } from 'react'
import NavWrapper from '../../components/creator/NavCreator'
import Footer from '../../components/creator/Footer'

export default function MentahanInstagram() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script')
    script.setAttribute('src', 'https://www.instagram.com/embed.js')
    script.setAttribute('async', '')
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <NavWrapper />
      <section className="max-w-4xl mx-auto px-5 pt-6 pb-12">
        <h2 className="text-2xl font-semibold mb-6">Mentahan Instagram</h2>

        <div className="flex justify-center">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/reel/DKRYqf6TEMH/"
            data-instgrm-version="14"
            style={{ maxWidth: '540px', minWidth: '326px', width: '100%' }}
          ></blockquote>
        </div>
      </section>
      <Footer />
    </div>
  )
}

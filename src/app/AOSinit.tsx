'use client'

import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function AOSinit() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 0,
        })
        Aos.refresh()
    }, [])
    return null
}

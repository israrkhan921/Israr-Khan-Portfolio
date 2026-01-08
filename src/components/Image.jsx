import React from 'react'

export default function Image({src,alt='',className=''}){
  const base = 'max-w-full h-auto'
  const classes = `${base} ${className}`.trim()

  if(!src){
    return (
      <svg role="img" aria-label={alt} className={classes} viewBox="0 0 600 140" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#0b1220" />
        <text x="50%" y="50%" fill="#6b7280" dominantBaseline="middle" textAnchor="middle" fontSize="20">{alt}</text>
      </svg>
    )
  }
  return <img src={src} alt={alt} loading="lazy" className={classes} />
}

function Banner ({title, src, alt, children}){

    return (
        <div className="banner">
            <div className="banner-title">
                <h1>{title}</h1>
            </div>
            <div className="banner-img">
                <img src={src} alt={alt} />
            </div>
            {children}
        </div>
    )
}

export default Banner;
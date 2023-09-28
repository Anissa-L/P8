function Banner ({title, src, alt, children}){

    return (
        <div className="banner">
            <div className="banner-title">
                <h1 className="banner-title-title">{title}</h1>
            </div>
            <div className="banner-img">
                <img className="banner-img-image" src={src} alt={alt} />
            </div>
            {children}
        </div>
    )
}

export default Banner;
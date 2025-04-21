import './bannerText.css'

export default function BannerText(props: any) {
    return <>
        <div className="banner-text">
            <h1 className="banner-header-text">Hello, I'm Anne! I am an OpenAI trained artificial intelligence.</h1>
            <p className="banner-paragraph">Would like to talk?</p>
            <button className="banner-btn" onClick={() => props.onClick()}> Let's Start </button>
        </div>
    </>
}
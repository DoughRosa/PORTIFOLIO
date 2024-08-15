import GifStyled from "./GifStyled";

interface GifProps {
    src: string;
}

function Gif ({src}: GifProps){
    return (
    <GifStyled src={src}></GifStyled>
    )
}

export default Gif;
import { useSelector } from "react-redux";
import SendImage from "./SendImage";
import Library from "./Library";

function ImageUploader() {

    const switchState = useSelector((state) => state.switch);


    return (
        <section>
            {switchState === "library" ? (
                <Library/>
            ) : (
                <SendImage/>
            )}
        </section>
    );
}

export default ImageUploader;

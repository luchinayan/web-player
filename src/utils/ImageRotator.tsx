import {useEffect, useRef, useState} from "react";
import API from "../api/api";
import {IBackground} from "../common/types/SearchPage/BackgroundType";
import s from './ImageRotator.module.css'

const ImageRotator = () => {
    let slidePresentationTime = 5000; // 5s
    const [currentSlide, setCurrentSlide] = useState(0); // set currrent slide index
    let sliderInterval: any = useRef(); // interval ref
    const [images, setImages] = useState<IBackground[]>([])
    useEffect(() => {
        API.getBackgroundImages().then((res) => setImages(res))
    }, [])

    useEffect(() => {
        sliderInterval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % images.length); // change current slide to next after 5s
        }, slidePresentationTime);

        return () => {
            clearInterval(sliderInterval);
        };
    });

    return (
            <div className={s.contentContainer}>
                <div className={s.content}>
                    <div>
                        {images.map((image, index) => (
                            <img
                                key={image.url}
                                className={index === currentSlide ? `${s.image} ${s.active}` : s.image}
                                src={'api/' + image.url}
                                style={{
                                    zIndex: `-${+index + 1}`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default ImageRotator;

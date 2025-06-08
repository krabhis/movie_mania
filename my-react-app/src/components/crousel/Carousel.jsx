import React ,{ useref } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import dayjs from "dayjs";

const Carousel=()=>{
    const carouselContainer = useRef();
return (

    <div className="carousel">
        <ContentWrapper>
            {!loading ? (
                <div className="carouselItems" ref={carouselContainer}>
                    {data?.map((item) => {
                        const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;
                        return (
                            <div
                                key={item.id}
                                className="carouselItem"
                                onClick={() =>
                                    navigate(
                                        `/${item.media_type || endpoint}/${item.id}`
                                    )
                                }
                            >
                                <div className="posterBlock">
                                    <Img src={posterUrl} />
                                    <CircleRating rating={item.vote_average.toFixed(1)}/>
                                    <Genres data={item.genre_ids.slice(0, 2)}/>
                                </div>

                                <div className="textBlock">
                                    <span className="title">
                                        {item.title || item.name}
                                    </span>
                                    <span className="date">
                                        {dayjs(item.release_date || item.first_air_date).format("MMM D, YYYY")}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="loadingSkeleton">
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
                </div>
            )}
        </ContentWrapper>
    </div>
);

}
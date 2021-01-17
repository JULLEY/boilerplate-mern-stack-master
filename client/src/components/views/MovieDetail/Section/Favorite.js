import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Button } from 'antd';

// {/* <Favorite movieInfo={Movie} movieId={movieId} userFrom={localStorage.getItem('userId')} /> 로 선언한 props들을 가져온다. */}
function Favorite(props) {

    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)

    useEffect(() => {

        let variables = {
            userFrom,
            movieId
        }

        // post안의 URL는 임의 지정
        Axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                console.log("favoriteNumber : ", response.data)
                    setFavoriteNumber(response.data.favoriteNumber)
                if (response.data.success) {
                } else {
                    alert('숫자 정보를 가져오는데 실패 했습니다.')
                }
            })


        Axios.post('/api/favorite/favorited', variables)
            .then(response => {
                console.log("favorited : " , response.data)
                    setFavorited(response.data.favorited)
                if (response.data.success) {
                } else {
                    alert('정보를 가져오는데 실패 했습니다.')
                }
            })

    }, [])

    return (
        <div>
            <button>{Favorited ? " Not Favorite" : "Add to Favorite "} {FavoriteNumber} </button>
        </div>
    )
}

export default Favorite

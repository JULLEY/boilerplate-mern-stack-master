import React, { useEffect } from 'react'
import Axios from 'axios'
{/* <Favorite movieInfo={Movie} movieId={movieId} userFrom={localStorage.getItem('userId')} /> �� ������ props���� �����´�. */}
function Favorite(props) {

    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    useEffect(() => {

        let variables = {
            userFrom,
            movieId
        }

        // post���� URL�� ���� ����
        Axios.post('/api/favorite/favoriteNumber', variables)
        .then(response => {
            if(response.data.success) {

            }else{
                alert('���� ������ �������µ� ���� �߽��ϴ�.')
            }
        })

    }, [])

    return (
        <div>
            <button>Favorite</button>
        </div>
    )
}

export default Favorite

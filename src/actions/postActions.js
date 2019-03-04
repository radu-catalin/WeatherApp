import { NEW_POST, FETCH_ERROR } from './types';

export const createPost = postData  => dispatch => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${postData.city},${postData.country}&appid=5821588d68f650ac101bc8dc64d7d20d`)
      .then(res => res.json())
      .then(post => {
        let postData = {
            country : post.sys.country,
            city: post.name,
            sky: post.weather[0].main,
            humidity: post.main.humidity,
            temperature: parseInt(post.main.temp - 273.15),
            wind: parseInt(post.wind.speed)  
        }

        dispatch({
            type: NEW_POST,
            payload: postData
        }); 

    }).catch(err => {
        dispatch({
            type: FETCH_ERROR,
            payload: {statusError: true}
        });
    });
}

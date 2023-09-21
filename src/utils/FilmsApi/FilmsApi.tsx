import { rtkApi } from '../../store/rtkApi/rtkApi';

const filmsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getFilms: build.query({
      query: (page: number) => ({
        method: 'GET',
        // url: 'https://ott-details.p.rapidapi.com/advancedsearch',
        // params: {
        //   language: 'english',
        //   type: 'movie',
        //   sort: 'highestrated',
        //   page: page,
        // },
        // headers: {
        //   'X-RapidAPI-Key': '906db8d1f9msh7a16df21545f205p1466d6jsn37f33bec2ecf',
        //   'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
        //   'x-rapidapi-ua': 'RapidAPI-Playground',
        // },
        url: 'https://6tq2r2.sse.codesandbox.io/results',
        params: {
          _page: page,
          _limit: 50,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export const useGetFilms = filmsApi.useGetFilmsQuery;

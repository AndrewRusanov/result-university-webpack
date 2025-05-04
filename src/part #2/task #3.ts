const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface PostResponseModel {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getData = (url: string): Promise<PostResponseModel[]> => {
  return fetch(url).then((response) => response.json());
};

getData(COMMENTS_URL).then((data: PostResponseModel[]) => {
  data.map((dataItem) => {
    console.log(`ID: ${dataItem.id}, Email: ${dataItem.email}`);
  });
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */

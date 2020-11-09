import http from "./axios";

class TutorialDataService {
  getAll() {
    return http.get("posts");
  }

  get(id: number) {
    return http.get(`/posts/${id}`);
  }

  create(values: any) {
    return http.post("/posts", values);
  }

  update(id: any, data: any) {
    return http.put(`/posts/${id}`, data);
  }

  delete(id: number) {
    return http.delete(`/posts/${id}`);
  }

  // deleteAll() {
  //   return http.delete(`post`);
  // }

  findByTitle(searchTitles: any) {
    return http.get(`posts?title=${searchTitles}`);
  }
}

export default new TutorialDataService();

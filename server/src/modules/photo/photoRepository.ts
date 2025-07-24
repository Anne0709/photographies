import type { Rows } from "../../../database/client";
import DatabaseClient, { type Result } from "../../../database/client";

class PhotoRepository {
  async readAll() {
    const [result] = await DatabaseClient.query<Rows>("SELECT * FROM photo");
    return result;
  }

  async readPhotoById(photoId: number) {
    const [rows] = await DatabaseClient.query<Rows>(
      "SELECT * FROM photo WHERE id = ?",
      [photoId],
    );
    return rows;
  }

  async create(body: Photo) {
    const [result] = await DatabaseClient.query<Result>(
      "INSERT INTO photo (title, place,image) VALUES (?,?,?)",
      [body.title, body.place, body.image],
    );
    return result.affectedRows;
  }

  async update(photo: Photo) {
    const [result] = await DatabaseClient.query<Result>(
      "UPDATE photo SET title = ?, image = ?, place = ? WHERE id =?",
      [photo.title, photo.image, photo.place, photo.id],
    );
    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await DatabaseClient.query<Result>(
      "DELETE FROM photo WHERE id= ? ",
      [id],
    );
    return result.affectedRows;
  }
}

export default new PhotoRepository();

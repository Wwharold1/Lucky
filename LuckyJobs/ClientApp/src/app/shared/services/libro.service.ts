import { Injectable } from '@angular/core';
import { LIBRO_URL } from '../constants/api-urls';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class LibroService {

    constructor(
        private http: HttpClient
    ) {
    }

    async getAllLibros(params: HttpParams) {
        return await this.http.get(`${LIBRO_URL}GetLibros`,{params}).toPromise();
    }

    async addUpdateLibro(body: any) {
        return await this.http.post(`${LIBRO_URL}AddUpdateLibros`,body).toPromise();
    }

    async deleteLibro(body: any) {
        return await this.http.post(`${LIBRO_URL}DeleteLibro`,body).toPromise();
    }
}

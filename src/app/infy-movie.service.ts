import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../environments/environment";

@Injectable()
export class InfyMovieService {
  private headers=new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient) { }

  getAllMovie():Observable<any>{
    return this.http.get<any>(environment.movieApi + '/getAllMovies',{headers:this.headers})
   // .pipe(catchError(this.handleError));
  }
  deleteMovie(id:any):Observable<string>{
    return this.http.delete<string>(environment.movieApi + '/deleteMovie/'+id)
   // .pipe(catchError(this.handleError));
  }
  addMovie(data:any):Observable<any>{
    
    return this.http.post(environment.movieApi + '/addMovie',data,{responseType:"text"})
   // .pipe(catchError(this.handleError));
  }
  updateRating(data:any){
    
    return this.http.post(environment.movieApi + '/updateMovieRating',data,{responseType:"text"})
 //   .pipe(catchError(this.handleError));
  }
  // private handleError(err: HttpErrorResponse) {
  //   return throwError(err.error || 'Server error');
  // }


}

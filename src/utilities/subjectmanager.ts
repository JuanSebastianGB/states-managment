import { Observable, Subject } from 'rxjs';

export class subjectManager<T> {
  private subject$ = new Subject<T>();

  get getSubject(): Observable<T> {
    return this.subject$.asObservable();
  }

  set setSubject(value: T) {
    this.subject$.next(value);
  }
}

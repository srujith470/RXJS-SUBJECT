import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {concat, fromEvent, interval, noop, observable, Observable, of, timer, merge, Subject, BehaviorSubject, AsyncSubject, ReplaySubject} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    ngOnInit() {
        
        // const subject = new Subject()
        // const series$ = subject.asObservable();
        // series$.subscribe(val => console.log("early sub:" + val));
        // subject.next(1);
        // subject.next(2);
        // subject.next(3);
        // subject.next(4);
        // subject.next(5);
        // subject.complete

        // setTimeout(() => {
        //     series$.subscribe(val => console.log("late sub:" + val));
        //     subject.next(6)
        // }, 3000);

        // const Bsubject = new BehaviorSubject(0);
        // const Bseries$ = Bsubject.asObservable();
        // Bseries$.subscribe(val => console.log("Bseries sub:" + val));
        // Bsubject.next(1);
        // Bsubject.next(2);
        // Bsubject.next(3);
        // Bsubject.next(4);
        // Bsubject.next(5);
        // setTimeout(() => {
        //     Bseries$.subscribe(val => console.log("late Bsub:" + val));
        //     Bsubject.next(6)
        // }, 3000);

        const Asubject = new ReplaySubject();
        const Aseries$ = Asubject.asObservable();
        Aseries$.subscribe(val => console.log("Aseries sub:" + val));

        Asubject.next(1);
        Asubject.next(2);
        Asubject.next(3);    
        Asubject.complete();
        setTimeout(()=>{
            Aseries$.subscribe(val => console.log("Late Aseries sub:" + val));

        }, 3000)
    }
}







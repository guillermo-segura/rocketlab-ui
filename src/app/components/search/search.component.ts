import { Component, OnInit, OnDestroy, NgZone, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { Subject, Subscription } from 'rxjs';
import { switchMap, takeUntil, catchError } from 'rxjs/operators';

import { NodeComponent } from '../node/node.component';
import { Node } from '../../../utils/models';

const API_URL = 'http://localhost:3000';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  imports: [NgIf, NodeComponent],
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit, OnDestroy {
  query: string = '';
  searchResults: Node | undefined = undefined;
  private destroy$: Subject<void> = new Subject();
  private cancelRequest$: Subject<void> = new Subject();
  private searchSubscription: Subscription | undefined;

  constructor(private http: HttpClient, private ngZone: NgZone, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.setupSearch();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.cancelRequest$.next();
    this.cancelRequest$.complete();
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  setSearchResults(results: Node | undefined = undefined): void {
    this.searchResults = results;
    this.cdr.detectChanges();
  }

  setQuery(query: string = ''): void {
    this.query = query;
    this.cdr.detectChanges();
  }

  setupSearch(): void {
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;

    if (searchInput) {
      const search$ = new Subject<string>();

      this.searchSubscription = search$
        .pipe(
          switchMap(
            (term) => this.ngZone.run(
              () => this.http.get<{ data: Node; }>(`${API_URL}/nodes?path=${term}`)
                .pipe(
                  catchError(() => {
                    this.setSearchResults();
                    return [];
                  }),
                  takeUntil(this.cancelRequest$),
                  takeUntil(this.destroy$)
                )
            )
          )
        )
        .subscribe(results => this.setSearchResults(results.data));

      searchInput.addEventListener('input', () => {
        this.cancelRequest$.next();
        this.setQuery(searchInput.value);

        // PREVENTS REQUEST WHEN REMOVING LAST CHAR IN SEARCH TERM
        if (this.query.length > 0) {
          search$.next(this.query);
        }
      });
    }
  }
}

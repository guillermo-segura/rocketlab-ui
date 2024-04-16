import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';

import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { CreatedAtPipe } from '../../pipes/created-at.pipe'
import { Node } from '../../../utils/models';

@Component({
  selector: 'app-node',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, DeleteButtonComponent, CreatedAtPipe],
  templateUrl: './node.component.html',
  styleUrl: './node.component.css'
})
export class NodeComponent implements OnInit, OnDestroy, OnChanges {
  @Input() node: Node | undefined = undefined;
  properties: string[] = [];

  ngOnInit(): void { }

  ngOnDestroy(): void { }

  ngOnChanges(): void {
    this.properties = this.node ? Object.keys(this.node.properties) : [];
  }

  getValue(property: string): string {
    return `${this.node?.properties[property]}`;
  }

  isValueValid(property: string): boolean {
    if (!property) {
      return false;
    }

    const value = this.node?.properties[property];

    if (!value || typeof value !== 'number') { 
      return false
    }

    return value > 10;
  }

  deleteNode(): void {
    console.log('Deleting node...');
  }
}

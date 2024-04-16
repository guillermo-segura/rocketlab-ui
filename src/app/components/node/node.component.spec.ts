import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NodeComponent } from './node.component';

describe('NodeComponent', () => {
  let component: NodeComponent;
  let fixture: ComponentFixture<NodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodeComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should apply "valid-value" class to property when value > 10', () => {
    component.node = {
      id: 1,
      name: 'ValidNode',
      parentId: null,
      properties: {
        Height: 150,
      },
      children: [],
      createdAt: '2024-02-16',
    };
    component.ngOnChanges();
    fixture.detectChanges();

    const ulElement = fixture.debugElement.query(By.css(`ul`));
    const spanElement = ulElement.query(By.css(`li span`));

    expect(spanElement.nativeElement.classList.contains('valid-value')).toBe(true);
  });

  it('should not apply "valid-value" class to property when value <= 10', () => {
    component.node = {
      id: 1,
      name: 'ValidNode',
      parentId: null,
      properties: {
        Height: 9,
      },
      children: [],
      createdAt: '2024-02-16',
    };
    component.ngOnChanges();
    fixture.detectChanges();

    const ulElement = fixture.debugElement.query(By.css(`ul`));
    const spanElement = ulElement.query(By.css(`li span`));

    expect(spanElement.nativeElement.classList.contains('valid-value')).toBe(false);
  });
});

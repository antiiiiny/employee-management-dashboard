import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { EmployeeDetail } from './employee-detail';

describe('EmployeeDetail', () => {
  let component: EmployeeDetail;
  let fixture: ComponentFixture<EmployeeDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeDetail],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => '1' // Mock param
              }
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

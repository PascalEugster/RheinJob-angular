import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApprenticeshipsPage } from './apprenticeships.page';

describe('ApprenticeshipsPage', () => {
  let component: ApprenticeshipsPage;
  let fixture: ComponentFixture<ApprenticeshipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprenticeshipsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApprenticeshipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

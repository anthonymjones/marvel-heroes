import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatDialogModule, MatIconModule, MatListModule, MatMenuModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { PowersService } from '../../../core/services/powers.service';

import { SharedModule } from '../../../shared/shared.module';
import { StateModule } from '../../../state/state.module';
import { PowersComponent } from '../../components/powers/powers.component';
import { IndexComponent } from './index.component';

describe('Index Component', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        NoopAnimationsModule,
        RouterTestingModule,
        SharedModule,
        StateModule,
      ],
      providers: [PowersService],
      declarations: [IndexComponent, PowersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

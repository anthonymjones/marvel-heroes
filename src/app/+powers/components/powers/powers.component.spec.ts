import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatIconModule, MatListModule, MatMenuModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { generatePowers, Power } from '../../../core/models/power.model';
import { PowersComponent } from './powers.component';

describe('Powers Component', () => {
  let component: PowersComponent;
  let fixture: ComponentFixture<PowersComponent>;

  let powers = generatePowers();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
      declarations: [PowersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowersComponent);
    component = fixture.componentInstance;
    component.powers = powers;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the first power name', () => {
    let firstPowerEl = fixture.debugElement.query(By.css('.power'));
    expect(firstPowerEl.nativeElement.textContent.toLowerCase()).toEqual(powers[0].name.toLowerCase());
  });

  it('should raise event when user clicks delete', (done) => {
    let deletedPower: Power;
    const power = powers[0];
    let menuTriggerButton = fixture.debugElement.query(By.css('.actions > button:first-child'));
    menuTriggerButton.triggerEventHandler('click', null);
    component.deleteChange.subscribe(power => deletedPower = power);
    let firstDeleteButton = fixture.debugElement.query(By.css('.delete-btn'));
    firstDeleteButton.triggerEventHandler('click', power);
    done();
  });

});

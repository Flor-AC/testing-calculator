import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Ui Addition - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call addition method', () => {
     let result = 0;
     component.operator1 = 2;
     component.operator2 = 2;
     component.addition();
     result = component.result;
     expect(result).toBe(4);
  });



  it('Should set operator1 model through ngModel', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.operator1).toEqual(3.1416);
  });

  it('Should set operator2 model through ngModel', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.operator2).toEqual(2.71);
  });


  it('should add operator1 and operator2 when i click the addition button ', () => {
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    const additionButton = fixture.debugElement.query(By.css('.addition-button'));
    additionButton.triggerEventHandler('click', null);
    expect(component.result).toBe(7.5);

   });

  it('Should render sum in result div', () => {
    component.operator1 = 5;
    component.operator2 = 5;
    component.addition();
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.result'));
    const el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain('10');
  });

});
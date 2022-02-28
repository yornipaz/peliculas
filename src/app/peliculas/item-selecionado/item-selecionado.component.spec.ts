import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSelecionadoComponent } from './item-selecionado.component';

describe('ItemSelecionadoComponent', () => {
  let component: ItemSelecionadoComponent;
  let fixture: ComponentFixture<ItemSelecionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSelecionadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSelecionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { EntriesFormComponent } from "./components/entries-form/entries-form.component";
import { EntriesPreviewComponent } from "./components/entries-preview/entries-preview.component";
import { EntriesListComponent } from "./components/entries-list/entries-list.component";
import { IEntries } from './interfaces/ientries.interfaces';

@Component({
  selector: 'app-root',
  imports: [EntriesFormComponent, EntriesPreviewComponent, EntriesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  entriesList: IEntries[] = [
    {
      title: 'Psicobloc',
      image: 'https://static.nationalgeographic.es/files/styles/image_3200/public/01AlexHonnold.webp?w=1450&h=816',
      text: `Con la llegada del calor, la práctica de la escalada se complica. Los rocódromos, salvo unos pocos afortunados con aire acondicionado, se vuelven hornos. Las temperaturas, por encima de los 30º a la sombra, invitan más a darse un baño que a la roca. Pero hay una alternativa que une ambas posibilidades: el Psicobloc, la mejor forma de refrescarse practicando escalada.

Al no usar cuerda, se considera al Psicobloc una variante de la escalada en bloque o búlder. Sin embargo, alcanza alturas más próximas a la escalada deportiva. Su práctica es cada vez más habitual en cualquier acantilado o cueva adecuados para a ello.

El psicobloc te permite empezar realizando travesías a escasa altura, para ir habituándote al medio. Una vez familiarizado, empezarás a ganar altura subiendo por vías ascendentes.`,
      date: new Date('2023-08-01'),
    },    
    {
      title: 'Free solo',
      image:'https://static.nationalgeographic.es/files/styles/image_3200/public/07AlexHonnold.webp?w=1450&h=967&q=100',
      text: `Solo integral (free solo, en inglés): es el Tipo de escalada en roca en la que no se utilizan cuerdas, arneses ni cualquier otro tipo de equipo de protección. Por tal, únicamente la habilidad y ejecución perfecta de los movimientos es lo que separa al escalador de las consecuencias absolutas de una caída.
      
Para subir mil metros sin cuerda, Alex Honnold ya había realizado escalada en solo integral de otras rutas famosas, como Moonlight Buttress en Utah y Sendero Luminoso en México. Para subir Freerider, en el Capitán, Alex entrenó aún más intensamente, subió rutas muy largas, no tuvo interrupciones en el entrenamiento y no le contó a mucha gente sobre su proyecto.

¿Qué habría pasado si Alex Honnold se resbala, si se rompe una roca, si cae? Con cientos de metros por debajo de él, sobrevivir hubiera sido prácticamente imposible.

El esfuerzo implica, sin duda, vivir una vida de intención, una agilidad mental y atlética, el coraje de superar los miedos innatos y llevarlo todo lo más cerca posible del borde sin, literalmente, caerse.

En la práctica de la escalada en solo integral hay un estado de presencia e inmediatez absolutos. No puede haber distracción, no puede haber pensamientos ajenos al siguiente movimiento. Ninguna decisión es intrascendente. O lo hace bien, o muere. Se está ahí, «en plenitud»`,
      date: new Date('2024-08-01'),
    }
  ];

  getDataEntry(event: IEntries) {
    this.entriesList.unshift(event);
    //this.entriesList= [...this.entriesList, event];
  }

  entryPreview: IEntries | null = null;
  
  ngOnInit() {
    // Selecciona automáticamente la primera entrada al iniciar
    if (this.entriesList.length > 0) {
      this.entryPreview = this.entriesList[0];
    }
  }
}

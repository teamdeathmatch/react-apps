import 'bulma/css/bulma.css';
import './App.css';
import Course from './Course';
import One from './images/yayla.jpg'
import Two from './images/spanach.jpg'
import Three from './images/salad.jpg'
import Four from './images/fruit.jpg'

function App() {
  return (
    <div className="App">
      <section className="hero is-success">
  <div className="hero-body">
    <p className="title">
      Günün Menüsü
    </p>
  </div>
</section>
      <div className='container'>
        <section className='section'>
        <div className='columns'>
          <div className='column'>
            <Course
              image={One}
              title="Yayla Çorbası"
              description="1 Kepçe Et Suyuna Yayla Çorbası 67,00 kaloridir. Et Suyuna Yayla Çorbası içeriğinde 5,72 Karbonhidrat(g), 1,58 Protein(g), 4,17 yağ(g), 0,24 lif(g), 399,00 Sodyum(mg), 35,00 potasyum(mg), 26,00 Kalsiyum(mg), 39,00 A Vitamini(ui), 0,15 C Vitamini(mg), 0,24 ve Demir barındırır."
            />
          </div>

          <div className='column'>
          <Course
      image={Two}
      title="Kıymalı Ispanak Yemeği"
      description="1 Porsiyon (Orta) Kıymalı Ispanak 161,64 kaloridir. Kıymalı Ispanak içeriğinde 9,77 Karbonhidrat(g), 10,82 Protein(g), 8,28 yağ(g), 3,37 lif(g), 187,37 Sodyum(mg), 939,81 potasyum(mg), 231,34 Kalsiyum(mg), 870,92 A Vitamini(ui), 58,86 C Vitamini(mg), 5,18 ve Demir barındırır."
      />
          </div>

          <div className='column'>
          <Course
      image={Three}
      title="Mevsim Salata"
      description="1 Porsiyon (Orta) Mevsim Salata 59,37 kaloridir. Mevsim Salata içeriğinde 7,28 Karbonhidrat(g), 2,55 Protein(g), 1,96 yağ(g), 3,28 lif(g), 208,31 Sodyum(mg), 553,91 potasyum(mg), 75,27 Kalsiyum(mg), 252,50 A Vitamini(ui), 82,42 C Vitamini(mg), 1,79 ve Demir barındırır."
      />
          </div>

          <div className='column'>
          <Course
      image={Four}
      title="Elma"
      description="1 Adet Elma 46,80 kaloridir. Elma içeriğinde 12,43 Karbonhidrat(g), 0,23 Protein(g), 0,15 yağ(g), 2,16 lif(g), 0,90 Sodyum(mg), 96,30 potasyum(mg), 5,40 Kalsiyum(mg), 48,60 A Vitamini(ui), 4,14 C Vitamini(mg), 0,11 ve Demir barındırır."
      />
          </div>
          </div>
        </section>
       
       
      </div>
    </div>
  );
}



export default App;
